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

import {
  TestAllTypesProto3 as TS_TestAllTypesProto3,
  TestAllTypesProto3_NestedMessage as TS_TestAllTypesProto3_NestedMessage,
} from "./gen/ts/google/protobuf/test_messages_proto3_pb.js";
import { TestAllTypesProto3 as JS_TestAllTypesProto3 } from "./gen/js/google/protobuf/test_messages_proto3_pb.js";
import { testMT } from "./helpers.js";

describe("constructor takes message partial for message field", function () {
  testMT(
    { ts: TS_TestAllTypesProto3, js: JS_TestAllTypesProto3 },
    (messageType) => {
      const m = new messageType({
        recursiveMessage: {
          optionalInt32: 123,
        },
      });
      expect(m.recursiveMessage?.optionalInt32).toBe(123);
    }
  );
});

describe("constructor takes message instance for message field", function () {
  testMT(
    { ts: TS_TestAllTypesProto3, js: JS_TestAllTypesProto3 },
    (messageType) => {
      const m = new messageType({
        recursiveMessage: new messageType({
          optionalInt32: 123,
        }),
      });
      expect(m.recursiveMessage?.optionalInt32).toBe(123);
    }
  );
});

describe("constructor takes partial message for oneof field", function () {
  testMT(
    { ts: TS_TestAllTypesProto3, js: JS_TestAllTypesProto3 },
    (messageType) => {
      const m = new messageType({
        oneofField: {
          case: "oneofNestedMessage",
          value: {
            corecursive: {
              optionalInt32: 123,
            },
          },
        },
      });
      expect(m.oneofField.case).toBe("oneofNestedMessage");
      if (m.oneofField.case === "oneofNestedMessage") {
        expect(m.oneofField.value.a).toBe(0);
        expect(m.oneofField.value.corecursive).not.toBeUndefined();
        expect(m.oneofField.value.corecursive?.optionalInt32).toBe(123);
      }
    }
  );
});

describe("constructor takes partial message for map value", function () {
  testMT(
    { ts: TS_TestAllTypesProto3, js: JS_TestAllTypesProto3 },
    (messageType) => {
      const m = new messageType({
        mapStringNestedMessage: new Map<
          string,
          TS_TestAllTypesProto3_NestedMessage
        >([
          [
            "key",
            new TS_TestAllTypesProto3_NestedMessage({
              corecursive: {
                optionalInt32: 123,
              },
            }),
          ],
        ]),
      });
      expect(m.mapStringNestedMessage.get("key")).toBeDefined();
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (m.mapStringNestedMessage.get("key") !== undefined) {
        expect(m.mapStringNestedMessage.get("key")?.a).toBe(0);
        expect(
          m.mapStringNestedMessage.get("key")?.corecursive
        ).not.toBeUndefined();
        expect(
          m.mapStringNestedMessage.get("key")?.corecursive?.optionalInt32
        ).toBe(123);
      }
    }
  );
  testMT(
    { ts: TS_TestAllTypesProto3, js: JS_TestAllTypesProto3 },
    (messageType) => {
      const t = new messageType({
        optionalNestedMessage: {
          a: 123,
          corecursive: {
            optionalNestedMessage: {
              a: 456,
              corecursive: {
                optionalNestedMessage: {},
              },
            },
          },
        },
        repeatedNestedMessage: [
          {
            a: 123,
            corecursive: {
              repeatedNestedMessage: [
                {
                  a: 456,
                  corecursive: {
                    repeatedNestedMessage: [{}],
                  },
                },
              ],
            },
          },
        ],
        mapStringString: new Map<string, string>([["a", "A"]]),
        oneofField: {
          case: "oneofNestedMessage",
          value: new TS_TestAllTypesProto3_NestedMessage(),
        },
      });
      expect(t.optionalNestedMessage?.a).toBe(123);
      expect(
        t.optionalNestedMessage?.corecursive?.optionalNestedMessage?.a
      ).toBe(456);
      expect(
        t.optionalNestedMessage?.corecursive?.optionalNestedMessage?.corecursive
          ?.optionalNestedMessage?.a
      ).toBe(0);
      expect(t.repeatedNestedMessage.length).toBe(1);
      expect(t.repeatedNestedMessage[0]?.a).toBe(123);
      expect(
        t.repeatedNestedMessage[0]?.corecursive?.repeatedNestedMessage[0]?.a
      ).toBe(456);
      expect(
        t.repeatedNestedMessage[0]?.corecursive?.repeatedNestedMessage[0]
          ?.corecursive?.repeatedNestedMessage[0]?.a
      ).toBe(0);
    }
  );
});
// describe("PartialMessage", () => {
//   describe("root level", () => {
//     const partialTimestamp: PartialMessage<Timestamp> = Timestamp.now();
//     test("keeps regular fields", () => {
//       // Regular fields are untouched.
//       expect(partialTimestamp.nanos).toBeDefined();
//     });
//     test("removes standard methods and wkt methods from type system", () => {
//       // We want to test that the type system sees this function as undefined even though it's still actually there.  So
//       // we expect TS error  TS2339, but add a simple test so Jest doesn't complain there's no expectations.
//       // @ts-expect-error TS2339
//       expect(partialTimestamp.toBinary).toBeDefined();
//       // Custom methods of well-known types are removed as well.
//       // @ts-expect-error TS2339
//       expect(partialTimestamp.toDate).toBeDefined();
//     });
//   });
//   describeMT({ ts: TS_Example, js: JS_Example }, (messageType) => {
//     test("is recursive", () => {
//       const recur: PartialMessage<TS_Example> = new messageType();
//       recur.created = Timestamp.now();

//       // We want to test that the type system sees this function as undefined even though it's still actually there.  So
//       // we expect TS error  TS2339, but add a simple test so Jest doesn't complain there's no expectations.
//       // @ts-expect-error TS2339
//       expect(recur.created.toBinary).toBeDefined();
//       // Custom methods of well-known types are removed as well.
//       // @ts-expect-error TS2339
//       expect(recur.created.toDate).toBeDefined();
//     });
//   });
// });
