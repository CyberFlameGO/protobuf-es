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

import type { JsonValue, PlainMessage } from "@bufbuild/protobuf";
import { describeMT } from "./helpers.js";
import {
  MapsMessage as TS_MapsMessage,
  MapsEnum,
} from "./gen/ts/extra/msg-maps_pb.js";
import { MapsMessage as JS_MapsMessage } from "./gen/js/extra/msg-maps_pb.js";
import { protoInt64 } from "@bufbuild/protobuf";

describeMT({ ts: TS_MapsMessage, js: JS_MapsMessage }, (messageType) => {
  const defaultFields: PlainMessage<TS_MapsMessage | JS_MapsMessage> = {
    boolStrField: new Map<string, string>(),
    int32EnuField: new Map<number, MapsEnum>(),
    int32MsgField: new Map<number, TS_MapsMessage | JS_MapsMessage>(),
    int32StrField: new Map<number, string>(),
    int64EnuField: new Map<string, MapsEnum>(),
    int64MsgField: new Map<string, TS_MapsMessage | JS_MapsMessage>(),
    int64StrField: new Map<string, string>(),
    strBoolField: new Map<string, boolean>(),
    strBytesField: new Map<string, Uint8Array>(),
    strEnuField: new Map<string, MapsEnum>(),
    strInt32Field: new Map<string, number>(),
    strInt64Field: new Map<string, bigint>(),
    strMsgField: new Map<string, TS_MapsMessage | JS_MapsMessage>(),
    strStrField: new Map<string, string>(),
  };
  const defaultJson: JsonValue = {};
  const exampleFields: PlainMessage<TS_MapsMessage | JS_MapsMessage> = {
    strStrField: new Map<string, string>([
      ["a", "str"],
      ["a", "xx"],
    ]),
    strInt32Field: new Map<string, number>([
      ["a", 123],
      ["b", 455],
    ]),
    strInt64Field: new Map<string, bigint>([["a", protoInt64.parse(123)]]),
    strBoolField: new Map<string, boolean>([
      ["a", true],
      ["b", false],
    ]),
    strBytesField: new Map<string, Uint8Array>([
      [
        "a",
        new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]),
      ],
    ]),
    int32StrField: new Map<number, string>([[123, "hello"]]),
    int64StrField: new Map<string, string>([["9223372036854775807", "hello"]]),
    boolStrField: new Map<string, string>([
      ["true", "yes"],
      ["false", "no"],
    ]),
    strMsgField: new Map<string, TS_MapsMessage | JS_MapsMessage>([
      ["a", new messageType()], // TODO we do not support partial inputs here
    ]),
    int32MsgField: new Map<number, TS_MapsMessage | JS_MapsMessage>([
      [32, new messageType()], // TODO we do not support partial inputs here
    ]),
    int64MsgField: new Map<string, TS_MapsMessage | JS_MapsMessage>([
      ["64", new messageType()], // TODO we do not support partial inputs here
    ]),
    strEnuField: new Map<string, MapsEnum>([
      ["a", 0],
      ["b", 1],
      ["c", 2],
    ]),
    int32EnuField: new Map<number, MapsEnum>([
      [1, 0],
      [2, 1],
      [0, 2],
    ]),
    int64EnuField: new Map<string, MapsEnum>([
      ["-1", 0],
      ["2", 1],
      ["0", 2],
    ]),
  };
  const exampleJson: JsonValue = {
    strStrField: { a: "str", b: "xx" },
    strInt32Field: { a: 123, b: 455 },
    strInt64Field: { a: "123" },
    strBoolField: { a: true, b: false },
    strBytesField: { a: "aGVsbG8gd29ybGQ=" },
    int32StrField: { "123": "hello" },
    int64StrField: { "9223372036854775807": "hello" },
    boolStrField: { true: "yes", false: "no" },
    strMsgField: { a: {} },
    int32MsgField: { "32": {} },
    int64MsgField: { "64": {} },
    strEnuField: { a: "MAPS_ENUM_ANY", b: "MAPS_ENUM_YES", c: "MAPS_ENUM_NO" },
    int32EnuField: {
      "0": "MAPS_ENUM_NO",
      "1": "MAPS_ENUM_ANY",
      "2": "MAPS_ENUM_YES",
    },
    int64EnuField: {
      "0": "MAPS_ENUM_NO",
      "2": "MAPS_ENUM_YES",
      "-1": "MAPS_ENUM_ANY",
    },
  };
  test("has expected defaults", () => {
    const got = { ...new messageType() };
    expect(got).toStrictEqual(defaultFields);
  });
  test("defaults encodes to JSON", () => {
    const got = new messageType().toJson();
    expect(got).toStrictEqual(defaultJson);
  });
  test("defaults decodes from JSON", () => {
    const got = { ...messageType.fromJson(defaultJson) };
    expect(got).toStrictEqual(defaultFields);
  });
  test("example encodes to JSON", () => {
    const got = new messageType(exampleFields).toJson();
    expect(got).toStrictEqual(exampleJson);
  });
  test("example decodes from JSON", () => {
    const got = { ...messageType.fromJson(exampleJson) };
    expect(got).toStrictEqual(exampleFields);
  });
});
