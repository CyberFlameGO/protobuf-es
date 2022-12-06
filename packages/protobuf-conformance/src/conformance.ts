// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { readSync, writeSync } from "fs";
import protobuf from "protobufjs";

interface Registry {
  [s: string]: any;
}

const anyPb = protobuf
  .loadSync("../../.tmp/protobuf-21.7/src/google/protobuf/any.proto")
  .resolveAll()
  .lookupType("google.protobuf.Any");

const struct = protobuf
  .loadSync("../../.tmp/protobuf-21.7/src/google/protobuf/struct.proto")
  .resolveAll();

const structPb = struct.lookupType("google.protobuf.Struct");
const valuePb = struct.lookupType("google.protobuf.Value");

const wrappers = protobuf
  .loadSync("../../.tmp/protobuf-21.7/src/google/protobuf/wrappers.proto")
  .resolveAll();
const int32ValuePb = wrappers.lookupType("google.protobuf.Int32Value");

const fieldMaskPb = protobuf
  .loadSync("../../.tmp/protobuf-21.7/src/google/protobuf/field_mask.proto")
  .resolveAll()
  .lookupType("google.protobuf.FieldMask");

const durationPb = protobuf
  .loadSync("../../.tmp/protobuf-21.7/src/google/protobuf/duration.proto")
  .resolveAll()
  .lookupType("google.protobuf.Duration");

const timestampPb = protobuf
  .loadSync("../../.tmp/protobuf-21.7/src/google/protobuf/timestamp.proto")
  .resolveAll()
  .lookupType("google.protobuf.Timestamp");

const testMessagesProto2Pb = protobuf
  .loadSync(
    "../../.tmp/protobuf-21.7/src/google/protobuf/test_messages_proto2.proto"
  )
  .resolveAll()
  .lookupType("protobuf_test_messages.proto2.TestAllTypesProto2");

const testMessagesProto3Pb = protobuf
  .loadSync(
    "../../.tmp/protobuf-21.7/src/google/protobuf/test_messages_proto3.proto"
  )
  .resolveAll()
  .lookupType("protobuf_test_messages.proto3.TestAllTypesProto3");

const conformancePb = protobuf.loadSync("./src/conformance.proto").resolveAll();

const ConformanceRequest = conformancePb.lookupType(
  "conformance.ConformanceRequest"
);
const ConformanceResponse = conformancePb.lookupType(
  "conformance.ConformanceResponse"
);
const FailureSet = conformancePb.lookupType("conformance.FailureSet");
const TestCategory = conformancePb.lookupTypeOrEnum("conformance.TestCategory");

const registry: Registry = {
  [testMessagesProto2Pb["fullName"].slice(1)]: testMessagesProto2Pb,
  [testMessagesProto3Pb["fullName"].slice(1)]: testMessagesProto3Pb,
  [structPb["fullName"].slice(1)]: structPb,
  [valuePb["fullName"].slice(1)]: valuePb,
  [fieldMaskPb["fullName"].slice(1)]: fieldMaskPb,
  [durationPb["fullName"].slice(1)]: durationPb,
  [int32ValuePb["fullName"].slice(1)]: int32ValuePb,
  [anyPb["fullName"].slice(1)]: anyPb,
  [timestampPb["fullName"].slice(1)]: timestampPb,
};

function main() {
  let testCount = 0;
  try {
    while (testIo(test)) {
      testCount += 1;
    }
  } catch (e) {
    process.stderr.write(
      `conformance.ts: exiting after ${testCount} tests: ${String(e)}`
    );
    process.exit(1);
  }
}

interface Result {
  [s: string]: any;
}

// @ts-ignore
function test(request: any): Result {
  if (request.messageType === FailureSet.name) {
    // > The conformance runner will request a list of failures as the first request.
    // > This will be known by message_type == "conformance.FailureSet", a conformance
    // > test should return a serialized FailureSet in protobuf_payload.
    const failureSet = FailureSet.create();
    return {
      protobufPayload: FailureSet.encode(failureSet).finish(),
    };
  }

  const payloadType = registry[request.messageType];
  if (!payloadType) {
    return {
      runtimeError: `unknown request message type ${request.messageType}`,
    };
  }

  let payload: any;

  try {
    if (request.protobufPayload) {
      payload = payloadType.decode(request.protobufPayload);
      // appendFileSync(
      //   "programming.txt",
      //   JSON.stringify(payload) + "\n+++++++++++++++\n"
      // );
    } else if (request.jsonPayload) {
      request.testCategory ===
        TestCategory?.options?.JSON_IGNORE_UNKNOWN_PARSING_TEST;
      payload = payloadType.fromObject(JSON.parse(request.jsonPayload));
    } else {
      // We use a failure list instead of skipping, because that is more transparent.
      return {
        runtimeError: `payload not supported`,
      };
    }
  } catch (err) {
    // > This string should be set to indicate parsing failed.  The string can
    // > provide more information about the parse error if it is available.
    // >
    // > Setting this string does not necessarily mean the testee failed the
    // > test.  Some of the test cases are intentionally invalid input.
    return { parseError: String(err) };
  }

  try {
    switch (request.requestedOutputFormat) {
      case 1: // PROTOBUF
        return {
          protobufPayload: payloadType.encode(payload),
        };

      case 2: // JSON:
        return {
          jsonPayload: JSON.stringify(payloadType.toObject(payload)),
        };

      case 3: // JSPB
        return { skipped: "JSPB not supported." };

      case 4: // TEXT_FORMAT
        return { skipped: "Text format not supported." };

      default:
        return {
          runtimeError: `unknown requested output format ${request.requestedOutputFormat}`,
        };
    }
  } catch (err) {
    // > If the input was successfully parsed but errors occurred when
    // > serializing it to the requested output format, set the error message in
    // > this field.
    return { serializeError: String(err) };
  }
}

// Returns true if the test ran successfully, false on legitimate EOF.
// If EOF is encountered in an unexpected place, raises IOError.
function testIo(test: (request: any) => Result): boolean {
  setBlockingStdout();
  const requestLengthBuf = readBuffer(4);
  if (requestLengthBuf === "EOF") {
    return false;
  }
  const requestLength = requestLengthBuf.readInt32LE(0);
  const serializedRequest = readBuffer(requestLength);
  if (serializedRequest === "EOF") {
    throw "Failed to read request.";
  }
  const request = ConformanceRequest.decode(serializedRequest);
  const result = test(request);
  const response = ConformanceResponse.create(result);
  const serializedResponse = ConformanceResponse.encode(response).finish();
  const responseLengthBuf = Buffer.alloc(4);
  responseLengthBuf.writeInt32LE(serializedResponse.length, 0);
  writeBuffer(responseLengthBuf);
  writeBuffer(Buffer.from(serializedResponse));
  return true;
}

// Read a buffer of N bytes from stdin.
function readBuffer(bytes: number): Buffer | "EOF" {
  const buf = Buffer.alloc(bytes);
  let read = 0;
  try {
    read = readSync(0, buf, 0, bytes, null);
  } catch (e) {
    throw `failed to read from stdin: ${String(e)}`;
  }
  if (read !== bytes) {
    if (read === 0) {
      return "EOF";
    }
    throw "premature EOF on stdin.";
  }
  return buf;
}

// Write a buffer to stdout.
function writeBuffer(buffer: Buffer): void {
  let totalWritten = 0;
  while (totalWritten < buffer.length) {
    totalWritten += writeSync(
      1,
      buffer,
      totalWritten,
      buffer.length - totalWritten
    );
  }
}

// Fixes https://github.com/timostamm/protobuf-ts/issues/134
// Node is buffering chunks to stdout, meaning that for big generated
// files the CodeGeneratorResponse will not reach protoc completely.
// To fix this, we set stdout to block using the internal private
// method setBlocking(true)
function setBlockingStdout(): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment
  const stdoutHandle = (process.stdout as any)._handle;
  if (stdoutHandle !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    stdoutHandle.setBlocking(true);
  }
}

main();
