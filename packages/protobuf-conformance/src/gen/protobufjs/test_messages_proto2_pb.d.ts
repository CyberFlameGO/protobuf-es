import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace protobuf_test_messages. */
export namespace protobuf_test_messages {

    /** Namespace proto2. */
    namespace proto2 {

        /** Properties of a TestAllTypesProto2. */
        interface ITestAllTypesProto2 {

            /** TestAllTypesProto2 optionalInt32 */
            optionalInt32?: (number|null);

            /** TestAllTypesProto2 optionalInt64 */
            optionalInt64?: (number|Long|null);

            /** TestAllTypesProto2 optionalUint32 */
            optionalUint32?: (number|null);

            /** TestAllTypesProto2 optionalUint64 */
            optionalUint64?: (number|Long|null);

            /** TestAllTypesProto2 optionalSint32 */
            optionalSint32?: (number|null);

            /** TestAllTypesProto2 optionalSint64 */
            optionalSint64?: (number|Long|null);

            /** TestAllTypesProto2 optionalFixed32 */
            optionalFixed32?: (number|null);

            /** TestAllTypesProto2 optionalFixed64 */
            optionalFixed64?: (number|Long|null);

            /** TestAllTypesProto2 optionalSfixed32 */
            optionalSfixed32?: (number|null);

            /** TestAllTypesProto2 optionalSfixed64 */
            optionalSfixed64?: (number|Long|null);

            /** TestAllTypesProto2 optionalFloat */
            optionalFloat?: (number|null);

            /** TestAllTypesProto2 optionalDouble */
            optionalDouble?: (number|null);

            /** TestAllTypesProto2 optionalBool */
            optionalBool?: (boolean|null);

            /** TestAllTypesProto2 optionalString */
            optionalString?: (string|null);

            /** TestAllTypesProto2 optionalBytes */
            optionalBytes?: (Uint8Array|null);

            /** TestAllTypesProto2 optionalNestedMessage */
            optionalNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage|null);

            /** TestAllTypesProto2 optionalForeignMessage */
            optionalForeignMessage?: (protobuf_test_messages.proto2.IForeignMessageProto2|null);

            /** TestAllTypesProto2 optionalNestedEnum */
            optionalNestedEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null);

            /** TestAllTypesProto2 optionalForeignEnum */
            optionalForeignEnum?: (protobuf_test_messages.proto2.ForeignEnumProto2|null);

            /** TestAllTypesProto2 optionalStringPiece */
            optionalStringPiece?: (string|null);

            /** TestAllTypesProto2 optionalCord */
            optionalCord?: (string|null);

            /** TestAllTypesProto2 recursiveMessage */
            recursiveMessage?: (protobuf_test_messages.proto2.ITestAllTypesProto2|null);

            /** TestAllTypesProto2 repeatedInt32 */
            repeatedInt32?: (number[]|null);

            /** TestAllTypesProto2 repeatedInt64 */
            repeatedInt64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 repeatedUint32 */
            repeatedUint32?: (number[]|null);

            /** TestAllTypesProto2 repeatedUint64 */
            repeatedUint64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 repeatedSint32 */
            repeatedSint32?: (number[]|null);

            /** TestAllTypesProto2 repeatedSint64 */
            repeatedSint64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 repeatedFixed32 */
            repeatedFixed32?: (number[]|null);

            /** TestAllTypesProto2 repeatedFixed64 */
            repeatedFixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 repeatedSfixed32 */
            repeatedSfixed32?: (number[]|null);

            /** TestAllTypesProto2 repeatedSfixed64 */
            repeatedSfixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 repeatedFloat */
            repeatedFloat?: (number[]|null);

            /** TestAllTypesProto2 repeatedDouble */
            repeatedDouble?: (number[]|null);

            /** TestAllTypesProto2 repeatedBool */
            repeatedBool?: (boolean[]|null);

            /** TestAllTypesProto2 repeatedString */
            repeatedString?: (string[]|null);

            /** TestAllTypesProto2 repeatedBytes */
            repeatedBytes?: (Uint8Array[]|null);

            /** TestAllTypesProto2 repeatedNestedMessage */
            repeatedNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage[]|null);

            /** TestAllTypesProto2 repeatedForeignMessage */
            repeatedForeignMessage?: (protobuf_test_messages.proto2.IForeignMessageProto2[]|null);

            /** TestAllTypesProto2 repeatedNestedEnum */
            repeatedNestedEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[]|null);

            /** TestAllTypesProto2 repeatedForeignEnum */
            repeatedForeignEnum?: (protobuf_test_messages.proto2.ForeignEnumProto2[]|null);

            /** TestAllTypesProto2 repeatedStringPiece */
            repeatedStringPiece?: (string[]|null);

            /** TestAllTypesProto2 repeatedCord */
            repeatedCord?: (string[]|null);

            /** TestAllTypesProto2 packedInt32 */
            packedInt32?: (number[]|null);

            /** TestAllTypesProto2 packedInt64 */
            packedInt64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 packedUint32 */
            packedUint32?: (number[]|null);

            /** TestAllTypesProto2 packedUint64 */
            packedUint64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 packedSint32 */
            packedSint32?: (number[]|null);

            /** TestAllTypesProto2 packedSint64 */
            packedSint64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 packedFixed32 */
            packedFixed32?: (number[]|null);

            /** TestAllTypesProto2 packedFixed64 */
            packedFixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 packedSfixed32 */
            packedSfixed32?: (number[]|null);

            /** TestAllTypesProto2 packedSfixed64 */
            packedSfixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 packedFloat */
            packedFloat?: (number[]|null);

            /** TestAllTypesProto2 packedDouble */
            packedDouble?: (number[]|null);

            /** TestAllTypesProto2 packedBool */
            packedBool?: (boolean[]|null);

            /** TestAllTypesProto2 packedNestedEnum */
            packedNestedEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[]|null);

            /** TestAllTypesProto2 unpackedInt32 */
            unpackedInt32?: (number[]|null);

            /** TestAllTypesProto2 unpackedInt64 */
            unpackedInt64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 unpackedUint32 */
            unpackedUint32?: (number[]|null);

            /** TestAllTypesProto2 unpackedUint64 */
            unpackedUint64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 unpackedSint32 */
            unpackedSint32?: (number[]|null);

            /** TestAllTypesProto2 unpackedSint64 */
            unpackedSint64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 unpackedFixed32 */
            unpackedFixed32?: (number[]|null);

            /** TestAllTypesProto2 unpackedFixed64 */
            unpackedFixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 unpackedSfixed32 */
            unpackedSfixed32?: (number[]|null);

            /** TestAllTypesProto2 unpackedSfixed64 */
            unpackedSfixed64?: ((number|Long)[]|null);

            /** TestAllTypesProto2 unpackedFloat */
            unpackedFloat?: (number[]|null);

            /** TestAllTypesProto2 unpackedDouble */
            unpackedDouble?: (number[]|null);

            /** TestAllTypesProto2 unpackedBool */
            unpackedBool?: (boolean[]|null);

            /** TestAllTypesProto2 unpackedNestedEnum */
            unpackedNestedEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[]|null);

            /** TestAllTypesProto2 mapInt32Int32 */
            mapInt32Int32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto2 mapInt64Int64 */
            mapInt64Int64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto2 mapUint32Uint32 */
            mapUint32Uint32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto2 mapUint64Uint64 */
            mapUint64Uint64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto2 mapSint32Sint32 */
            mapSint32Sint32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto2 mapSint64Sint64 */
            mapSint64Sint64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto2 mapFixed32Fixed32 */
            mapFixed32Fixed32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto2 mapFixed64Fixed64 */
            mapFixed64Fixed64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto2 mapSfixed32Sfixed32 */
            mapSfixed32Sfixed32?: ({ [k: string]: number }|null);

            /** TestAllTypesProto2 mapSfixed64Sfixed64 */
            mapSfixed64Sfixed64?: ({ [k: string]: (number|Long) }|null);

            /** TestAllTypesProto2 mapInt32Float */
            mapInt32Float?: ({ [k: string]: number }|null);

            /** TestAllTypesProto2 mapInt32Double */
            mapInt32Double?: ({ [k: string]: number }|null);

            /** TestAllTypesProto2 mapBoolBool */
            mapBoolBool?: ({ [k: string]: boolean }|null);

            /** TestAllTypesProto2 mapStringString */
            mapStringString?: ({ [k: string]: string }|null);

            /** TestAllTypesProto2 mapStringBytes */
            mapStringBytes?: ({ [k: string]: Uint8Array }|null);

            /** TestAllTypesProto2 mapStringNestedMessage */
            mapStringNestedMessage?: ({ [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage }|null);

            /** TestAllTypesProto2 mapStringForeignMessage */
            mapStringForeignMessage?: ({ [k: string]: protobuf_test_messages.proto2.IForeignMessageProto2 }|null);

            /** TestAllTypesProto2 mapStringNestedEnum */
            mapStringNestedEnum?: ({ [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum }|null);

            /** TestAllTypesProto2 mapStringForeignEnum */
            mapStringForeignEnum?: ({ [k: string]: protobuf_test_messages.proto2.ForeignEnumProto2 }|null);

            /** TestAllTypesProto2 oneofUint32 */
            oneofUint32?: (number|null);

            /** TestAllTypesProto2 oneofNestedMessage */
            oneofNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage|null);

            /** TestAllTypesProto2 oneofString */
            oneofString?: (string|null);

            /** TestAllTypesProto2 oneofBytes */
            oneofBytes?: (Uint8Array|null);

            /** TestAllTypesProto2 oneofBool */
            oneofBool?: (boolean|null);

            /** TestAllTypesProto2 oneofUint64 */
            oneofUint64?: (number|Long|null);

            /** TestAllTypesProto2 oneofFloat */
            oneofFloat?: (number|null);

            /** TestAllTypesProto2 oneofDouble */
            oneofDouble?: (number|null);

            /** TestAllTypesProto2 oneofEnum */
            oneofEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null);

            /** TestAllTypesProto2 data */
            data?: (protobuf_test_messages.proto2.TestAllTypesProto2.IData|null);

            /** TestAllTypesProto2 defaultInt32 */
            defaultInt32?: (number|null);

            /** TestAllTypesProto2 defaultInt64 */
            defaultInt64?: (number|Long|null);

            /** TestAllTypesProto2 defaultUint32 */
            defaultUint32?: (number|null);

            /** TestAllTypesProto2 defaultUint64 */
            defaultUint64?: (number|Long|null);

            /** TestAllTypesProto2 defaultSint32 */
            defaultSint32?: (number|null);

            /** TestAllTypesProto2 defaultSint64 */
            defaultSint64?: (number|Long|null);

            /** TestAllTypesProto2 defaultFixed32 */
            defaultFixed32?: (number|null);

            /** TestAllTypesProto2 defaultFixed64 */
            defaultFixed64?: (number|Long|null);

            /** TestAllTypesProto2 defaultSfixed32 */
            defaultSfixed32?: (number|null);

            /** TestAllTypesProto2 defaultSfixed64 */
            defaultSfixed64?: (number|Long|null);

            /** TestAllTypesProto2 defaultFloat */
            defaultFloat?: (number|null);

            /** TestAllTypesProto2 defaultDouble */
            defaultDouble?: (number|null);

            /** TestAllTypesProto2 defaultBool */
            defaultBool?: (boolean|null);

            /** TestAllTypesProto2 defaultString */
            defaultString?: (string|null);

            /** TestAllTypesProto2 defaultBytes */
            defaultBytes?: (Uint8Array|null);

            /** TestAllTypesProto2 fieldname1 */
            fieldname1?: (number|null);

            /** TestAllTypesProto2 fieldName2 */
            fieldName2?: (number|null);

            /** TestAllTypesProto2 _fieldName3 */
            _fieldName3?: (number|null);

            /** TestAllTypesProto2 field_Name4_ */
            field_Name4_?: (number|null);

            /** TestAllTypesProto2 field0name5 */
            field0name5?: (number|null);

            /** TestAllTypesProto2 field_0Name6 */
            field_0Name6?: (number|null);

            /** TestAllTypesProto2 fieldName7 */
            fieldName7?: (number|null);

            /** TestAllTypesProto2 FieldName8 */
            FieldName8?: (number|null);

            /** TestAllTypesProto2 field_Name9 */
            field_Name9?: (number|null);

            /** TestAllTypesProto2 Field_Name10 */
            Field_Name10?: (number|null);

            /** TestAllTypesProto2 FIELD_NAME11 */
            FIELD_NAME11?: (number|null);

            /** TestAllTypesProto2 FIELDName12 */
            FIELDName12?: (number|null);

            /** TestAllTypesProto2 _FieldName13 */
            _FieldName13?: (number|null);

            /** TestAllTypesProto2 __FieldName14 */
            __FieldName14?: (number|null);

            /** TestAllTypesProto2 field_Name15 */
            field_Name15?: (number|null);

            /** TestAllTypesProto2 field__Name16 */
            field__Name16?: (number|null);

            /** TestAllTypesProto2 fieldName17__ */
            fieldName17__?: (number|null);

            /** TestAllTypesProto2 FieldName18__ */
            FieldName18__?: (number|null);

            /** TestAllTypesProto2 .protobuf_test_messages.proto2.extensionInt32 */
            ".protobuf_test_messages.proto2.extensionInt32"?: (number|null);
        }

        /** Represents a TestAllTypesProto2. */
        class TestAllTypesProto2 implements ITestAllTypesProto2 {

            /**
             * Constructs a new TestAllTypesProto2.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto2.ITestAllTypesProto2);

            /** TestAllTypesProto2 optionalInt32. */
            public optionalInt32: number;

            /** TestAllTypesProto2 optionalInt64. */
            public optionalInt64: (number|Long);

            /** TestAllTypesProto2 optionalUint32. */
            public optionalUint32: number;

            /** TestAllTypesProto2 optionalUint64. */
            public optionalUint64: (number|Long);

            /** TestAllTypesProto2 optionalSint32. */
            public optionalSint32: number;

            /** TestAllTypesProto2 optionalSint64. */
            public optionalSint64: (number|Long);

            /** TestAllTypesProto2 optionalFixed32. */
            public optionalFixed32: number;

            /** TestAllTypesProto2 optionalFixed64. */
            public optionalFixed64: (number|Long);

            /** TestAllTypesProto2 optionalSfixed32. */
            public optionalSfixed32: number;

            /** TestAllTypesProto2 optionalSfixed64. */
            public optionalSfixed64: (number|Long);

            /** TestAllTypesProto2 optionalFloat. */
            public optionalFloat: number;

            /** TestAllTypesProto2 optionalDouble. */
            public optionalDouble: number;

            /** TestAllTypesProto2 optionalBool. */
            public optionalBool: boolean;

            /** TestAllTypesProto2 optionalString. */
            public optionalString: string;

            /** TestAllTypesProto2 optionalBytes. */
            public optionalBytes: Uint8Array;

            /** TestAllTypesProto2 optionalNestedMessage. */
            public optionalNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage|null);

            /** TestAllTypesProto2 optionalForeignMessage. */
            public optionalForeignMessage?: (protobuf_test_messages.proto2.IForeignMessageProto2|null);

            /** TestAllTypesProto2 optionalNestedEnum. */
            public optionalNestedEnum: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum;

            /** TestAllTypesProto2 optionalForeignEnum. */
            public optionalForeignEnum: protobuf_test_messages.proto2.ForeignEnumProto2;

            /** TestAllTypesProto2 optionalStringPiece. */
            public optionalStringPiece: string;

            /** TestAllTypesProto2 optionalCord. */
            public optionalCord: string;

            /** TestAllTypesProto2 recursiveMessage. */
            public recursiveMessage?: (protobuf_test_messages.proto2.ITestAllTypesProto2|null);

            /** TestAllTypesProto2 repeatedInt32. */
            public repeatedInt32: number[];

            /** TestAllTypesProto2 repeatedInt64. */
            public repeatedInt64: (number|Long)[];

            /** TestAllTypesProto2 repeatedUint32. */
            public repeatedUint32: number[];

            /** TestAllTypesProto2 repeatedUint64. */
            public repeatedUint64: (number|Long)[];

            /** TestAllTypesProto2 repeatedSint32. */
            public repeatedSint32: number[];

            /** TestAllTypesProto2 repeatedSint64. */
            public repeatedSint64: (number|Long)[];

            /** TestAllTypesProto2 repeatedFixed32. */
            public repeatedFixed32: number[];

            /** TestAllTypesProto2 repeatedFixed64. */
            public repeatedFixed64: (number|Long)[];

            /** TestAllTypesProto2 repeatedSfixed32. */
            public repeatedSfixed32: number[];

            /** TestAllTypesProto2 repeatedSfixed64. */
            public repeatedSfixed64: (number|Long)[];

            /** TestAllTypesProto2 repeatedFloat. */
            public repeatedFloat: number[];

            /** TestAllTypesProto2 repeatedDouble. */
            public repeatedDouble: number[];

            /** TestAllTypesProto2 repeatedBool. */
            public repeatedBool: boolean[];

            /** TestAllTypesProto2 repeatedString. */
            public repeatedString: string[];

            /** TestAllTypesProto2 repeatedBytes. */
            public repeatedBytes: Uint8Array[];

            /** TestAllTypesProto2 repeatedNestedMessage. */
            public repeatedNestedMessage: protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage[];

            /** TestAllTypesProto2 repeatedForeignMessage. */
            public repeatedForeignMessage: protobuf_test_messages.proto2.IForeignMessageProto2[];

            /** TestAllTypesProto2 repeatedNestedEnum. */
            public repeatedNestedEnum: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[];

            /** TestAllTypesProto2 repeatedForeignEnum. */
            public repeatedForeignEnum: protobuf_test_messages.proto2.ForeignEnumProto2[];

            /** TestAllTypesProto2 repeatedStringPiece. */
            public repeatedStringPiece: string[];

            /** TestAllTypesProto2 repeatedCord. */
            public repeatedCord: string[];

            /** TestAllTypesProto2 packedInt32. */
            public packedInt32: number[];

            /** TestAllTypesProto2 packedInt64. */
            public packedInt64: (number|Long)[];

            /** TestAllTypesProto2 packedUint32. */
            public packedUint32: number[];

            /** TestAllTypesProto2 packedUint64. */
            public packedUint64: (number|Long)[];

            /** TestAllTypesProto2 packedSint32. */
            public packedSint32: number[];

            /** TestAllTypesProto2 packedSint64. */
            public packedSint64: (number|Long)[];

            /** TestAllTypesProto2 packedFixed32. */
            public packedFixed32: number[];

            /** TestAllTypesProto2 packedFixed64. */
            public packedFixed64: (number|Long)[];

            /** TestAllTypesProto2 packedSfixed32. */
            public packedSfixed32: number[];

            /** TestAllTypesProto2 packedSfixed64. */
            public packedSfixed64: (number|Long)[];

            /** TestAllTypesProto2 packedFloat. */
            public packedFloat: number[];

            /** TestAllTypesProto2 packedDouble. */
            public packedDouble: number[];

            /** TestAllTypesProto2 packedBool. */
            public packedBool: boolean[];

            /** TestAllTypesProto2 packedNestedEnum. */
            public packedNestedEnum: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[];

            /** TestAllTypesProto2 unpackedInt32. */
            public unpackedInt32: number[];

            /** TestAllTypesProto2 unpackedInt64. */
            public unpackedInt64: (number|Long)[];

            /** TestAllTypesProto2 unpackedUint32. */
            public unpackedUint32: number[];

            /** TestAllTypesProto2 unpackedUint64. */
            public unpackedUint64: (number|Long)[];

            /** TestAllTypesProto2 unpackedSint32. */
            public unpackedSint32: number[];

            /** TestAllTypesProto2 unpackedSint64. */
            public unpackedSint64: (number|Long)[];

            /** TestAllTypesProto2 unpackedFixed32. */
            public unpackedFixed32: number[];

            /** TestAllTypesProto2 unpackedFixed64. */
            public unpackedFixed64: (number|Long)[];

            /** TestAllTypesProto2 unpackedSfixed32. */
            public unpackedSfixed32: number[];

            /** TestAllTypesProto2 unpackedSfixed64. */
            public unpackedSfixed64: (number|Long)[];

            /** TestAllTypesProto2 unpackedFloat. */
            public unpackedFloat: number[];

            /** TestAllTypesProto2 unpackedDouble. */
            public unpackedDouble: number[];

            /** TestAllTypesProto2 unpackedBool. */
            public unpackedBool: boolean[];

            /** TestAllTypesProto2 unpackedNestedEnum. */
            public unpackedNestedEnum: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[];

            /** TestAllTypesProto2 mapInt32Int32. */
            public mapInt32Int32: { [k: string]: number };

            /** TestAllTypesProto2 mapInt64Int64. */
            public mapInt64Int64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapUint32Uint32. */
            public mapUint32Uint32: { [k: string]: number };

            /** TestAllTypesProto2 mapUint64Uint64. */
            public mapUint64Uint64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapSint32Sint32. */
            public mapSint32Sint32: { [k: string]: number };

            /** TestAllTypesProto2 mapSint64Sint64. */
            public mapSint64Sint64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapFixed32Fixed32. */
            public mapFixed32Fixed32: { [k: string]: number };

            /** TestAllTypesProto2 mapFixed64Fixed64. */
            public mapFixed64Fixed64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapSfixed32Sfixed32. */
            public mapSfixed32Sfixed32: { [k: string]: number };

            /** TestAllTypesProto2 mapSfixed64Sfixed64. */
            public mapSfixed64Sfixed64: { [k: string]: (number|Long) };

            /** TestAllTypesProto2 mapInt32Float. */
            public mapInt32Float: { [k: string]: number };

            /** TestAllTypesProto2 mapInt32Double. */
            public mapInt32Double: { [k: string]: number };

            /** TestAllTypesProto2 mapBoolBool. */
            public mapBoolBool: { [k: string]: boolean };

            /** TestAllTypesProto2 mapStringString. */
            public mapStringString: { [k: string]: string };

            /** TestAllTypesProto2 mapStringBytes. */
            public mapStringBytes: { [k: string]: Uint8Array };

            /** TestAllTypesProto2 mapStringNestedMessage. */
            public mapStringNestedMessage: { [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage };

            /** TestAllTypesProto2 mapStringForeignMessage. */
            public mapStringForeignMessage: { [k: string]: protobuf_test_messages.proto2.IForeignMessageProto2 };

            /** TestAllTypesProto2 mapStringNestedEnum. */
            public mapStringNestedEnum: { [k: string]: protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum };

            /** TestAllTypesProto2 mapStringForeignEnum. */
            public mapStringForeignEnum: { [k: string]: protobuf_test_messages.proto2.ForeignEnumProto2 };

            /** TestAllTypesProto2 oneofUint32. */
            public oneofUint32?: (number|null);

            /** TestAllTypesProto2 oneofNestedMessage. */
            public oneofNestedMessage?: (protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage|null);

            /** TestAllTypesProto2 oneofString. */
            public oneofString?: (string|null);

            /** TestAllTypesProto2 oneofBytes. */
            public oneofBytes?: (Uint8Array|null);

            /** TestAllTypesProto2 oneofBool. */
            public oneofBool?: (boolean|null);

            /** TestAllTypesProto2 oneofUint64. */
            public oneofUint64?: (number|Long|null);

            /** TestAllTypesProto2 oneofFloat. */
            public oneofFloat?: (number|null);

            /** TestAllTypesProto2 oneofDouble. */
            public oneofDouble?: (number|null);

            /** TestAllTypesProto2 oneofEnum. */
            public oneofEnum?: (protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null);

            /** TestAllTypesProto2 data. */
            public data?: (protobuf_test_messages.proto2.TestAllTypesProto2.IData|null);

            /** TestAllTypesProto2 defaultInt32. */
            public defaultInt32: number;

            /** TestAllTypesProto2 defaultInt64. */
            public defaultInt64: (number|Long);

            /** TestAllTypesProto2 defaultUint32. */
            public defaultUint32: number;

            /** TestAllTypesProto2 defaultUint64. */
            public defaultUint64: (number|Long);

            /** TestAllTypesProto2 defaultSint32. */
            public defaultSint32: number;

            /** TestAllTypesProto2 defaultSint64. */
            public defaultSint64: (number|Long);

            /** TestAllTypesProto2 defaultFixed32. */
            public defaultFixed32: number;

            /** TestAllTypesProto2 defaultFixed64. */
            public defaultFixed64: (number|Long);

            /** TestAllTypesProto2 defaultSfixed32. */
            public defaultSfixed32: number;

            /** TestAllTypesProto2 defaultSfixed64. */
            public defaultSfixed64: (number|Long);

            /** TestAllTypesProto2 defaultFloat. */
            public defaultFloat: number;

            /** TestAllTypesProto2 defaultDouble. */
            public defaultDouble: number;

            /** TestAllTypesProto2 defaultBool. */
            public defaultBool: boolean;

            /** TestAllTypesProto2 defaultString. */
            public defaultString: string;

            /** TestAllTypesProto2 defaultBytes. */
            public defaultBytes: Uint8Array;

            /** TestAllTypesProto2 fieldname1. */
            public fieldname1: number;

            /** TestAllTypesProto2 fieldName2. */
            public fieldName2: number;

            /** TestAllTypesProto2 _fieldName3. */
            public _fieldName3: number;

            /** TestAllTypesProto2 field_Name4_. */
            public field_Name4_: number;

            /** TestAllTypesProto2 field0name5. */
            public field0name5: number;

            /** TestAllTypesProto2 field_0Name6. */
            public field_0Name6: number;

            /** TestAllTypesProto2 fieldName7. */
            public fieldName7: number;

            /** TestAllTypesProto2 FieldName8. */
            public FieldName8: number;

            /** TestAllTypesProto2 field_Name9. */
            public field_Name9: number;

            /** TestAllTypesProto2 Field_Name10. */
            public Field_Name10: number;

            /** TestAllTypesProto2 FIELD_NAME11. */
            public FIELD_NAME11: number;

            /** TestAllTypesProto2 FIELDName12. */
            public FIELDName12: number;

            /** TestAllTypesProto2 _FieldName13. */
            public _FieldName13: number;

            /** TestAllTypesProto2 __FieldName14. */
            public __FieldName14: number;

            /** TestAllTypesProto2 field_Name15. */
            public field_Name15: number;

            /** TestAllTypesProto2 field__Name16. */
            public field__Name16: number;

            /** TestAllTypesProto2 fieldName17__. */
            public fieldName17__: number;

            /** TestAllTypesProto2 FieldName18__. */
            public FieldName18__: number;

            /** TestAllTypesProto2 oneofField. */
            public oneofField?: ("oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum");

            /**
             * Creates a new TestAllTypesProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TestAllTypesProto2 instance
             */
            public static create(properties?: protobuf_test_messages.proto2.ITestAllTypesProto2): protobuf_test_messages.proto2.TestAllTypesProto2;

            /**
             * Encodes the specified TestAllTypesProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.verify|verify} messages.
             * @param message TestAllTypesProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto2.ITestAllTypesProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TestAllTypesProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.verify|verify} messages.
             * @param message TestAllTypesProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto2.ITestAllTypesProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TestAllTypesProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TestAllTypesProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2;

            /**
             * Decodes a TestAllTypesProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TestAllTypesProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2;

            /**
             * Verifies a TestAllTypesProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TestAllTypesProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TestAllTypesProto2
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2;

            /**
             * Creates a plain object from a TestAllTypesProto2 message. Also converts values to other types if specified.
             * @param message TestAllTypesProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TestAllTypesProto2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TestAllTypesProto2
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace TestAllTypesProto2 {

            /** Properties of a NestedMessage. */
            interface INestedMessage {

                /** NestedMessage a */
                a?: (number|null);

                /** NestedMessage corecursive */
                corecursive?: (protobuf_test_messages.proto2.ITestAllTypesProto2|null);
            }

            /** Represents a NestedMessage. */
            class NestedMessage implements INestedMessage {

                /**
                 * Constructs a new NestedMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage);

                /** NestedMessage a. */
                public a: number;

                /** NestedMessage corecursive. */
                public corecursive?: (protobuf_test_messages.proto2.ITestAllTypesProto2|null);

                /**
                 * Creates a new NestedMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NestedMessage instance
                 */
                public static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage): protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage;

                /**
                 * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify|verify} messages.
                 * @param message NestedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage;

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage;

                /**
                 * Verifies a NestedMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NestedMessage
                 */
                public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage;

                /**
                 * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                 * @param message NestedMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NestedMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NestedMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** NestedEnum enum. */
            enum NestedEnum {
                FOO = 0,
                BAR = 1,
                BAZ = 2,
                NEG = -1
            }

            /** Properties of a Data. */
            interface IData {

                /** Data groupInt32 */
                groupInt32?: (number|null);

                /** Data groupUint32 */
                groupUint32?: (number|null);
            }

            /** Represents a Data. */
            class Data implements IData {

                /**
                 * Constructs a new Data.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.IData);

                /** Data groupInt32. */
                public groupInt32: number;

                /** Data groupUint32. */
                public groupUint32: number;

                /**
                 * Creates a new Data instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Data instance
                 */
                public static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.IData): protobuf_test_messages.proto2.TestAllTypesProto2.Data;

                /**
                 * Encodes the specified Data message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.Data.verify|verify} messages.
                 * @param message Data message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.IData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Data message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.Data.verify|verify} messages.
                 * @param message Data message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.IData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Data message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.Data;

                /**
                 * Decodes a Data message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.Data;

                /**
                 * Verifies a Data message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Data message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Data
                 */
                public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.Data;

                /**
                 * Creates a plain object from a Data message. Also converts values to other types if specified.
                 * @param message Data
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Data to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Data
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSetCorrect. */
            interface IMessageSetCorrect {

                /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension */
                ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1|null);

                /** MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension */
                ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"?: (protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2|null);
            }

            /** Represents a MessageSetCorrect. */
            class MessageSetCorrect {

                /**
                 * Constructs a new MessageSetCorrect.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrect);

                /**
                 * Creates a new MessageSetCorrect instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSetCorrect instance
                 */
                public static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrect): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect;

                /**
                 * Encodes the specified MessageSetCorrect message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.verify|verify} messages.
                 * @param message MessageSetCorrect message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrect, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSetCorrect message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.verify|verify} messages.
                 * @param message MessageSetCorrect message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrect, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSetCorrect message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSetCorrect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect;

                /**
                 * Decodes a MessageSetCorrect message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageSetCorrect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect;

                /**
                 * Verifies a MessageSetCorrect message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSetCorrect message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSetCorrect
                 */
                public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect;

                /**
                 * Creates a plain object from a MessageSetCorrect message. Also converts values to other types if specified.
                 * @param message MessageSetCorrect
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSetCorrect to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageSetCorrect
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSetCorrectExtension1. */
            interface IMessageSetCorrectExtension1 {

                /** MessageSetCorrectExtension1 str */
                str?: (string|null);
            }

            /** Represents a MessageSetCorrectExtension1. */
            class MessageSetCorrectExtension1 implements IMessageSetCorrectExtension1 {

                /**
                 * Constructs a new MessageSetCorrectExtension1.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1);

                /** MessageSetCorrectExtension1 str. */
                public str: string;

                /**
                 * Creates a new MessageSetCorrectExtension1 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSetCorrectExtension1 instance
                 */
                public static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1;

                /**
                 * Encodes the specified MessageSetCorrectExtension1 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                 * @param message MessageSetCorrectExtension1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSetCorrectExtension1 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                 * @param message MessageSetCorrectExtension1 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSetCorrectExtension1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1;

                /**
                 * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageSetCorrectExtension1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1;

                /**
                 * Verifies a MessageSetCorrectExtension1 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSetCorrectExtension1 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSetCorrectExtension1
                 */
                public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1;

                /**
                 * Creates a plain object from a MessageSetCorrectExtension1 message. Also converts values to other types if specified.
                 * @param message MessageSetCorrectExtension1
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSetCorrectExtension1 to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageSetCorrectExtension1
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageSetCorrectExtension2. */
            interface IMessageSetCorrectExtension2 {

                /** MessageSetCorrectExtension2 i */
                i?: (number|null);
            }

            /** Represents a MessageSetCorrectExtension2. */
            class MessageSetCorrectExtension2 implements IMessageSetCorrectExtension2 {

                /**
                 * Constructs a new MessageSetCorrectExtension2.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2);

                /** MessageSetCorrectExtension2 i. */
                public i: number;

                /**
                 * Creates a new MessageSetCorrectExtension2 instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageSetCorrectExtension2 instance
                 */
                public static create(properties?: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2;

                /**
                 * Encodes the specified MessageSetCorrectExtension2 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                 * @param message MessageSetCorrectExtension2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageSetCorrectExtension2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                 * @param message MessageSetCorrectExtension2 message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageSetCorrectExtension2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2;

                /**
                 * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageSetCorrectExtension2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2;

                /**
                 * Verifies a MessageSetCorrectExtension2 message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageSetCorrectExtension2 message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageSetCorrectExtension2
                 */
                public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2;

                /**
                 * Creates a plain object from a MessageSetCorrectExtension2 message. Also converts values to other types if specified.
                 * @param message MessageSetCorrectExtension2
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageSetCorrectExtension2 to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageSetCorrectExtension2
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a ForeignMessageProto2. */
        interface IForeignMessageProto2 {

            /** ForeignMessageProto2 c */
            c?: (number|null);
        }

        /** Represents a ForeignMessageProto2. */
        class ForeignMessageProto2 implements IForeignMessageProto2 {

            /**
             * Constructs a new ForeignMessageProto2.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto2.IForeignMessageProto2);

            /** ForeignMessageProto2 c. */
            public c: number;

            /**
             * Creates a new ForeignMessageProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForeignMessageProto2 instance
             */
            public static create(properties?: protobuf_test_messages.proto2.IForeignMessageProto2): protobuf_test_messages.proto2.ForeignMessageProto2;

            /**
             * Encodes the specified ForeignMessageProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.ForeignMessageProto2.verify|verify} messages.
             * @param message ForeignMessageProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto2.IForeignMessageProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForeignMessageProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.ForeignMessageProto2.verify|verify} messages.
             * @param message ForeignMessageProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto2.IForeignMessageProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForeignMessageProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForeignMessageProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.ForeignMessageProto2;

            /**
             * Decodes a ForeignMessageProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForeignMessageProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.ForeignMessageProto2;

            /**
             * Verifies a ForeignMessageProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForeignMessageProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForeignMessageProto2
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.ForeignMessageProto2;

            /**
             * Creates a plain object from a ForeignMessageProto2 message. Also converts values to other types if specified.
             * @param message ForeignMessageProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto2.ForeignMessageProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForeignMessageProto2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ForeignMessageProto2
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** ForeignEnumProto2 enum. */
        enum ForeignEnumProto2 {
            FOREIGN_FOO = 0,
            FOREIGN_BAR = 1,
            FOREIGN_BAZ = 2
        }

        /** Properties of an UnknownToTestAllTypes. */
        interface IUnknownToTestAllTypes {

            /** UnknownToTestAllTypes optionalInt32 */
            optionalInt32?: (number|null);

            /** UnknownToTestAllTypes optionalString */
            optionalString?: (string|null);

            /** UnknownToTestAllTypes nestedMessage */
            nestedMessage?: (protobuf_test_messages.proto2.IForeignMessageProto2|null);

            /** UnknownToTestAllTypes optionalGroup */
            optionalGroup?: (protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup|null);

            /** UnknownToTestAllTypes optionalBool */
            optionalBool?: (boolean|null);

            /** UnknownToTestAllTypes repeatedInt32 */
            repeatedInt32?: (number[]|null);
        }

        /** Represents an UnknownToTestAllTypes. */
        class UnknownToTestAllTypes implements IUnknownToTestAllTypes {

            /**
             * Constructs a new UnknownToTestAllTypes.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto2.IUnknownToTestAllTypes);

            /** UnknownToTestAllTypes optionalInt32. */
            public optionalInt32: number;

            /** UnknownToTestAllTypes optionalString. */
            public optionalString: string;

            /** UnknownToTestAllTypes nestedMessage. */
            public nestedMessage?: (protobuf_test_messages.proto2.IForeignMessageProto2|null);

            /** UnknownToTestAllTypes optionalGroup. */
            public optionalGroup?: (protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup|null);

            /** UnknownToTestAllTypes optionalBool. */
            public optionalBool: boolean;

            /** UnknownToTestAllTypes repeatedInt32. */
            public repeatedInt32: number[];

            /**
             * Creates a new UnknownToTestAllTypes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnknownToTestAllTypes instance
             */
            public static create(properties?: protobuf_test_messages.proto2.IUnknownToTestAllTypes): protobuf_test_messages.proto2.UnknownToTestAllTypes;

            /**
             * Encodes the specified UnknownToTestAllTypes message. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.verify|verify} messages.
             * @param message UnknownToTestAllTypes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto2.IUnknownToTestAllTypes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnknownToTestAllTypes message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.verify|verify} messages.
             * @param message UnknownToTestAllTypes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto2.IUnknownToTestAllTypes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnknownToTestAllTypes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnknownToTestAllTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.UnknownToTestAllTypes;

            /**
             * Decodes an UnknownToTestAllTypes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnknownToTestAllTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.UnknownToTestAllTypes;

            /**
             * Verifies an UnknownToTestAllTypes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnknownToTestAllTypes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnknownToTestAllTypes
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.UnknownToTestAllTypes;

            /**
             * Creates a plain object from an UnknownToTestAllTypes message. Also converts values to other types if specified.
             * @param message UnknownToTestAllTypes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto2.UnknownToTestAllTypes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnknownToTestAllTypes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UnknownToTestAllTypes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UnknownToTestAllTypes {

            /** Properties of an OptionalGroup. */
            interface IOptionalGroup {

                /** OptionalGroup a */
                a?: (number|null);
            }

            /** Represents an OptionalGroup. */
            class OptionalGroup implements IOptionalGroup {

                /**
                 * Constructs a new OptionalGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup);

                /** OptionalGroup a. */
                public a: number;

                /**
                 * Creates a new OptionalGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OptionalGroup instance
                 */
                public static create(properties?: protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup): protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup;

                /**
                 * Encodes the specified OptionalGroup message. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.verify|verify} messages.
                 * @param message OptionalGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OptionalGroup message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.verify|verify} messages.
                 * @param message OptionalGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup;

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup;

                /**
                 * Verifies an OptionalGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OptionalGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OptionalGroup
                 */
                public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup;

                /**
                 * Creates a plain object from an OptionalGroup message. Also converts values to other types if specified.
                 * @param message OptionalGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OptionalGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OptionalGroup
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a NullHypothesisProto2. */
        interface INullHypothesisProto2 {
        }

        /** Represents a NullHypothesisProto2. */
        class NullHypothesisProto2 implements INullHypothesisProto2 {

            /**
             * Constructs a new NullHypothesisProto2.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto2.INullHypothesisProto2);

            /**
             * Creates a new NullHypothesisProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NullHypothesisProto2 instance
             */
            public static create(properties?: protobuf_test_messages.proto2.INullHypothesisProto2): protobuf_test_messages.proto2.NullHypothesisProto2;

            /**
             * Encodes the specified NullHypothesisProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.NullHypothesisProto2.verify|verify} messages.
             * @param message NullHypothesisProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto2.INullHypothesisProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NullHypothesisProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.NullHypothesisProto2.verify|verify} messages.
             * @param message NullHypothesisProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto2.INullHypothesisProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NullHypothesisProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NullHypothesisProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.NullHypothesisProto2;

            /**
             * Decodes a NullHypothesisProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NullHypothesisProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.NullHypothesisProto2;

            /**
             * Verifies a NullHypothesisProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NullHypothesisProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NullHypothesisProto2
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.NullHypothesisProto2;

            /**
             * Creates a plain object from a NullHypothesisProto2 message. Also converts values to other types if specified.
             * @param message NullHypothesisProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto2.NullHypothesisProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NullHypothesisProto2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NullHypothesisProto2
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOnlyProto2. */
        interface IEnumOnlyProto2 {
        }

        /** Represents an EnumOnlyProto2. */
        class EnumOnlyProto2 implements IEnumOnlyProto2 {

            /**
             * Constructs a new EnumOnlyProto2.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto2.IEnumOnlyProto2);

            /**
             * Creates a new EnumOnlyProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOnlyProto2 instance
             */
            public static create(properties?: protobuf_test_messages.proto2.IEnumOnlyProto2): protobuf_test_messages.proto2.EnumOnlyProto2;

            /**
             * Encodes the specified EnumOnlyProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.EnumOnlyProto2.verify|verify} messages.
             * @param message EnumOnlyProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto2.IEnumOnlyProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOnlyProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.EnumOnlyProto2.verify|verify} messages.
             * @param message EnumOnlyProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto2.IEnumOnlyProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOnlyProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOnlyProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.EnumOnlyProto2;

            /**
             * Decodes an EnumOnlyProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOnlyProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.EnumOnlyProto2;

            /**
             * Verifies an EnumOnlyProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOnlyProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOnlyProto2
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.EnumOnlyProto2;

            /**
             * Creates a plain object from an EnumOnlyProto2 message. Also converts values to other types if specified.
             * @param message EnumOnlyProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto2.EnumOnlyProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOnlyProto2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOnlyProto2
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumOnlyProto2 {

            /** Bool enum. */
            enum Bool {
                kFalse = 0,
                kTrue = 1
            }
        }

        /** Properties of an OneStringProto2. */
        interface IOneStringProto2 {

            /** OneStringProto2 data */
            data?: (string|null);
        }

        /** Represents an OneStringProto2. */
        class OneStringProto2 implements IOneStringProto2 {

            /**
             * Constructs a new OneStringProto2.
             * @param [properties] Properties to set
             */
            constructor(properties?: protobuf_test_messages.proto2.IOneStringProto2);

            /** OneStringProto2 data. */
            public data: string;

            /**
             * Creates a new OneStringProto2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneStringProto2 instance
             */
            public static create(properties?: protobuf_test_messages.proto2.IOneStringProto2): protobuf_test_messages.proto2.OneStringProto2;

            /**
             * Encodes the specified OneStringProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.OneStringProto2.verify|verify} messages.
             * @param message OneStringProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protobuf_test_messages.proto2.IOneStringProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneStringProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.OneStringProto2.verify|verify} messages.
             * @param message OneStringProto2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protobuf_test_messages.proto2.IOneStringProto2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneStringProto2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneStringProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protobuf_test_messages.proto2.OneStringProto2;

            /**
             * Decodes an OneStringProto2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneStringProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protobuf_test_messages.proto2.OneStringProto2;

            /**
             * Verifies an OneStringProto2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneStringProto2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneStringProto2
             */
            public static fromObject(object: { [k: string]: any }): protobuf_test_messages.proto2.OneStringProto2;

            /**
             * Creates a plain object from an OneStringProto2 message. Also converts values to other types if specified.
             * @param message OneStringProto2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protobuf_test_messages.proto2.OneStringProto2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneStringProto2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneStringProto2
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
