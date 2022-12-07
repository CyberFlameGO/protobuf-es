// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const protobuf_test_messages = $root.protobuf_test_messages = (() => {

    /**
     * Namespace protobuf_test_messages.
     * @exports protobuf_test_messages
     * @namespace
     */
    const protobuf_test_messages = {};

    protobuf_test_messages.proto2 = (function() {

        /**
         * Namespace proto2.
         * @memberof protobuf_test_messages
         * @namespace
         */
        const proto2 = {};

        proto2.TestAllTypesProto2 = (function() {

            /**
             * Properties of a TestAllTypesProto2.
             * @memberof protobuf_test_messages.proto2
             * @interface ITestAllTypesProto2
             * @property {number|null} [optionalInt32] TestAllTypesProto2 optionalInt32
             * @property {number|Long|null} [optionalInt64] TestAllTypesProto2 optionalInt64
             * @property {number|null} [optionalUint32] TestAllTypesProto2 optionalUint32
             * @property {number|Long|null} [optionalUint64] TestAllTypesProto2 optionalUint64
             * @property {number|null} [optionalSint32] TestAllTypesProto2 optionalSint32
             * @property {number|Long|null} [optionalSint64] TestAllTypesProto2 optionalSint64
             * @property {number|null} [optionalFixed32] TestAllTypesProto2 optionalFixed32
             * @property {number|Long|null} [optionalFixed64] TestAllTypesProto2 optionalFixed64
             * @property {number|null} [optionalSfixed32] TestAllTypesProto2 optionalSfixed32
             * @property {number|Long|null} [optionalSfixed64] TestAllTypesProto2 optionalSfixed64
             * @property {number|null} [optionalFloat] TestAllTypesProto2 optionalFloat
             * @property {number|null} [optionalDouble] TestAllTypesProto2 optionalDouble
             * @property {boolean|null} [optionalBool] TestAllTypesProto2 optionalBool
             * @property {string|null} [optionalString] TestAllTypesProto2 optionalString
             * @property {Uint8Array|null} [optionalBytes] TestAllTypesProto2 optionalBytes
             * @property {protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage|null} [optionalNestedMessage] TestAllTypesProto2 optionalNestedMessage
             * @property {protobuf_test_messages.proto2.IForeignMessageProto2|null} [optionalForeignMessage] TestAllTypesProto2 optionalForeignMessage
             * @property {protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null} [optionalNestedEnum] TestAllTypesProto2 optionalNestedEnum
             * @property {protobuf_test_messages.proto2.ForeignEnumProto2|null} [optionalForeignEnum] TestAllTypesProto2 optionalForeignEnum
             * @property {string|null} [optionalStringPiece] TestAllTypesProto2 optionalStringPiece
             * @property {string|null} [optionalCord] TestAllTypesProto2 optionalCord
             * @property {protobuf_test_messages.proto2.ITestAllTypesProto2|null} [recursiveMessage] TestAllTypesProto2 recursiveMessage
             * @property {Array.<number>|null} [repeatedInt32] TestAllTypesProto2 repeatedInt32
             * @property {Array.<number|Long>|null} [repeatedInt64] TestAllTypesProto2 repeatedInt64
             * @property {Array.<number>|null} [repeatedUint32] TestAllTypesProto2 repeatedUint32
             * @property {Array.<number|Long>|null} [repeatedUint64] TestAllTypesProto2 repeatedUint64
             * @property {Array.<number>|null} [repeatedSint32] TestAllTypesProto2 repeatedSint32
             * @property {Array.<number|Long>|null} [repeatedSint64] TestAllTypesProto2 repeatedSint64
             * @property {Array.<number>|null} [repeatedFixed32] TestAllTypesProto2 repeatedFixed32
             * @property {Array.<number|Long>|null} [repeatedFixed64] TestAllTypesProto2 repeatedFixed64
             * @property {Array.<number>|null} [repeatedSfixed32] TestAllTypesProto2 repeatedSfixed32
             * @property {Array.<number|Long>|null} [repeatedSfixed64] TestAllTypesProto2 repeatedSfixed64
             * @property {Array.<number>|null} [repeatedFloat] TestAllTypesProto2 repeatedFloat
             * @property {Array.<number>|null} [repeatedDouble] TestAllTypesProto2 repeatedDouble
             * @property {Array.<boolean>|null} [repeatedBool] TestAllTypesProto2 repeatedBool
             * @property {Array.<string>|null} [repeatedString] TestAllTypesProto2 repeatedString
             * @property {Array.<Uint8Array>|null} [repeatedBytes] TestAllTypesProto2 repeatedBytes
             * @property {Array.<protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage>|null} [repeatedNestedMessage] TestAllTypesProto2 repeatedNestedMessage
             * @property {Array.<protobuf_test_messages.proto2.IForeignMessageProto2>|null} [repeatedForeignMessage] TestAllTypesProto2 repeatedForeignMessage
             * @property {Array.<protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum>|null} [repeatedNestedEnum] TestAllTypesProto2 repeatedNestedEnum
             * @property {Array.<protobuf_test_messages.proto2.ForeignEnumProto2>|null} [repeatedForeignEnum] TestAllTypesProto2 repeatedForeignEnum
             * @property {Array.<string>|null} [repeatedStringPiece] TestAllTypesProto2 repeatedStringPiece
             * @property {Array.<string>|null} [repeatedCord] TestAllTypesProto2 repeatedCord
             * @property {Array.<number>|null} [packedInt32] TestAllTypesProto2 packedInt32
             * @property {Array.<number|Long>|null} [packedInt64] TestAllTypesProto2 packedInt64
             * @property {Array.<number>|null} [packedUint32] TestAllTypesProto2 packedUint32
             * @property {Array.<number|Long>|null} [packedUint64] TestAllTypesProto2 packedUint64
             * @property {Array.<number>|null} [packedSint32] TestAllTypesProto2 packedSint32
             * @property {Array.<number|Long>|null} [packedSint64] TestAllTypesProto2 packedSint64
             * @property {Array.<number>|null} [packedFixed32] TestAllTypesProto2 packedFixed32
             * @property {Array.<number|Long>|null} [packedFixed64] TestAllTypesProto2 packedFixed64
             * @property {Array.<number>|null} [packedSfixed32] TestAllTypesProto2 packedSfixed32
             * @property {Array.<number|Long>|null} [packedSfixed64] TestAllTypesProto2 packedSfixed64
             * @property {Array.<number>|null} [packedFloat] TestAllTypesProto2 packedFloat
             * @property {Array.<number>|null} [packedDouble] TestAllTypesProto2 packedDouble
             * @property {Array.<boolean>|null} [packedBool] TestAllTypesProto2 packedBool
             * @property {Array.<protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum>|null} [packedNestedEnum] TestAllTypesProto2 packedNestedEnum
             * @property {Array.<number>|null} [unpackedInt32] TestAllTypesProto2 unpackedInt32
             * @property {Array.<number|Long>|null} [unpackedInt64] TestAllTypesProto2 unpackedInt64
             * @property {Array.<number>|null} [unpackedUint32] TestAllTypesProto2 unpackedUint32
             * @property {Array.<number|Long>|null} [unpackedUint64] TestAllTypesProto2 unpackedUint64
             * @property {Array.<number>|null} [unpackedSint32] TestAllTypesProto2 unpackedSint32
             * @property {Array.<number|Long>|null} [unpackedSint64] TestAllTypesProto2 unpackedSint64
             * @property {Array.<number>|null} [unpackedFixed32] TestAllTypesProto2 unpackedFixed32
             * @property {Array.<number|Long>|null} [unpackedFixed64] TestAllTypesProto2 unpackedFixed64
             * @property {Array.<number>|null} [unpackedSfixed32] TestAllTypesProto2 unpackedSfixed32
             * @property {Array.<number|Long>|null} [unpackedSfixed64] TestAllTypesProto2 unpackedSfixed64
             * @property {Array.<number>|null} [unpackedFloat] TestAllTypesProto2 unpackedFloat
             * @property {Array.<number>|null} [unpackedDouble] TestAllTypesProto2 unpackedDouble
             * @property {Array.<boolean>|null} [unpackedBool] TestAllTypesProto2 unpackedBool
             * @property {Array.<protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum>|null} [unpackedNestedEnum] TestAllTypesProto2 unpackedNestedEnum
             * @property {Object.<string,number>|null} [mapInt32Int32] TestAllTypesProto2 mapInt32Int32
             * @property {Object.<string,number|Long>|null} [mapInt64Int64] TestAllTypesProto2 mapInt64Int64
             * @property {Object.<string,number>|null} [mapUint32Uint32] TestAllTypesProto2 mapUint32Uint32
             * @property {Object.<string,number|Long>|null} [mapUint64Uint64] TestAllTypesProto2 mapUint64Uint64
             * @property {Object.<string,number>|null} [mapSint32Sint32] TestAllTypesProto2 mapSint32Sint32
             * @property {Object.<string,number|Long>|null} [mapSint64Sint64] TestAllTypesProto2 mapSint64Sint64
             * @property {Object.<string,number>|null} [mapFixed32Fixed32] TestAllTypesProto2 mapFixed32Fixed32
             * @property {Object.<string,number|Long>|null} [mapFixed64Fixed64] TestAllTypesProto2 mapFixed64Fixed64
             * @property {Object.<string,number>|null} [mapSfixed32Sfixed32] TestAllTypesProto2 mapSfixed32Sfixed32
             * @property {Object.<string,number|Long>|null} [mapSfixed64Sfixed64] TestAllTypesProto2 mapSfixed64Sfixed64
             * @property {Object.<string,number>|null} [mapInt32Float] TestAllTypesProto2 mapInt32Float
             * @property {Object.<string,number>|null} [mapInt32Double] TestAllTypesProto2 mapInt32Double
             * @property {Object.<string,boolean>|null} [mapBoolBool] TestAllTypesProto2 mapBoolBool
             * @property {Object.<string,string>|null} [mapStringString] TestAllTypesProto2 mapStringString
             * @property {Object.<string,Uint8Array>|null} [mapStringBytes] TestAllTypesProto2 mapStringBytes
             * @property {Object.<string,protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage>|null} [mapStringNestedMessage] TestAllTypesProto2 mapStringNestedMessage
             * @property {Object.<string,protobuf_test_messages.proto2.IForeignMessageProto2>|null} [mapStringForeignMessage] TestAllTypesProto2 mapStringForeignMessage
             * @property {Object.<string,protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum>|null} [mapStringNestedEnum] TestAllTypesProto2 mapStringNestedEnum
             * @property {Object.<string,protobuf_test_messages.proto2.ForeignEnumProto2>|null} [mapStringForeignEnum] TestAllTypesProto2 mapStringForeignEnum
             * @property {number|null} [oneofUint32] TestAllTypesProto2 oneofUint32
             * @property {protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage|null} [oneofNestedMessage] TestAllTypesProto2 oneofNestedMessage
             * @property {string|null} [oneofString] TestAllTypesProto2 oneofString
             * @property {Uint8Array|null} [oneofBytes] TestAllTypesProto2 oneofBytes
             * @property {boolean|null} [oneofBool] TestAllTypesProto2 oneofBool
             * @property {number|Long|null} [oneofUint64] TestAllTypesProto2 oneofUint64
             * @property {number|null} [oneofFloat] TestAllTypesProto2 oneofFloat
             * @property {number|null} [oneofDouble] TestAllTypesProto2 oneofDouble
             * @property {protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null} [oneofEnum] TestAllTypesProto2 oneofEnum
             * @property {protobuf_test_messages.proto2.TestAllTypesProto2.IData|null} [data] TestAllTypesProto2 data
             * @property {number|null} [defaultInt32] TestAllTypesProto2 defaultInt32
             * @property {number|Long|null} [defaultInt64] TestAllTypesProto2 defaultInt64
             * @property {number|null} [defaultUint32] TestAllTypesProto2 defaultUint32
             * @property {number|Long|null} [defaultUint64] TestAllTypesProto2 defaultUint64
             * @property {number|null} [defaultSint32] TestAllTypesProto2 defaultSint32
             * @property {number|Long|null} [defaultSint64] TestAllTypesProto2 defaultSint64
             * @property {number|null} [defaultFixed32] TestAllTypesProto2 defaultFixed32
             * @property {number|Long|null} [defaultFixed64] TestAllTypesProto2 defaultFixed64
             * @property {number|null} [defaultSfixed32] TestAllTypesProto2 defaultSfixed32
             * @property {number|Long|null} [defaultSfixed64] TestAllTypesProto2 defaultSfixed64
             * @property {number|null} [defaultFloat] TestAllTypesProto2 defaultFloat
             * @property {number|null} [defaultDouble] TestAllTypesProto2 defaultDouble
             * @property {boolean|null} [defaultBool] TestAllTypesProto2 defaultBool
             * @property {string|null} [defaultString] TestAllTypesProto2 defaultString
             * @property {Uint8Array|null} [defaultBytes] TestAllTypesProto2 defaultBytes
             * @property {number|null} [fieldname1] TestAllTypesProto2 fieldname1
             * @property {number|null} [fieldName2] TestAllTypesProto2 fieldName2
             * @property {number|null} [_fieldName3] TestAllTypesProto2 _fieldName3
             * @property {number|null} [field_Name4_] TestAllTypesProto2 field_Name4_
             * @property {number|null} [field0name5] TestAllTypesProto2 field0name5
             * @property {number|null} [field_0Name6] TestAllTypesProto2 field_0Name6
             * @property {number|null} [fieldName7] TestAllTypesProto2 fieldName7
             * @property {number|null} [FieldName8] TestAllTypesProto2 FieldName8
             * @property {number|null} [field_Name9] TestAllTypesProto2 field_Name9
             * @property {number|null} [Field_Name10] TestAllTypesProto2 Field_Name10
             * @property {number|null} [FIELD_NAME11] TestAllTypesProto2 FIELD_NAME11
             * @property {number|null} [FIELDName12] TestAllTypesProto2 FIELDName12
             * @property {number|null} [_FieldName13] TestAllTypesProto2 _FieldName13
             * @property {number|null} [__FieldName14] TestAllTypesProto2 __FieldName14
             * @property {number|null} [field_Name15] TestAllTypesProto2 field_Name15
             * @property {number|null} [field__Name16] TestAllTypesProto2 field__Name16
             * @property {number|null} [fieldName17__] TestAllTypesProto2 fieldName17__
             * @property {number|null} [FieldName18__] TestAllTypesProto2 FieldName18__
             * @property {number|null} [".protobuf_test_messages.proto2.extensionInt32"] TestAllTypesProto2 .protobuf_test_messages.proto2.extensionInt32
             */

            /**
             * Constructs a new TestAllTypesProto2.
             * @memberof protobuf_test_messages.proto2
             * @classdesc Represents a TestAllTypesProto2.
             * @implements ITestAllTypesProto2
             * @constructor
             * @param {protobuf_test_messages.proto2.ITestAllTypesProto2=} [properties] Properties to set
             */
            function TestAllTypesProto2(properties) {
                this.repeatedInt32 = [];
                this.repeatedInt64 = [];
                this.repeatedUint32 = [];
                this.repeatedUint64 = [];
                this.repeatedSint32 = [];
                this.repeatedSint64 = [];
                this.repeatedFixed32 = [];
                this.repeatedFixed64 = [];
                this.repeatedSfixed32 = [];
                this.repeatedSfixed64 = [];
                this.repeatedFloat = [];
                this.repeatedDouble = [];
                this.repeatedBool = [];
                this.repeatedString = [];
                this.repeatedBytes = [];
                this.repeatedNestedMessage = [];
                this.repeatedForeignMessage = [];
                this.repeatedNestedEnum = [];
                this.repeatedForeignEnum = [];
                this.repeatedStringPiece = [];
                this.repeatedCord = [];
                this.packedInt32 = [];
                this.packedInt64 = [];
                this.packedUint32 = [];
                this.packedUint64 = [];
                this.packedSint32 = [];
                this.packedSint64 = [];
                this.packedFixed32 = [];
                this.packedFixed64 = [];
                this.packedSfixed32 = [];
                this.packedSfixed64 = [];
                this.packedFloat = [];
                this.packedDouble = [];
                this.packedBool = [];
                this.packedNestedEnum = [];
                this.unpackedInt32 = [];
                this.unpackedInt64 = [];
                this.unpackedUint32 = [];
                this.unpackedUint64 = [];
                this.unpackedSint32 = [];
                this.unpackedSint64 = [];
                this.unpackedFixed32 = [];
                this.unpackedFixed64 = [];
                this.unpackedSfixed32 = [];
                this.unpackedSfixed64 = [];
                this.unpackedFloat = [];
                this.unpackedDouble = [];
                this.unpackedBool = [];
                this.unpackedNestedEnum = [];
                this.mapInt32Int32 = {};
                this.mapInt64Int64 = {};
                this.mapUint32Uint32 = {};
                this.mapUint64Uint64 = {};
                this.mapSint32Sint32 = {};
                this.mapSint64Sint64 = {};
                this.mapFixed32Fixed32 = {};
                this.mapFixed64Fixed64 = {};
                this.mapSfixed32Sfixed32 = {};
                this.mapSfixed64Sfixed64 = {};
                this.mapInt32Float = {};
                this.mapInt32Double = {};
                this.mapBoolBool = {};
                this.mapStringString = {};
                this.mapStringBytes = {};
                this.mapStringNestedMessage = {};
                this.mapStringForeignMessage = {};
                this.mapStringNestedEnum = {};
                this.mapStringForeignEnum = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TestAllTypesProto2 optionalInt32.
             * @member {number} optionalInt32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalInt32 = 0;

            /**
             * TestAllTypesProto2 optionalInt64.
             * @member {number|Long} optionalInt64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalInt64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TestAllTypesProto2 optionalUint32.
             * @member {number} optionalUint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalUint32 = 0;

            /**
             * TestAllTypesProto2 optionalUint64.
             * @member {number|Long} optionalUint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalUint64 = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * TestAllTypesProto2 optionalSint32.
             * @member {number} optionalSint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalSint32 = 0;

            /**
             * TestAllTypesProto2 optionalSint64.
             * @member {number|Long} optionalSint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalSint64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TestAllTypesProto2 optionalFixed32.
             * @member {number} optionalFixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalFixed32 = 0;

            /**
             * TestAllTypesProto2 optionalFixed64.
             * @member {number|Long} optionalFixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalFixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TestAllTypesProto2 optionalSfixed32.
             * @member {number} optionalSfixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalSfixed32 = 0;

            /**
             * TestAllTypesProto2 optionalSfixed64.
             * @member {number|Long} optionalSfixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalSfixed64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * TestAllTypesProto2 optionalFloat.
             * @member {number} optionalFloat
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalFloat = 0;

            /**
             * TestAllTypesProto2 optionalDouble.
             * @member {number} optionalDouble
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalDouble = 0;

            /**
             * TestAllTypesProto2 optionalBool.
             * @member {boolean} optionalBool
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalBool = false;

            /**
             * TestAllTypesProto2 optionalString.
             * @member {string} optionalString
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalString = "";

            /**
             * TestAllTypesProto2 optionalBytes.
             * @member {Uint8Array} optionalBytes
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalBytes = $util.newBuffer([]);

            /**
             * TestAllTypesProto2 optionalNestedMessage.
             * @member {protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage|null|undefined} optionalNestedMessage
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalNestedMessage = null;

            /**
             * TestAllTypesProto2 optionalForeignMessage.
             * @member {protobuf_test_messages.proto2.IForeignMessageProto2|null|undefined} optionalForeignMessage
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalForeignMessage = null;

            /**
             * TestAllTypesProto2 optionalNestedEnum.
             * @member {protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum} optionalNestedEnum
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalNestedEnum = 0;

            /**
             * TestAllTypesProto2 optionalForeignEnum.
             * @member {protobuf_test_messages.proto2.ForeignEnumProto2} optionalForeignEnum
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalForeignEnum = 0;

            /**
             * TestAllTypesProto2 optionalStringPiece.
             * @member {string} optionalStringPiece
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalStringPiece = "";

            /**
             * TestAllTypesProto2 optionalCord.
             * @member {string} optionalCord
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.optionalCord = "";

            /**
             * TestAllTypesProto2 recursiveMessage.
             * @member {protobuf_test_messages.proto2.ITestAllTypesProto2|null|undefined} recursiveMessage
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.recursiveMessage = null;

            /**
             * TestAllTypesProto2 repeatedInt32.
             * @member {Array.<number>} repeatedInt32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedInt32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedInt64.
             * @member {Array.<number|Long>} repeatedInt64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedInt64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedUint32.
             * @member {Array.<number>} repeatedUint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedUint32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedUint64.
             * @member {Array.<number|Long>} repeatedUint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedUint64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedSint32.
             * @member {Array.<number>} repeatedSint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedSint32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedSint64.
             * @member {Array.<number|Long>} repeatedSint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedSint64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedFixed32.
             * @member {Array.<number>} repeatedFixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedFixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedFixed64.
             * @member {Array.<number|Long>} repeatedFixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedFixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedSfixed32.
             * @member {Array.<number>} repeatedSfixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedSfixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedSfixed64.
             * @member {Array.<number|Long>} repeatedSfixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedSfixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedFloat.
             * @member {Array.<number>} repeatedFloat
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedFloat = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedDouble.
             * @member {Array.<number>} repeatedDouble
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedDouble = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedBool.
             * @member {Array.<boolean>} repeatedBool
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedBool = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedString.
             * @member {Array.<string>} repeatedString
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedString = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedBytes.
             * @member {Array.<Uint8Array>} repeatedBytes
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedBytes = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedNestedMessage.
             * @member {Array.<protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage>} repeatedNestedMessage
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedNestedMessage = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedForeignMessage.
             * @member {Array.<protobuf_test_messages.proto2.IForeignMessageProto2>} repeatedForeignMessage
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedForeignMessage = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedNestedEnum.
             * @member {Array.<protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum>} repeatedNestedEnum
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedNestedEnum = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedForeignEnum.
             * @member {Array.<protobuf_test_messages.proto2.ForeignEnumProto2>} repeatedForeignEnum
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedForeignEnum = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedStringPiece.
             * @member {Array.<string>} repeatedStringPiece
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedStringPiece = $util.emptyArray;

            /**
             * TestAllTypesProto2 repeatedCord.
             * @member {Array.<string>} repeatedCord
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.repeatedCord = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedInt32.
             * @member {Array.<number>} packedInt32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedInt32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedInt64.
             * @member {Array.<number|Long>} packedInt64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedInt64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedUint32.
             * @member {Array.<number>} packedUint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedUint32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedUint64.
             * @member {Array.<number|Long>} packedUint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedUint64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedSint32.
             * @member {Array.<number>} packedSint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedSint32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedSint64.
             * @member {Array.<number|Long>} packedSint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedSint64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedFixed32.
             * @member {Array.<number>} packedFixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedFixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedFixed64.
             * @member {Array.<number|Long>} packedFixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedFixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedSfixed32.
             * @member {Array.<number>} packedSfixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedSfixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedSfixed64.
             * @member {Array.<number|Long>} packedSfixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedSfixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedFloat.
             * @member {Array.<number>} packedFloat
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedFloat = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedDouble.
             * @member {Array.<number>} packedDouble
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedDouble = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedBool.
             * @member {Array.<boolean>} packedBool
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedBool = $util.emptyArray;

            /**
             * TestAllTypesProto2 packedNestedEnum.
             * @member {Array.<protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum>} packedNestedEnum
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.packedNestedEnum = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedInt32.
             * @member {Array.<number>} unpackedInt32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedInt32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedInt64.
             * @member {Array.<number|Long>} unpackedInt64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedInt64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedUint32.
             * @member {Array.<number>} unpackedUint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedUint32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedUint64.
             * @member {Array.<number|Long>} unpackedUint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedUint64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedSint32.
             * @member {Array.<number>} unpackedSint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedSint32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedSint64.
             * @member {Array.<number|Long>} unpackedSint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedSint64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedFixed32.
             * @member {Array.<number>} unpackedFixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedFixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedFixed64.
             * @member {Array.<number|Long>} unpackedFixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedFixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedSfixed32.
             * @member {Array.<number>} unpackedSfixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedSfixed32 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedSfixed64.
             * @member {Array.<number|Long>} unpackedSfixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedSfixed64 = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedFloat.
             * @member {Array.<number>} unpackedFloat
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedFloat = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedDouble.
             * @member {Array.<number>} unpackedDouble
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedDouble = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedBool.
             * @member {Array.<boolean>} unpackedBool
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedBool = $util.emptyArray;

            /**
             * TestAllTypesProto2 unpackedNestedEnum.
             * @member {Array.<protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum>} unpackedNestedEnum
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.unpackedNestedEnum = $util.emptyArray;

            /**
             * TestAllTypesProto2 mapInt32Int32.
             * @member {Object.<string,number>} mapInt32Int32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapInt32Int32 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapInt64Int64.
             * @member {Object.<string,number|Long>} mapInt64Int64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapInt64Int64 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapUint32Uint32.
             * @member {Object.<string,number>} mapUint32Uint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapUint32Uint32 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapUint64Uint64.
             * @member {Object.<string,number|Long>} mapUint64Uint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapUint64Uint64 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapSint32Sint32.
             * @member {Object.<string,number>} mapSint32Sint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapSint32Sint32 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapSint64Sint64.
             * @member {Object.<string,number|Long>} mapSint64Sint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapSint64Sint64 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapFixed32Fixed32.
             * @member {Object.<string,number>} mapFixed32Fixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapFixed32Fixed32 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapFixed64Fixed64.
             * @member {Object.<string,number|Long>} mapFixed64Fixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapFixed64Fixed64 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapSfixed32Sfixed32.
             * @member {Object.<string,number>} mapSfixed32Sfixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapSfixed32Sfixed32 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapSfixed64Sfixed64.
             * @member {Object.<string,number|Long>} mapSfixed64Sfixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapSfixed64Sfixed64 = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapInt32Float.
             * @member {Object.<string,number>} mapInt32Float
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapInt32Float = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapInt32Double.
             * @member {Object.<string,number>} mapInt32Double
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapInt32Double = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapBoolBool.
             * @member {Object.<string,boolean>} mapBoolBool
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapBoolBool = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapStringString.
             * @member {Object.<string,string>} mapStringString
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapStringString = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapStringBytes.
             * @member {Object.<string,Uint8Array>} mapStringBytes
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapStringBytes = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapStringNestedMessage.
             * @member {Object.<string,protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage>} mapStringNestedMessage
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapStringNestedMessage = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapStringForeignMessage.
             * @member {Object.<string,protobuf_test_messages.proto2.IForeignMessageProto2>} mapStringForeignMessage
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapStringForeignMessage = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapStringNestedEnum.
             * @member {Object.<string,protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum>} mapStringNestedEnum
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapStringNestedEnum = $util.emptyObject;

            /**
             * TestAllTypesProto2 mapStringForeignEnum.
             * @member {Object.<string,protobuf_test_messages.proto2.ForeignEnumProto2>} mapStringForeignEnum
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.mapStringForeignEnum = $util.emptyObject;

            /**
             * TestAllTypesProto2 oneofUint32.
             * @member {number|null|undefined} oneofUint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.oneofUint32 = null;

            /**
             * TestAllTypesProto2 oneofNestedMessage.
             * @member {protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage|null|undefined} oneofNestedMessage
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.oneofNestedMessage = null;

            /**
             * TestAllTypesProto2 oneofString.
             * @member {string|null|undefined} oneofString
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.oneofString = null;

            /**
             * TestAllTypesProto2 oneofBytes.
             * @member {Uint8Array|null|undefined} oneofBytes
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.oneofBytes = null;

            /**
             * TestAllTypesProto2 oneofBool.
             * @member {boolean|null|undefined} oneofBool
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.oneofBool = null;

            /**
             * TestAllTypesProto2 oneofUint64.
             * @member {number|Long|null|undefined} oneofUint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.oneofUint64 = null;

            /**
             * TestAllTypesProto2 oneofFloat.
             * @member {number|null|undefined} oneofFloat
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.oneofFloat = null;

            /**
             * TestAllTypesProto2 oneofDouble.
             * @member {number|null|undefined} oneofDouble
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.oneofDouble = null;

            /**
             * TestAllTypesProto2 oneofEnum.
             * @member {protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum|null|undefined} oneofEnum
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.oneofEnum = null;

            /**
             * TestAllTypesProto2 data.
             * @member {protobuf_test_messages.proto2.TestAllTypesProto2.IData|null|undefined} data
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.data = null;

            /**
             * TestAllTypesProto2 defaultInt32.
             * @member {number} defaultInt32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultInt32 = -123456789;

            /**
             * TestAllTypesProto2 defaultInt64.
             * @member {number|Long} defaultInt64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultInt64 = $util.Long ? $util.Long.fromBits(1890295808,-2124220317,false) : -9123456789123457000;

            /**
             * TestAllTypesProto2 defaultUint32.
             * @member {number} defaultUint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultUint32 = 2123456789;

            /**
             * TestAllTypesProto2 defaultUint64.
             * @member {number|Long} defaultUint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultUint64 = $util.Long ? $util.Long.fromBits(918052864,-1937916336,true) : 10123456789123457000;

            /**
             * TestAllTypesProto2 defaultSint32.
             * @member {number} defaultSint32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultSint32 = -123456789;

            /**
             * TestAllTypesProto2 defaultSint64.
             * @member {number|Long} defaultSint64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultSint64 = $util.Long ? $util.Long.fromBits(1890295808,-2124220317,false) : -9123456789123457000;

            /**
             * TestAllTypesProto2 defaultFixed32.
             * @member {number} defaultFixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultFixed32 = 2123456789;

            /**
             * TestAllTypesProto2 defaultFixed64.
             * @member {number|Long} defaultFixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultFixed64 = $util.Long ? $util.Long.fromBits(-1,2147483647,false) : 9223372036854776000;

            /**
             * TestAllTypesProto2 defaultSfixed32.
             * @member {number} defaultSfixed32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultSfixed32 = -123456789;

            /**
             * TestAllTypesProto2 defaultSfixed64.
             * @member {number|Long} defaultSfixed64
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultSfixed64 = $util.Long ? $util.Long.fromBits(1890295808,-2124220317,false) : -9123456789123457000;

            /**
             * TestAllTypesProto2 defaultFloat.
             * @member {number} defaultFloat
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultFloat = 9000000000;

            /**
             * TestAllTypesProto2 defaultDouble.
             * @member {number} defaultDouble
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultDouble = 7e+22;

            /**
             * TestAllTypesProto2 defaultBool.
             * @member {boolean} defaultBool
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultBool = true;

            /**
             * TestAllTypesProto2 defaultString.
             * @member {string} defaultString
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultString = "Rosebud";

            /**
             * TestAllTypesProto2 defaultBytes.
             * @member {Uint8Array} defaultBytes
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.defaultBytes = $util.newBuffer([106,111,115,104,117,97]);

            /**
             * TestAllTypesProto2 fieldname1.
             * @member {number} fieldname1
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.fieldname1 = 0;

            /**
             * TestAllTypesProto2 fieldName2.
             * @member {number} fieldName2
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.fieldName2 = 0;

            /**
             * TestAllTypesProto2 _fieldName3.
             * @member {number} _fieldName3
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype._fieldName3 = 0;

            /**
             * TestAllTypesProto2 field_Name4_.
             * @member {number} field_Name4_
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.field_Name4_ = 0;

            /**
             * TestAllTypesProto2 field0name5.
             * @member {number} field0name5
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.field0name5 = 0;

            /**
             * TestAllTypesProto2 field_0Name6.
             * @member {number} field_0Name6
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.field_0Name6 = 0;

            /**
             * TestAllTypesProto2 fieldName7.
             * @member {number} fieldName7
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.fieldName7 = 0;

            /**
             * TestAllTypesProto2 FieldName8.
             * @member {number} FieldName8
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.FieldName8 = 0;

            /**
             * TestAllTypesProto2 field_Name9.
             * @member {number} field_Name9
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.field_Name9 = 0;

            /**
             * TestAllTypesProto2 Field_Name10.
             * @member {number} Field_Name10
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.Field_Name10 = 0;

            /**
             * TestAllTypesProto2 FIELD_NAME11.
             * @member {number} FIELD_NAME11
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.FIELD_NAME11 = 0;

            /**
             * TestAllTypesProto2 FIELDName12.
             * @member {number} FIELDName12
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.FIELDName12 = 0;

            /**
             * TestAllTypesProto2 _FieldName13.
             * @member {number} _FieldName13
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype._FieldName13 = 0;

            /**
             * TestAllTypesProto2 __FieldName14.
             * @member {number} __FieldName14
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.__FieldName14 = 0;

            /**
             * TestAllTypesProto2 field_Name15.
             * @member {number} field_Name15
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.field_Name15 = 0;

            /**
             * TestAllTypesProto2 field__Name16.
             * @member {number} field__Name16
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.field__Name16 = 0;

            /**
             * TestAllTypesProto2 fieldName17__.
             * @member {number} fieldName17__
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.fieldName17__ = 0;

            /**
             * TestAllTypesProto2 FieldName18__.
             * @member {number} FieldName18__
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype.FieldName18__ = 0;

            /**
             * TestAllTypesProto2 .protobuf_test_messages.proto2.extensionInt32.
             * @member {number} .protobuf_test_messages.proto2.extensionInt32
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            TestAllTypesProto2.prototype[".protobuf_test_messages.proto2.extensionInt32"] = 0;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * TestAllTypesProto2 oneofField.
             * @member {"oneofUint32"|"oneofNestedMessage"|"oneofString"|"oneofBytes"|"oneofBool"|"oneofUint64"|"oneofFloat"|"oneofDouble"|"oneofEnum"|undefined} oneofField
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             */
            Object.defineProperty(TestAllTypesProto2.prototype, "oneofField", {
                get: $util.oneOfGetter($oneOfFields = ["oneofUint32", "oneofNestedMessage", "oneofString", "oneofBytes", "oneofBool", "oneofUint64", "oneofFloat", "oneofDouble", "oneofEnum"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TestAllTypesProto2 instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @static
             * @param {protobuf_test_messages.proto2.ITestAllTypesProto2=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto2.TestAllTypesProto2} TestAllTypesProto2 instance
             */
            TestAllTypesProto2.create = function create(properties) {
                return new TestAllTypesProto2(properties);
            };

            /**
             * Encodes the specified TestAllTypesProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @static
             * @param {protobuf_test_messages.proto2.ITestAllTypesProto2} message TestAllTypesProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestAllTypesProto2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.optionalInt32 != null && Object.hasOwnProperty.call(message, "optionalInt32"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.optionalInt32);
                if (message.optionalInt64 != null && Object.hasOwnProperty.call(message, "optionalInt64"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.optionalInt64);
                if (message.optionalUint32 != null && Object.hasOwnProperty.call(message, "optionalUint32"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.optionalUint32);
                if (message.optionalUint64 != null && Object.hasOwnProperty.call(message, "optionalUint64"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.optionalUint64);
                if (message.optionalSint32 != null && Object.hasOwnProperty.call(message, "optionalSint32"))
                    writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.optionalSint32);
                if (message.optionalSint64 != null && Object.hasOwnProperty.call(message, "optionalSint64"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint64(message.optionalSint64);
                if (message.optionalFixed32 != null && Object.hasOwnProperty.call(message, "optionalFixed32"))
                    writer.uint32(/* id 7, wireType 5 =*/61).fixed32(message.optionalFixed32);
                if (message.optionalFixed64 != null && Object.hasOwnProperty.call(message, "optionalFixed64"))
                    writer.uint32(/* id 8, wireType 1 =*/65).fixed64(message.optionalFixed64);
                if (message.optionalSfixed32 != null && Object.hasOwnProperty.call(message, "optionalSfixed32"))
                    writer.uint32(/* id 9, wireType 5 =*/77).sfixed32(message.optionalSfixed32);
                if (message.optionalSfixed64 != null && Object.hasOwnProperty.call(message, "optionalSfixed64"))
                    writer.uint32(/* id 10, wireType 1 =*/81).sfixed64(message.optionalSfixed64);
                if (message.optionalFloat != null && Object.hasOwnProperty.call(message, "optionalFloat"))
                    writer.uint32(/* id 11, wireType 5 =*/93).float(message.optionalFloat);
                if (message.optionalDouble != null && Object.hasOwnProperty.call(message, "optionalDouble"))
                    writer.uint32(/* id 12, wireType 1 =*/97).double(message.optionalDouble);
                if (message.optionalBool != null && Object.hasOwnProperty.call(message, "optionalBool"))
                    writer.uint32(/* id 13, wireType 0 =*/104).bool(message.optionalBool);
                if (message.optionalString != null && Object.hasOwnProperty.call(message, "optionalString"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.optionalString);
                if (message.optionalBytes != null && Object.hasOwnProperty.call(message, "optionalBytes"))
                    writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.optionalBytes);
                if (message.optionalNestedMessage != null && Object.hasOwnProperty.call(message, "optionalNestedMessage"))
                    $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.encode(message.optionalNestedMessage, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                if (message.optionalForeignMessage != null && Object.hasOwnProperty.call(message, "optionalForeignMessage"))
                    $root.protobuf_test_messages.proto2.ForeignMessageProto2.encode(message.optionalForeignMessage, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                if (message.optionalNestedEnum != null && Object.hasOwnProperty.call(message, "optionalNestedEnum"))
                    writer.uint32(/* id 21, wireType 0 =*/168).int32(message.optionalNestedEnum);
                if (message.optionalForeignEnum != null && Object.hasOwnProperty.call(message, "optionalForeignEnum"))
                    writer.uint32(/* id 22, wireType 0 =*/176).int32(message.optionalForeignEnum);
                if (message.optionalStringPiece != null && Object.hasOwnProperty.call(message, "optionalStringPiece"))
                    writer.uint32(/* id 24, wireType 2 =*/194).string(message.optionalStringPiece);
                if (message.optionalCord != null && Object.hasOwnProperty.call(message, "optionalCord"))
                    writer.uint32(/* id 25, wireType 2 =*/202).string(message.optionalCord);
                if (message.recursiveMessage != null && Object.hasOwnProperty.call(message, "recursiveMessage"))
                    $root.protobuf_test_messages.proto2.TestAllTypesProto2.encode(message.recursiveMessage, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
                if (message.repeatedInt32 != null && message.repeatedInt32.length)
                    for (let i = 0; i < message.repeatedInt32.length; ++i)
                        writer.uint32(/* id 31, wireType 0 =*/248).int32(message.repeatedInt32[i]);
                if (message.repeatedInt64 != null && message.repeatedInt64.length)
                    for (let i = 0; i < message.repeatedInt64.length; ++i)
                        writer.uint32(/* id 32, wireType 0 =*/256).int64(message.repeatedInt64[i]);
                if (message.repeatedUint32 != null && message.repeatedUint32.length)
                    for (let i = 0; i < message.repeatedUint32.length; ++i)
                        writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.repeatedUint32[i]);
                if (message.repeatedUint64 != null && message.repeatedUint64.length)
                    for (let i = 0; i < message.repeatedUint64.length; ++i)
                        writer.uint32(/* id 34, wireType 0 =*/272).uint64(message.repeatedUint64[i]);
                if (message.repeatedSint32 != null && message.repeatedSint32.length)
                    for (let i = 0; i < message.repeatedSint32.length; ++i)
                        writer.uint32(/* id 35, wireType 0 =*/280).sint32(message.repeatedSint32[i]);
                if (message.repeatedSint64 != null && message.repeatedSint64.length)
                    for (let i = 0; i < message.repeatedSint64.length; ++i)
                        writer.uint32(/* id 36, wireType 0 =*/288).sint64(message.repeatedSint64[i]);
                if (message.repeatedFixed32 != null && message.repeatedFixed32.length)
                    for (let i = 0; i < message.repeatedFixed32.length; ++i)
                        writer.uint32(/* id 37, wireType 5 =*/301).fixed32(message.repeatedFixed32[i]);
                if (message.repeatedFixed64 != null && message.repeatedFixed64.length)
                    for (let i = 0; i < message.repeatedFixed64.length; ++i)
                        writer.uint32(/* id 38, wireType 1 =*/305).fixed64(message.repeatedFixed64[i]);
                if (message.repeatedSfixed32 != null && message.repeatedSfixed32.length)
                    for (let i = 0; i < message.repeatedSfixed32.length; ++i)
                        writer.uint32(/* id 39, wireType 5 =*/317).sfixed32(message.repeatedSfixed32[i]);
                if (message.repeatedSfixed64 != null && message.repeatedSfixed64.length)
                    for (let i = 0; i < message.repeatedSfixed64.length; ++i)
                        writer.uint32(/* id 40, wireType 1 =*/321).sfixed64(message.repeatedSfixed64[i]);
                if (message.repeatedFloat != null && message.repeatedFloat.length)
                    for (let i = 0; i < message.repeatedFloat.length; ++i)
                        writer.uint32(/* id 41, wireType 5 =*/333).float(message.repeatedFloat[i]);
                if (message.repeatedDouble != null && message.repeatedDouble.length)
                    for (let i = 0; i < message.repeatedDouble.length; ++i)
                        writer.uint32(/* id 42, wireType 1 =*/337).double(message.repeatedDouble[i]);
                if (message.repeatedBool != null && message.repeatedBool.length)
                    for (let i = 0; i < message.repeatedBool.length; ++i)
                        writer.uint32(/* id 43, wireType 0 =*/344).bool(message.repeatedBool[i]);
                if (message.repeatedString != null && message.repeatedString.length)
                    for (let i = 0; i < message.repeatedString.length; ++i)
                        writer.uint32(/* id 44, wireType 2 =*/354).string(message.repeatedString[i]);
                if (message.repeatedBytes != null && message.repeatedBytes.length)
                    for (let i = 0; i < message.repeatedBytes.length; ++i)
                        writer.uint32(/* id 45, wireType 2 =*/362).bytes(message.repeatedBytes[i]);
                if (message.repeatedNestedMessage != null && message.repeatedNestedMessage.length)
                    for (let i = 0; i < message.repeatedNestedMessage.length; ++i)
                        $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.encode(message.repeatedNestedMessage[i], writer.uint32(/* id 48, wireType 2 =*/386).fork()).ldelim();
                if (message.repeatedForeignMessage != null && message.repeatedForeignMessage.length)
                    for (let i = 0; i < message.repeatedForeignMessage.length; ++i)
                        $root.protobuf_test_messages.proto2.ForeignMessageProto2.encode(message.repeatedForeignMessage[i], writer.uint32(/* id 49, wireType 2 =*/394).fork()).ldelim();
                if (message.repeatedNestedEnum != null && message.repeatedNestedEnum.length)
                    for (let i = 0; i < message.repeatedNestedEnum.length; ++i)
                        writer.uint32(/* id 51, wireType 0 =*/408).int32(message.repeatedNestedEnum[i]);
                if (message.repeatedForeignEnum != null && message.repeatedForeignEnum.length)
                    for (let i = 0; i < message.repeatedForeignEnum.length; ++i)
                        writer.uint32(/* id 52, wireType 0 =*/416).int32(message.repeatedForeignEnum[i]);
                if (message.repeatedStringPiece != null && message.repeatedStringPiece.length)
                    for (let i = 0; i < message.repeatedStringPiece.length; ++i)
                        writer.uint32(/* id 54, wireType 2 =*/434).string(message.repeatedStringPiece[i]);
                if (message.repeatedCord != null && message.repeatedCord.length)
                    for (let i = 0; i < message.repeatedCord.length; ++i)
                        writer.uint32(/* id 55, wireType 2 =*/442).string(message.repeatedCord[i]);
                if (message.mapInt32Int32 != null && Object.hasOwnProperty.call(message, "mapInt32Int32"))
                    for (let keys = Object.keys(message.mapInt32Int32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 56, wireType 2 =*/450).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapInt32Int32[keys[i]]).ldelim();
                if (message.mapInt64Int64 != null && Object.hasOwnProperty.call(message, "mapInt64Int64"))
                    for (let keys = Object.keys(message.mapInt64Int64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 57, wireType 2 =*/458).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.mapInt64Int64[keys[i]]).ldelim();
                if (message.mapUint32Uint32 != null && Object.hasOwnProperty.call(message, "mapUint32Uint32"))
                    for (let keys = Object.keys(message.mapUint32Uint32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 58, wireType 2 =*/466).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.mapUint32Uint32[keys[i]]).ldelim();
                if (message.mapUint64Uint64 != null && Object.hasOwnProperty.call(message, "mapUint64Uint64"))
                    for (let keys = Object.keys(message.mapUint64Uint64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 59, wireType 2 =*/474).fork().uint32(/* id 1, wireType 0 =*/8).uint64(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.mapUint64Uint64[keys[i]]).ldelim();
                if (message.mapSint32Sint32 != null && Object.hasOwnProperty.call(message, "mapSint32Sint32"))
                    for (let keys = Object.keys(message.mapSint32Sint32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 60, wireType 2 =*/482).fork().uint32(/* id 1, wireType 0 =*/8).sint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).sint32(message.mapSint32Sint32[keys[i]]).ldelim();
                if (message.mapSint64Sint64 != null && Object.hasOwnProperty.call(message, "mapSint64Sint64"))
                    for (let keys = Object.keys(message.mapSint64Sint64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 61, wireType 2 =*/490).fork().uint32(/* id 1, wireType 0 =*/8).sint64(keys[i]).uint32(/* id 2, wireType 0 =*/16).sint64(message.mapSint64Sint64[keys[i]]).ldelim();
                if (message.mapFixed32Fixed32 != null && Object.hasOwnProperty.call(message, "mapFixed32Fixed32"))
                    for (let keys = Object.keys(message.mapFixed32Fixed32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 62, wireType 2 =*/498).fork().uint32(/* id 1, wireType 5 =*/13).fixed32(keys[i]).uint32(/* id 2, wireType 5 =*/21).fixed32(message.mapFixed32Fixed32[keys[i]]).ldelim();
                if (message.mapFixed64Fixed64 != null && Object.hasOwnProperty.call(message, "mapFixed64Fixed64"))
                    for (let keys = Object.keys(message.mapFixed64Fixed64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 63, wireType 2 =*/506).fork().uint32(/* id 1, wireType 1 =*/9).fixed64(keys[i]).uint32(/* id 2, wireType 1 =*/17).fixed64(message.mapFixed64Fixed64[keys[i]]).ldelim();
                if (message.mapSfixed32Sfixed32 != null && Object.hasOwnProperty.call(message, "mapSfixed32Sfixed32"))
                    for (let keys = Object.keys(message.mapSfixed32Sfixed32), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 64, wireType 2 =*/514).fork().uint32(/* id 1, wireType 5 =*/13).sfixed32(keys[i]).uint32(/* id 2, wireType 5 =*/21).sfixed32(message.mapSfixed32Sfixed32[keys[i]]).ldelim();
                if (message.mapSfixed64Sfixed64 != null && Object.hasOwnProperty.call(message, "mapSfixed64Sfixed64"))
                    for (let keys = Object.keys(message.mapSfixed64Sfixed64), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 65, wireType 2 =*/522).fork().uint32(/* id 1, wireType 1 =*/9).sfixed64(keys[i]).uint32(/* id 2, wireType 1 =*/17).sfixed64(message.mapSfixed64Sfixed64[keys[i]]).ldelim();
                if (message.mapInt32Float != null && Object.hasOwnProperty.call(message, "mapInt32Float"))
                    for (let keys = Object.keys(message.mapInt32Float), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 66, wireType 2 =*/530).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 5 =*/21).float(message.mapInt32Float[keys[i]]).ldelim();
                if (message.mapInt32Double != null && Object.hasOwnProperty.call(message, "mapInt32Double"))
                    for (let keys = Object.keys(message.mapInt32Double), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 67, wireType 2 =*/538).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 1 =*/17).double(message.mapInt32Double[keys[i]]).ldelim();
                if (message.mapBoolBool != null && Object.hasOwnProperty.call(message, "mapBoolBool"))
                    for (let keys = Object.keys(message.mapBoolBool), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 68, wireType 2 =*/546).fork().uint32(/* id 1, wireType 0 =*/8).bool(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.mapBoolBool[keys[i]]).ldelim();
                if (message.mapStringString != null && Object.hasOwnProperty.call(message, "mapStringString"))
                    for (let keys = Object.keys(message.mapStringString), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 69, wireType 2 =*/554).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapStringString[keys[i]]).ldelim();
                if (message.mapStringBytes != null && Object.hasOwnProperty.call(message, "mapStringBytes"))
                    for (let keys = Object.keys(message.mapStringBytes), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 70, wireType 2 =*/562).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).bytes(message.mapStringBytes[keys[i]]).ldelim();
                if (message.mapStringNestedMessage != null && Object.hasOwnProperty.call(message, "mapStringNestedMessage"))
                    for (let keys = Object.keys(message.mapStringNestedMessage), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 71, wireType 2 =*/570).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.encode(message.mapStringNestedMessage[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.mapStringForeignMessage != null && Object.hasOwnProperty.call(message, "mapStringForeignMessage"))
                    for (let keys = Object.keys(message.mapStringForeignMessage), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 72, wireType 2 =*/578).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.protobuf_test_messages.proto2.ForeignMessageProto2.encode(message.mapStringForeignMessage[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                if (message.mapStringNestedEnum != null && Object.hasOwnProperty.call(message, "mapStringNestedEnum"))
                    for (let keys = Object.keys(message.mapStringNestedEnum), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 73, wireType 2 =*/586).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapStringNestedEnum[keys[i]]).ldelim();
                if (message.mapStringForeignEnum != null && Object.hasOwnProperty.call(message, "mapStringForeignEnum"))
                    for (let keys = Object.keys(message.mapStringForeignEnum), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 74, wireType 2 =*/594).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapStringForeignEnum[keys[i]]).ldelim();
                if (message.packedInt32 != null && message.packedInt32.length) {
                    writer.uint32(/* id 75, wireType 2 =*/602).fork();
                    for (let i = 0; i < message.packedInt32.length; ++i)
                        writer.int32(message.packedInt32[i]);
                    writer.ldelim();
                }
                if (message.packedInt64 != null && message.packedInt64.length) {
                    writer.uint32(/* id 76, wireType 2 =*/610).fork();
                    for (let i = 0; i < message.packedInt64.length; ++i)
                        writer.int64(message.packedInt64[i]);
                    writer.ldelim();
                }
                if (message.packedUint32 != null && message.packedUint32.length) {
                    writer.uint32(/* id 77, wireType 2 =*/618).fork();
                    for (let i = 0; i < message.packedUint32.length; ++i)
                        writer.uint32(message.packedUint32[i]);
                    writer.ldelim();
                }
                if (message.packedUint64 != null && message.packedUint64.length) {
                    writer.uint32(/* id 78, wireType 2 =*/626).fork();
                    for (let i = 0; i < message.packedUint64.length; ++i)
                        writer.uint64(message.packedUint64[i]);
                    writer.ldelim();
                }
                if (message.packedSint32 != null && message.packedSint32.length) {
                    writer.uint32(/* id 79, wireType 2 =*/634).fork();
                    for (let i = 0; i < message.packedSint32.length; ++i)
                        writer.sint32(message.packedSint32[i]);
                    writer.ldelim();
                }
                if (message.packedSint64 != null && message.packedSint64.length) {
                    writer.uint32(/* id 80, wireType 2 =*/642).fork();
                    for (let i = 0; i < message.packedSint64.length; ++i)
                        writer.sint64(message.packedSint64[i]);
                    writer.ldelim();
                }
                if (message.packedFixed32 != null && message.packedFixed32.length) {
                    writer.uint32(/* id 81, wireType 2 =*/650).fork();
                    for (let i = 0; i < message.packedFixed32.length; ++i)
                        writer.fixed32(message.packedFixed32[i]);
                    writer.ldelim();
                }
                if (message.packedFixed64 != null && message.packedFixed64.length) {
                    writer.uint32(/* id 82, wireType 2 =*/658).fork();
                    for (let i = 0; i < message.packedFixed64.length; ++i)
                        writer.fixed64(message.packedFixed64[i]);
                    writer.ldelim();
                }
                if (message.packedSfixed32 != null && message.packedSfixed32.length) {
                    writer.uint32(/* id 83, wireType 2 =*/666).fork();
                    for (let i = 0; i < message.packedSfixed32.length; ++i)
                        writer.sfixed32(message.packedSfixed32[i]);
                    writer.ldelim();
                }
                if (message.packedSfixed64 != null && message.packedSfixed64.length) {
                    writer.uint32(/* id 84, wireType 2 =*/674).fork();
                    for (let i = 0; i < message.packedSfixed64.length; ++i)
                        writer.sfixed64(message.packedSfixed64[i]);
                    writer.ldelim();
                }
                if (message.packedFloat != null && message.packedFloat.length) {
                    writer.uint32(/* id 85, wireType 2 =*/682).fork();
                    for (let i = 0; i < message.packedFloat.length; ++i)
                        writer.float(message.packedFloat[i]);
                    writer.ldelim();
                }
                if (message.packedDouble != null && message.packedDouble.length) {
                    writer.uint32(/* id 86, wireType 2 =*/690).fork();
                    for (let i = 0; i < message.packedDouble.length; ++i)
                        writer.double(message.packedDouble[i]);
                    writer.ldelim();
                }
                if (message.packedBool != null && message.packedBool.length) {
                    writer.uint32(/* id 87, wireType 2 =*/698).fork();
                    for (let i = 0; i < message.packedBool.length; ++i)
                        writer.bool(message.packedBool[i]);
                    writer.ldelim();
                }
                if (message.packedNestedEnum != null && message.packedNestedEnum.length) {
                    writer.uint32(/* id 88, wireType 2 =*/706).fork();
                    for (let i = 0; i < message.packedNestedEnum.length; ++i)
                        writer.int32(message.packedNestedEnum[i]);
                    writer.ldelim();
                }
                if (message.unpackedInt32 != null && message.unpackedInt32.length)
                    for (let i = 0; i < message.unpackedInt32.length; ++i)
                        writer.uint32(/* id 89, wireType 0 =*/712).int32(message.unpackedInt32[i]);
                if (message.unpackedInt64 != null && message.unpackedInt64.length)
                    for (let i = 0; i < message.unpackedInt64.length; ++i)
                        writer.uint32(/* id 90, wireType 0 =*/720).int64(message.unpackedInt64[i]);
                if (message.unpackedUint32 != null && message.unpackedUint32.length)
                    for (let i = 0; i < message.unpackedUint32.length; ++i)
                        writer.uint32(/* id 91, wireType 0 =*/728).uint32(message.unpackedUint32[i]);
                if (message.unpackedUint64 != null && message.unpackedUint64.length)
                    for (let i = 0; i < message.unpackedUint64.length; ++i)
                        writer.uint32(/* id 92, wireType 0 =*/736).uint64(message.unpackedUint64[i]);
                if (message.unpackedSint32 != null && message.unpackedSint32.length)
                    for (let i = 0; i < message.unpackedSint32.length; ++i)
                        writer.uint32(/* id 93, wireType 0 =*/744).sint32(message.unpackedSint32[i]);
                if (message.unpackedSint64 != null && message.unpackedSint64.length)
                    for (let i = 0; i < message.unpackedSint64.length; ++i)
                        writer.uint32(/* id 94, wireType 0 =*/752).sint64(message.unpackedSint64[i]);
                if (message.unpackedFixed32 != null && message.unpackedFixed32.length)
                    for (let i = 0; i < message.unpackedFixed32.length; ++i)
                        writer.uint32(/* id 95, wireType 5 =*/765).fixed32(message.unpackedFixed32[i]);
                if (message.unpackedFixed64 != null && message.unpackedFixed64.length)
                    for (let i = 0; i < message.unpackedFixed64.length; ++i)
                        writer.uint32(/* id 96, wireType 1 =*/769).fixed64(message.unpackedFixed64[i]);
                if (message.unpackedSfixed32 != null && message.unpackedSfixed32.length)
                    for (let i = 0; i < message.unpackedSfixed32.length; ++i)
                        writer.uint32(/* id 97, wireType 5 =*/781).sfixed32(message.unpackedSfixed32[i]);
                if (message.unpackedSfixed64 != null && message.unpackedSfixed64.length)
                    for (let i = 0; i < message.unpackedSfixed64.length; ++i)
                        writer.uint32(/* id 98, wireType 1 =*/785).sfixed64(message.unpackedSfixed64[i]);
                if (message.unpackedFloat != null && message.unpackedFloat.length)
                    for (let i = 0; i < message.unpackedFloat.length; ++i)
                        writer.uint32(/* id 99, wireType 5 =*/797).float(message.unpackedFloat[i]);
                if (message.unpackedDouble != null && message.unpackedDouble.length)
                    for (let i = 0; i < message.unpackedDouble.length; ++i)
                        writer.uint32(/* id 100, wireType 1 =*/801).double(message.unpackedDouble[i]);
                if (message.unpackedBool != null && message.unpackedBool.length)
                    for (let i = 0; i < message.unpackedBool.length; ++i)
                        writer.uint32(/* id 101, wireType 0 =*/808).bool(message.unpackedBool[i]);
                if (message.unpackedNestedEnum != null && message.unpackedNestedEnum.length)
                    for (let i = 0; i < message.unpackedNestedEnum.length; ++i)
                        writer.uint32(/* id 102, wireType 0 =*/816).int32(message.unpackedNestedEnum[i]);
                if (message.oneofUint32 != null && Object.hasOwnProperty.call(message, "oneofUint32"))
                    writer.uint32(/* id 111, wireType 0 =*/888).uint32(message.oneofUint32);
                if (message.oneofNestedMessage != null && Object.hasOwnProperty.call(message, "oneofNestedMessage"))
                    $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.encode(message.oneofNestedMessage, writer.uint32(/* id 112, wireType 2 =*/898).fork()).ldelim();
                if (message.oneofString != null && Object.hasOwnProperty.call(message, "oneofString"))
                    writer.uint32(/* id 113, wireType 2 =*/906).string(message.oneofString);
                if (message.oneofBytes != null && Object.hasOwnProperty.call(message, "oneofBytes"))
                    writer.uint32(/* id 114, wireType 2 =*/914).bytes(message.oneofBytes);
                if (message.oneofBool != null && Object.hasOwnProperty.call(message, "oneofBool"))
                    writer.uint32(/* id 115, wireType 0 =*/920).bool(message.oneofBool);
                if (message.oneofUint64 != null && Object.hasOwnProperty.call(message, "oneofUint64"))
                    writer.uint32(/* id 116, wireType 0 =*/928).uint64(message.oneofUint64);
                if (message.oneofFloat != null && Object.hasOwnProperty.call(message, "oneofFloat"))
                    writer.uint32(/* id 117, wireType 5 =*/941).float(message.oneofFloat);
                if (message.oneofDouble != null && Object.hasOwnProperty.call(message, "oneofDouble"))
                    writer.uint32(/* id 118, wireType 1 =*/945).double(message.oneofDouble);
                if (message.oneofEnum != null && Object.hasOwnProperty.call(message, "oneofEnum"))
                    writer.uint32(/* id 119, wireType 0 =*/952).int32(message.oneofEnum);
                if (message[".protobuf_test_messages.proto2.extensionInt32"] != null && Object.hasOwnProperty.call(message, ".protobuf_test_messages.proto2.extensionInt32"))
                    writer.uint32(/* id 120, wireType 0 =*/960).int32(message[".protobuf_test_messages.proto2.extensionInt32"]);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    $root.protobuf_test_messages.proto2.TestAllTypesProto2.Data.encode(message.data, writer.uint32(/* id 201, wireType 3 =*/1611)).uint32(/* id 201, wireType 4 =*/1612);
                if (message.defaultInt32 != null && Object.hasOwnProperty.call(message, "defaultInt32"))
                    writer.uint32(/* id 241, wireType 0 =*/1928).int32(message.defaultInt32);
                if (message.defaultInt64 != null && Object.hasOwnProperty.call(message, "defaultInt64"))
                    writer.uint32(/* id 242, wireType 0 =*/1936).int64(message.defaultInt64);
                if (message.defaultUint32 != null && Object.hasOwnProperty.call(message, "defaultUint32"))
                    writer.uint32(/* id 243, wireType 0 =*/1944).uint32(message.defaultUint32);
                if (message.defaultUint64 != null && Object.hasOwnProperty.call(message, "defaultUint64"))
                    writer.uint32(/* id 244, wireType 0 =*/1952).uint64(message.defaultUint64);
                if (message.defaultSint32 != null && Object.hasOwnProperty.call(message, "defaultSint32"))
                    writer.uint32(/* id 245, wireType 0 =*/1960).sint32(message.defaultSint32);
                if (message.defaultSint64 != null && Object.hasOwnProperty.call(message, "defaultSint64"))
                    writer.uint32(/* id 246, wireType 0 =*/1968).sint64(message.defaultSint64);
                if (message.defaultFixed32 != null && Object.hasOwnProperty.call(message, "defaultFixed32"))
                    writer.uint32(/* id 247, wireType 5 =*/1981).fixed32(message.defaultFixed32);
                if (message.defaultFixed64 != null && Object.hasOwnProperty.call(message, "defaultFixed64"))
                    writer.uint32(/* id 248, wireType 1 =*/1985).fixed64(message.defaultFixed64);
                if (message.defaultSfixed32 != null && Object.hasOwnProperty.call(message, "defaultSfixed32"))
                    writer.uint32(/* id 249, wireType 5 =*/1997).sfixed32(message.defaultSfixed32);
                if (message.defaultSfixed64 != null && Object.hasOwnProperty.call(message, "defaultSfixed64"))
                    writer.uint32(/* id 250, wireType 1 =*/2001).sfixed64(message.defaultSfixed64);
                if (message.defaultFloat != null && Object.hasOwnProperty.call(message, "defaultFloat"))
                    writer.uint32(/* id 251, wireType 5 =*/2013).float(message.defaultFloat);
                if (message.defaultDouble != null && Object.hasOwnProperty.call(message, "defaultDouble"))
                    writer.uint32(/* id 252, wireType 1 =*/2017).double(message.defaultDouble);
                if (message.defaultBool != null && Object.hasOwnProperty.call(message, "defaultBool"))
                    writer.uint32(/* id 253, wireType 0 =*/2024).bool(message.defaultBool);
                if (message.defaultString != null && Object.hasOwnProperty.call(message, "defaultString"))
                    writer.uint32(/* id 254, wireType 2 =*/2034).string(message.defaultString);
                if (message.defaultBytes != null && Object.hasOwnProperty.call(message, "defaultBytes"))
                    writer.uint32(/* id 255, wireType 2 =*/2042).bytes(message.defaultBytes);
                if (message.fieldname1 != null && Object.hasOwnProperty.call(message, "fieldname1"))
                    writer.uint32(/* id 401, wireType 0 =*/3208).int32(message.fieldname1);
                if (message.fieldName2 != null && Object.hasOwnProperty.call(message, "fieldName2"))
                    writer.uint32(/* id 402, wireType 0 =*/3216).int32(message.fieldName2);
                if (message._fieldName3 != null && Object.hasOwnProperty.call(message, "_fieldName3"))
                    writer.uint32(/* id 403, wireType 0 =*/3224).int32(message._fieldName3);
                if (message.field_Name4_ != null && Object.hasOwnProperty.call(message, "field_Name4_"))
                    writer.uint32(/* id 404, wireType 0 =*/3232).int32(message.field_Name4_);
                if (message.field0name5 != null && Object.hasOwnProperty.call(message, "field0name5"))
                    writer.uint32(/* id 405, wireType 0 =*/3240).int32(message.field0name5);
                if (message.field_0Name6 != null && Object.hasOwnProperty.call(message, "field_0Name6"))
                    writer.uint32(/* id 406, wireType 0 =*/3248).int32(message.field_0Name6);
                if (message.fieldName7 != null && Object.hasOwnProperty.call(message, "fieldName7"))
                    writer.uint32(/* id 407, wireType 0 =*/3256).int32(message.fieldName7);
                if (message.FieldName8 != null && Object.hasOwnProperty.call(message, "FieldName8"))
                    writer.uint32(/* id 408, wireType 0 =*/3264).int32(message.FieldName8);
                if (message.field_Name9 != null && Object.hasOwnProperty.call(message, "field_Name9"))
                    writer.uint32(/* id 409, wireType 0 =*/3272).int32(message.field_Name9);
                if (message.Field_Name10 != null && Object.hasOwnProperty.call(message, "Field_Name10"))
                    writer.uint32(/* id 410, wireType 0 =*/3280).int32(message.Field_Name10);
                if (message.FIELD_NAME11 != null && Object.hasOwnProperty.call(message, "FIELD_NAME11"))
                    writer.uint32(/* id 411, wireType 0 =*/3288).int32(message.FIELD_NAME11);
                if (message.FIELDName12 != null && Object.hasOwnProperty.call(message, "FIELDName12"))
                    writer.uint32(/* id 412, wireType 0 =*/3296).int32(message.FIELDName12);
                if (message._FieldName13 != null && Object.hasOwnProperty.call(message, "_FieldName13"))
                    writer.uint32(/* id 413, wireType 0 =*/3304).int32(message._FieldName13);
                if (message.__FieldName14 != null && Object.hasOwnProperty.call(message, "__FieldName14"))
                    writer.uint32(/* id 414, wireType 0 =*/3312).int32(message.__FieldName14);
                if (message.field_Name15 != null && Object.hasOwnProperty.call(message, "field_Name15"))
                    writer.uint32(/* id 415, wireType 0 =*/3320).int32(message.field_Name15);
                if (message.field__Name16 != null && Object.hasOwnProperty.call(message, "field__Name16"))
                    writer.uint32(/* id 416, wireType 0 =*/3328).int32(message.field__Name16);
                if (message.fieldName17__ != null && Object.hasOwnProperty.call(message, "fieldName17__"))
                    writer.uint32(/* id 417, wireType 0 =*/3336).int32(message.fieldName17__);
                if (message.FieldName18__ != null && Object.hasOwnProperty.call(message, "FieldName18__"))
                    writer.uint32(/* id 418, wireType 0 =*/3344).int32(message.FieldName18__);
                return writer;
            };

            /**
             * Encodes the specified TestAllTypesProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @static
             * @param {protobuf_test_messages.proto2.ITestAllTypesProto2} message TestAllTypesProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TestAllTypesProto2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TestAllTypesProto2 message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.TestAllTypesProto2} TestAllTypesProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestAllTypesProto2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.optionalInt32 = reader.int32();
                            break;
                        }
                    case 2: {
                            message.optionalInt64 = reader.int64();
                            break;
                        }
                    case 3: {
                            message.optionalUint32 = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.optionalUint64 = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.optionalSint32 = reader.sint32();
                            break;
                        }
                    case 6: {
                            message.optionalSint64 = reader.sint64();
                            break;
                        }
                    case 7: {
                            message.optionalFixed32 = reader.fixed32();
                            break;
                        }
                    case 8: {
                            message.optionalFixed64 = reader.fixed64();
                            break;
                        }
                    case 9: {
                            message.optionalSfixed32 = reader.sfixed32();
                            break;
                        }
                    case 10: {
                            message.optionalSfixed64 = reader.sfixed64();
                            break;
                        }
                    case 11: {
                            message.optionalFloat = reader.float();
                            break;
                        }
                    case 12: {
                            message.optionalDouble = reader.double();
                            break;
                        }
                    case 13: {
                            message.optionalBool = reader.bool();
                            break;
                        }
                    case 14: {
                            message.optionalString = reader.string();
                            break;
                        }
                    case 15: {
                            message.optionalBytes = reader.bytes();
                            break;
                        }
                    case 18: {
                            message.optionalNestedMessage = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.decode(reader, reader.uint32());
                            break;
                        }
                    case 19: {
                            message.optionalForeignMessage = $root.protobuf_test_messages.proto2.ForeignMessageProto2.decode(reader, reader.uint32());
                            break;
                        }
                    case 21: {
                            message.optionalNestedEnum = reader.int32();
                            break;
                        }
                    case 22: {
                            message.optionalForeignEnum = reader.int32();
                            break;
                        }
                    case 24: {
                            message.optionalStringPiece = reader.string();
                            break;
                        }
                    case 25: {
                            message.optionalCord = reader.string();
                            break;
                        }
                    case 27: {
                            message.recursiveMessage = $root.protobuf_test_messages.proto2.TestAllTypesProto2.decode(reader, reader.uint32());
                            break;
                        }
                    case 31: {
                            if (!(message.repeatedInt32 && message.repeatedInt32.length))
                                message.repeatedInt32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedInt32.push(reader.int32());
                            } else
                                message.repeatedInt32.push(reader.int32());
                            break;
                        }
                    case 32: {
                            if (!(message.repeatedInt64 && message.repeatedInt64.length))
                                message.repeatedInt64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedInt64.push(reader.int64());
                            } else
                                message.repeatedInt64.push(reader.int64());
                            break;
                        }
                    case 33: {
                            if (!(message.repeatedUint32 && message.repeatedUint32.length))
                                message.repeatedUint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedUint32.push(reader.uint32());
                            } else
                                message.repeatedUint32.push(reader.uint32());
                            break;
                        }
                    case 34: {
                            if (!(message.repeatedUint64 && message.repeatedUint64.length))
                                message.repeatedUint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedUint64.push(reader.uint64());
                            } else
                                message.repeatedUint64.push(reader.uint64());
                            break;
                        }
                    case 35: {
                            if (!(message.repeatedSint32 && message.repeatedSint32.length))
                                message.repeatedSint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedSint32.push(reader.sint32());
                            } else
                                message.repeatedSint32.push(reader.sint32());
                            break;
                        }
                    case 36: {
                            if (!(message.repeatedSint64 && message.repeatedSint64.length))
                                message.repeatedSint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedSint64.push(reader.sint64());
                            } else
                                message.repeatedSint64.push(reader.sint64());
                            break;
                        }
                    case 37: {
                            if (!(message.repeatedFixed32 && message.repeatedFixed32.length))
                                message.repeatedFixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedFixed32.push(reader.fixed32());
                            } else
                                message.repeatedFixed32.push(reader.fixed32());
                            break;
                        }
                    case 38: {
                            if (!(message.repeatedFixed64 && message.repeatedFixed64.length))
                                message.repeatedFixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedFixed64.push(reader.fixed64());
                            } else
                                message.repeatedFixed64.push(reader.fixed64());
                            break;
                        }
                    case 39: {
                            if (!(message.repeatedSfixed32 && message.repeatedSfixed32.length))
                                message.repeatedSfixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedSfixed32.push(reader.sfixed32());
                            } else
                                message.repeatedSfixed32.push(reader.sfixed32());
                            break;
                        }
                    case 40: {
                            if (!(message.repeatedSfixed64 && message.repeatedSfixed64.length))
                                message.repeatedSfixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedSfixed64.push(reader.sfixed64());
                            } else
                                message.repeatedSfixed64.push(reader.sfixed64());
                            break;
                        }
                    case 41: {
                            if (!(message.repeatedFloat && message.repeatedFloat.length))
                                message.repeatedFloat = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedFloat.push(reader.float());
                            } else
                                message.repeatedFloat.push(reader.float());
                            break;
                        }
                    case 42: {
                            if (!(message.repeatedDouble && message.repeatedDouble.length))
                                message.repeatedDouble = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedDouble.push(reader.double());
                            } else
                                message.repeatedDouble.push(reader.double());
                            break;
                        }
                    case 43: {
                            if (!(message.repeatedBool && message.repeatedBool.length))
                                message.repeatedBool = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedBool.push(reader.bool());
                            } else
                                message.repeatedBool.push(reader.bool());
                            break;
                        }
                    case 44: {
                            if (!(message.repeatedString && message.repeatedString.length))
                                message.repeatedString = [];
                            message.repeatedString.push(reader.string());
                            break;
                        }
                    case 45: {
                            if (!(message.repeatedBytes && message.repeatedBytes.length))
                                message.repeatedBytes = [];
                            message.repeatedBytes.push(reader.bytes());
                            break;
                        }
                    case 48: {
                            if (!(message.repeatedNestedMessage && message.repeatedNestedMessage.length))
                                message.repeatedNestedMessage = [];
                            message.repeatedNestedMessage.push($root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.decode(reader, reader.uint32()));
                            break;
                        }
                    case 49: {
                            if (!(message.repeatedForeignMessage && message.repeatedForeignMessage.length))
                                message.repeatedForeignMessage = [];
                            message.repeatedForeignMessage.push($root.protobuf_test_messages.proto2.ForeignMessageProto2.decode(reader, reader.uint32()));
                            break;
                        }
                    case 51: {
                            if (!(message.repeatedNestedEnum && message.repeatedNestedEnum.length))
                                message.repeatedNestedEnum = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedNestedEnum.push(reader.int32());
                            } else
                                message.repeatedNestedEnum.push(reader.int32());
                            break;
                        }
                    case 52: {
                            if (!(message.repeatedForeignEnum && message.repeatedForeignEnum.length))
                                message.repeatedForeignEnum = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedForeignEnum.push(reader.int32());
                            } else
                                message.repeatedForeignEnum.push(reader.int32());
                            break;
                        }
                    case 54: {
                            if (!(message.repeatedStringPiece && message.repeatedStringPiece.length))
                                message.repeatedStringPiece = [];
                            message.repeatedStringPiece.push(reader.string());
                            break;
                        }
                    case 55: {
                            if (!(message.repeatedCord && message.repeatedCord.length))
                                message.repeatedCord = [];
                            message.repeatedCord.push(reader.string());
                            break;
                        }
                    case 75: {
                            if (!(message.packedInt32 && message.packedInt32.length))
                                message.packedInt32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedInt32.push(reader.int32());
                            } else
                                message.packedInt32.push(reader.int32());
                            break;
                        }
                    case 76: {
                            if (!(message.packedInt64 && message.packedInt64.length))
                                message.packedInt64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedInt64.push(reader.int64());
                            } else
                                message.packedInt64.push(reader.int64());
                            break;
                        }
                    case 77: {
                            if (!(message.packedUint32 && message.packedUint32.length))
                                message.packedUint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedUint32.push(reader.uint32());
                            } else
                                message.packedUint32.push(reader.uint32());
                            break;
                        }
                    case 78: {
                            if (!(message.packedUint64 && message.packedUint64.length))
                                message.packedUint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedUint64.push(reader.uint64());
                            } else
                                message.packedUint64.push(reader.uint64());
                            break;
                        }
                    case 79: {
                            if (!(message.packedSint32 && message.packedSint32.length))
                                message.packedSint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedSint32.push(reader.sint32());
                            } else
                                message.packedSint32.push(reader.sint32());
                            break;
                        }
                    case 80: {
                            if (!(message.packedSint64 && message.packedSint64.length))
                                message.packedSint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedSint64.push(reader.sint64());
                            } else
                                message.packedSint64.push(reader.sint64());
                            break;
                        }
                    case 81: {
                            if (!(message.packedFixed32 && message.packedFixed32.length))
                                message.packedFixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedFixed32.push(reader.fixed32());
                            } else
                                message.packedFixed32.push(reader.fixed32());
                            break;
                        }
                    case 82: {
                            if (!(message.packedFixed64 && message.packedFixed64.length))
                                message.packedFixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedFixed64.push(reader.fixed64());
                            } else
                                message.packedFixed64.push(reader.fixed64());
                            break;
                        }
                    case 83: {
                            if (!(message.packedSfixed32 && message.packedSfixed32.length))
                                message.packedSfixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedSfixed32.push(reader.sfixed32());
                            } else
                                message.packedSfixed32.push(reader.sfixed32());
                            break;
                        }
                    case 84: {
                            if (!(message.packedSfixed64 && message.packedSfixed64.length))
                                message.packedSfixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedSfixed64.push(reader.sfixed64());
                            } else
                                message.packedSfixed64.push(reader.sfixed64());
                            break;
                        }
                    case 85: {
                            if (!(message.packedFloat && message.packedFloat.length))
                                message.packedFloat = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedFloat.push(reader.float());
                            } else
                                message.packedFloat.push(reader.float());
                            break;
                        }
                    case 86: {
                            if (!(message.packedDouble && message.packedDouble.length))
                                message.packedDouble = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedDouble.push(reader.double());
                            } else
                                message.packedDouble.push(reader.double());
                            break;
                        }
                    case 87: {
                            if (!(message.packedBool && message.packedBool.length))
                                message.packedBool = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedBool.push(reader.bool());
                            } else
                                message.packedBool.push(reader.bool());
                            break;
                        }
                    case 88: {
                            if (!(message.packedNestedEnum && message.packedNestedEnum.length))
                                message.packedNestedEnum = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.packedNestedEnum.push(reader.int32());
                            } else
                                message.packedNestedEnum.push(reader.int32());
                            break;
                        }
                    case 89: {
                            if (!(message.unpackedInt32 && message.unpackedInt32.length))
                                message.unpackedInt32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedInt32.push(reader.int32());
                            } else
                                message.unpackedInt32.push(reader.int32());
                            break;
                        }
                    case 90: {
                            if (!(message.unpackedInt64 && message.unpackedInt64.length))
                                message.unpackedInt64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedInt64.push(reader.int64());
                            } else
                                message.unpackedInt64.push(reader.int64());
                            break;
                        }
                    case 91: {
                            if (!(message.unpackedUint32 && message.unpackedUint32.length))
                                message.unpackedUint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedUint32.push(reader.uint32());
                            } else
                                message.unpackedUint32.push(reader.uint32());
                            break;
                        }
                    case 92: {
                            if (!(message.unpackedUint64 && message.unpackedUint64.length))
                                message.unpackedUint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedUint64.push(reader.uint64());
                            } else
                                message.unpackedUint64.push(reader.uint64());
                            break;
                        }
                    case 93: {
                            if (!(message.unpackedSint32 && message.unpackedSint32.length))
                                message.unpackedSint32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedSint32.push(reader.sint32());
                            } else
                                message.unpackedSint32.push(reader.sint32());
                            break;
                        }
                    case 94: {
                            if (!(message.unpackedSint64 && message.unpackedSint64.length))
                                message.unpackedSint64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedSint64.push(reader.sint64());
                            } else
                                message.unpackedSint64.push(reader.sint64());
                            break;
                        }
                    case 95: {
                            if (!(message.unpackedFixed32 && message.unpackedFixed32.length))
                                message.unpackedFixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedFixed32.push(reader.fixed32());
                            } else
                                message.unpackedFixed32.push(reader.fixed32());
                            break;
                        }
                    case 96: {
                            if (!(message.unpackedFixed64 && message.unpackedFixed64.length))
                                message.unpackedFixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedFixed64.push(reader.fixed64());
                            } else
                                message.unpackedFixed64.push(reader.fixed64());
                            break;
                        }
                    case 97: {
                            if (!(message.unpackedSfixed32 && message.unpackedSfixed32.length))
                                message.unpackedSfixed32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedSfixed32.push(reader.sfixed32());
                            } else
                                message.unpackedSfixed32.push(reader.sfixed32());
                            break;
                        }
                    case 98: {
                            if (!(message.unpackedSfixed64 && message.unpackedSfixed64.length))
                                message.unpackedSfixed64 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedSfixed64.push(reader.sfixed64());
                            } else
                                message.unpackedSfixed64.push(reader.sfixed64());
                            break;
                        }
                    case 99: {
                            if (!(message.unpackedFloat && message.unpackedFloat.length))
                                message.unpackedFloat = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedFloat.push(reader.float());
                            } else
                                message.unpackedFloat.push(reader.float());
                            break;
                        }
                    case 100: {
                            if (!(message.unpackedDouble && message.unpackedDouble.length))
                                message.unpackedDouble = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedDouble.push(reader.double());
                            } else
                                message.unpackedDouble.push(reader.double());
                            break;
                        }
                    case 101: {
                            if (!(message.unpackedBool && message.unpackedBool.length))
                                message.unpackedBool = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedBool.push(reader.bool());
                            } else
                                message.unpackedBool.push(reader.bool());
                            break;
                        }
                    case 102: {
                            if (!(message.unpackedNestedEnum && message.unpackedNestedEnum.length))
                                message.unpackedNestedEnum = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.unpackedNestedEnum.push(reader.int32());
                            } else
                                message.unpackedNestedEnum.push(reader.int32());
                            break;
                        }
                    case 56: {
                            if (message.mapInt32Int32 === $util.emptyObject)
                                message.mapInt32Int32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt32Int32[key] = value;
                            break;
                        }
                    case 57: {
                            if (message.mapInt64Int64 === $util.emptyObject)
                                message.mapInt64Int64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int64();
                                    break;
                                case 2:
                                    value = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt64Int64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 58: {
                            if (message.mapUint32Uint32 === $util.emptyObject)
                                message.mapUint32Uint32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.uint32();
                                    break;
                                case 2:
                                    value = reader.uint32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapUint32Uint32[key] = value;
                            break;
                        }
                    case 59: {
                            if (message.mapUint64Uint64 === $util.emptyObject)
                                message.mapUint64Uint64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.uint64();
                                    break;
                                case 2:
                                    value = reader.uint64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapUint64Uint64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 60: {
                            if (message.mapSint32Sint32 === $util.emptyObject)
                                message.mapSint32Sint32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.sint32();
                                    break;
                                case 2:
                                    value = reader.sint32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapSint32Sint32[key] = value;
                            break;
                        }
                    case 61: {
                            if (message.mapSint64Sint64 === $util.emptyObject)
                                message.mapSint64Sint64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.sint64();
                                    break;
                                case 2:
                                    value = reader.sint64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapSint64Sint64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 62: {
                            if (message.mapFixed32Fixed32 === $util.emptyObject)
                                message.mapFixed32Fixed32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.fixed32();
                                    break;
                                case 2:
                                    value = reader.fixed32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapFixed32Fixed32[key] = value;
                            break;
                        }
                    case 63: {
                            if (message.mapFixed64Fixed64 === $util.emptyObject)
                                message.mapFixed64Fixed64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.fixed64();
                                    break;
                                case 2:
                                    value = reader.fixed64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapFixed64Fixed64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 64: {
                            if (message.mapSfixed32Sfixed32 === $util.emptyObject)
                                message.mapSfixed32Sfixed32 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.sfixed32();
                                    break;
                                case 2:
                                    value = reader.sfixed32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapSfixed32Sfixed32[key] = value;
                            break;
                        }
                    case 65: {
                            if (message.mapSfixed64Sfixed64 === $util.emptyObject)
                                message.mapSfixed64Sfixed64 = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.sfixed64();
                                    break;
                                case 2:
                                    value = reader.sfixed64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapSfixed64Sfixed64[typeof key === "object" ? $util.longToHash(key) : key] = value;
                            break;
                        }
                    case 66: {
                            if (message.mapInt32Float === $util.emptyObject)
                                message.mapInt32Float = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt32Float[key] = value;
                            break;
                        }
                    case 67: {
                            if (message.mapInt32Double === $util.emptyObject)
                                message.mapInt32Double = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = reader.double();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapInt32Double[key] = value;
                            break;
                        }
                    case 68: {
                            if (message.mapBoolBool === $util.emptyObject)
                                message.mapBoolBool = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = false;
                            value = false;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.bool();
                                    break;
                                case 2:
                                    value = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapBoolBool[key] = value;
                            break;
                        }
                    case 69: {
                            if (message.mapStringString === $util.emptyObject)
                                message.mapStringString = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringString[key] = value;
                            break;
                        }
                    case 70: {
                            if (message.mapStringBytes === $util.emptyObject)
                                message.mapStringBytes = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = [];
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.bytes();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringBytes[key] = value;
                            break;
                        }
                    case 71: {
                            if (message.mapStringNestedMessage === $util.emptyObject)
                                message.mapStringNestedMessage = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringNestedMessage[key] = value;
                            break;
                        }
                    case 72: {
                            if (message.mapStringForeignMessage === $util.emptyObject)
                                message.mapStringForeignMessage = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.protobuf_test_messages.proto2.ForeignMessageProto2.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringForeignMessage[key] = value;
                            break;
                        }
                    case 73: {
                            if (message.mapStringNestedEnum === $util.emptyObject)
                                message.mapStringNestedEnum = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringNestedEnum[key] = value;
                            break;
                        }
                    case 74: {
                            if (message.mapStringForeignEnum === $util.emptyObject)
                                message.mapStringForeignEnum = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = 0;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.mapStringForeignEnum[key] = value;
                            break;
                        }
                    case 111: {
                            message.oneofUint32 = reader.uint32();
                            break;
                        }
                    case 112: {
                            message.oneofNestedMessage = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.decode(reader, reader.uint32());
                            break;
                        }
                    case 113: {
                            message.oneofString = reader.string();
                            break;
                        }
                    case 114: {
                            message.oneofBytes = reader.bytes();
                            break;
                        }
                    case 115: {
                            message.oneofBool = reader.bool();
                            break;
                        }
                    case 116: {
                            message.oneofUint64 = reader.uint64();
                            break;
                        }
                    case 117: {
                            message.oneofFloat = reader.float();
                            break;
                        }
                    case 118: {
                            message.oneofDouble = reader.double();
                            break;
                        }
                    case 119: {
                            message.oneofEnum = reader.int32();
                            break;
                        }
                    case 201: {
                            message.data = $root.protobuf_test_messages.proto2.TestAllTypesProto2.Data.decode(reader);
                            break;
                        }
                    case 241: {
                            message.defaultInt32 = reader.int32();
                            break;
                        }
                    case 242: {
                            message.defaultInt64 = reader.int64();
                            break;
                        }
                    case 243: {
                            message.defaultUint32 = reader.uint32();
                            break;
                        }
                    case 244: {
                            message.defaultUint64 = reader.uint64();
                            break;
                        }
                    case 245: {
                            message.defaultSint32 = reader.sint32();
                            break;
                        }
                    case 246: {
                            message.defaultSint64 = reader.sint64();
                            break;
                        }
                    case 247: {
                            message.defaultFixed32 = reader.fixed32();
                            break;
                        }
                    case 248: {
                            message.defaultFixed64 = reader.fixed64();
                            break;
                        }
                    case 249: {
                            message.defaultSfixed32 = reader.sfixed32();
                            break;
                        }
                    case 250: {
                            message.defaultSfixed64 = reader.sfixed64();
                            break;
                        }
                    case 251: {
                            message.defaultFloat = reader.float();
                            break;
                        }
                    case 252: {
                            message.defaultDouble = reader.double();
                            break;
                        }
                    case 253: {
                            message.defaultBool = reader.bool();
                            break;
                        }
                    case 254: {
                            message.defaultString = reader.string();
                            break;
                        }
                    case 255: {
                            message.defaultBytes = reader.bytes();
                            break;
                        }
                    case 401: {
                            message.fieldname1 = reader.int32();
                            break;
                        }
                    case 402: {
                            message.fieldName2 = reader.int32();
                            break;
                        }
                    case 403: {
                            message._fieldName3 = reader.int32();
                            break;
                        }
                    case 404: {
                            message.field_Name4_ = reader.int32();
                            break;
                        }
                    case 405: {
                            message.field0name5 = reader.int32();
                            break;
                        }
                    case 406: {
                            message.field_0Name6 = reader.int32();
                            break;
                        }
                    case 407: {
                            message.fieldName7 = reader.int32();
                            break;
                        }
                    case 408: {
                            message.FieldName8 = reader.int32();
                            break;
                        }
                    case 409: {
                            message.field_Name9 = reader.int32();
                            break;
                        }
                    case 410: {
                            message.Field_Name10 = reader.int32();
                            break;
                        }
                    case 411: {
                            message.FIELD_NAME11 = reader.int32();
                            break;
                        }
                    case 412: {
                            message.FIELDName12 = reader.int32();
                            break;
                        }
                    case 413: {
                            message._FieldName13 = reader.int32();
                            break;
                        }
                    case 414: {
                            message.__FieldName14 = reader.int32();
                            break;
                        }
                    case 415: {
                            message.field_Name15 = reader.int32();
                            break;
                        }
                    case 416: {
                            message.field__Name16 = reader.int32();
                            break;
                        }
                    case 417: {
                            message.fieldName17__ = reader.int32();
                            break;
                        }
                    case 418: {
                            message.FieldName18__ = reader.int32();
                            break;
                        }
                    case 120: {
                            message[".protobuf_test_messages.proto2.extensionInt32"] = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TestAllTypesProto2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.TestAllTypesProto2} TestAllTypesProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TestAllTypesProto2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TestAllTypesProto2 message.
             * @function verify
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TestAllTypesProto2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.optionalInt32 != null && message.hasOwnProperty("optionalInt32"))
                    if (!$util.isInteger(message.optionalInt32))
                        return "optionalInt32: integer expected";
                if (message.optionalInt64 != null && message.hasOwnProperty("optionalInt64"))
                    if (!$util.isInteger(message.optionalInt64) && !(message.optionalInt64 && $util.isInteger(message.optionalInt64.low) && $util.isInteger(message.optionalInt64.high)))
                        return "optionalInt64: integer|Long expected";
                if (message.optionalUint32 != null && message.hasOwnProperty("optionalUint32"))
                    if (!$util.isInteger(message.optionalUint32))
                        return "optionalUint32: integer expected";
                if (message.optionalUint64 != null && message.hasOwnProperty("optionalUint64"))
                    if (!$util.isInteger(message.optionalUint64) && !(message.optionalUint64 && $util.isInteger(message.optionalUint64.low) && $util.isInteger(message.optionalUint64.high)))
                        return "optionalUint64: integer|Long expected";
                if (message.optionalSint32 != null && message.hasOwnProperty("optionalSint32"))
                    if (!$util.isInteger(message.optionalSint32))
                        return "optionalSint32: integer expected";
                if (message.optionalSint64 != null && message.hasOwnProperty("optionalSint64"))
                    if (!$util.isInteger(message.optionalSint64) && !(message.optionalSint64 && $util.isInteger(message.optionalSint64.low) && $util.isInteger(message.optionalSint64.high)))
                        return "optionalSint64: integer|Long expected";
                if (message.optionalFixed32 != null && message.hasOwnProperty("optionalFixed32"))
                    if (!$util.isInteger(message.optionalFixed32))
                        return "optionalFixed32: integer expected";
                if (message.optionalFixed64 != null && message.hasOwnProperty("optionalFixed64"))
                    if (!$util.isInteger(message.optionalFixed64) && !(message.optionalFixed64 && $util.isInteger(message.optionalFixed64.low) && $util.isInteger(message.optionalFixed64.high)))
                        return "optionalFixed64: integer|Long expected";
                if (message.optionalSfixed32 != null && message.hasOwnProperty("optionalSfixed32"))
                    if (!$util.isInteger(message.optionalSfixed32))
                        return "optionalSfixed32: integer expected";
                if (message.optionalSfixed64 != null && message.hasOwnProperty("optionalSfixed64"))
                    if (!$util.isInteger(message.optionalSfixed64) && !(message.optionalSfixed64 && $util.isInteger(message.optionalSfixed64.low) && $util.isInteger(message.optionalSfixed64.high)))
                        return "optionalSfixed64: integer|Long expected";
                if (message.optionalFloat != null && message.hasOwnProperty("optionalFloat"))
                    if (typeof message.optionalFloat !== "number")
                        return "optionalFloat: number expected";
                if (message.optionalDouble != null && message.hasOwnProperty("optionalDouble"))
                    if (typeof message.optionalDouble !== "number")
                        return "optionalDouble: number expected";
                if (message.optionalBool != null && message.hasOwnProperty("optionalBool"))
                    if (typeof message.optionalBool !== "boolean")
                        return "optionalBool: boolean expected";
                if (message.optionalString != null && message.hasOwnProperty("optionalString"))
                    if (!$util.isString(message.optionalString))
                        return "optionalString: string expected";
                if (message.optionalBytes != null && message.hasOwnProperty("optionalBytes"))
                    if (!(message.optionalBytes && typeof message.optionalBytes.length === "number" || $util.isString(message.optionalBytes)))
                        return "optionalBytes: buffer expected";
                if (message.optionalNestedMessage != null && message.hasOwnProperty("optionalNestedMessage")) {
                    let error = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify(message.optionalNestedMessage);
                    if (error)
                        return "optionalNestedMessage." + error;
                }
                if (message.optionalForeignMessage != null && message.hasOwnProperty("optionalForeignMessage")) {
                    let error = $root.protobuf_test_messages.proto2.ForeignMessageProto2.verify(message.optionalForeignMessage);
                    if (error)
                        return "optionalForeignMessage." + error;
                }
                if (message.optionalNestedEnum != null && message.hasOwnProperty("optionalNestedEnum"))
                    switch (message.optionalNestedEnum) {
                    default:
                        return "optionalNestedEnum: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case -1:
                        break;
                    }
                if (message.optionalForeignEnum != null && message.hasOwnProperty("optionalForeignEnum"))
                    switch (message.optionalForeignEnum) {
                    default:
                        return "optionalForeignEnum: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.optionalStringPiece != null && message.hasOwnProperty("optionalStringPiece"))
                    if (!$util.isString(message.optionalStringPiece))
                        return "optionalStringPiece: string expected";
                if (message.optionalCord != null && message.hasOwnProperty("optionalCord"))
                    if (!$util.isString(message.optionalCord))
                        return "optionalCord: string expected";
                if (message.recursiveMessage != null && message.hasOwnProperty("recursiveMessage")) {
                    let error = $root.protobuf_test_messages.proto2.TestAllTypesProto2.verify(message.recursiveMessage);
                    if (error)
                        return "recursiveMessage." + error;
                }
                if (message.repeatedInt32 != null && message.hasOwnProperty("repeatedInt32")) {
                    if (!Array.isArray(message.repeatedInt32))
                        return "repeatedInt32: array expected";
                    for (let i = 0; i < message.repeatedInt32.length; ++i)
                        if (!$util.isInteger(message.repeatedInt32[i]))
                            return "repeatedInt32: integer[] expected";
                }
                if (message.repeatedInt64 != null && message.hasOwnProperty("repeatedInt64")) {
                    if (!Array.isArray(message.repeatedInt64))
                        return "repeatedInt64: array expected";
                    for (let i = 0; i < message.repeatedInt64.length; ++i)
                        if (!$util.isInteger(message.repeatedInt64[i]) && !(message.repeatedInt64[i] && $util.isInteger(message.repeatedInt64[i].low) && $util.isInteger(message.repeatedInt64[i].high)))
                            return "repeatedInt64: integer|Long[] expected";
                }
                if (message.repeatedUint32 != null && message.hasOwnProperty("repeatedUint32")) {
                    if (!Array.isArray(message.repeatedUint32))
                        return "repeatedUint32: array expected";
                    for (let i = 0; i < message.repeatedUint32.length; ++i)
                        if (!$util.isInteger(message.repeatedUint32[i]))
                            return "repeatedUint32: integer[] expected";
                }
                if (message.repeatedUint64 != null && message.hasOwnProperty("repeatedUint64")) {
                    if (!Array.isArray(message.repeatedUint64))
                        return "repeatedUint64: array expected";
                    for (let i = 0; i < message.repeatedUint64.length; ++i)
                        if (!$util.isInteger(message.repeatedUint64[i]) && !(message.repeatedUint64[i] && $util.isInteger(message.repeatedUint64[i].low) && $util.isInteger(message.repeatedUint64[i].high)))
                            return "repeatedUint64: integer|Long[] expected";
                }
                if (message.repeatedSint32 != null && message.hasOwnProperty("repeatedSint32")) {
                    if (!Array.isArray(message.repeatedSint32))
                        return "repeatedSint32: array expected";
                    for (let i = 0; i < message.repeatedSint32.length; ++i)
                        if (!$util.isInteger(message.repeatedSint32[i]))
                            return "repeatedSint32: integer[] expected";
                }
                if (message.repeatedSint64 != null && message.hasOwnProperty("repeatedSint64")) {
                    if (!Array.isArray(message.repeatedSint64))
                        return "repeatedSint64: array expected";
                    for (let i = 0; i < message.repeatedSint64.length; ++i)
                        if (!$util.isInteger(message.repeatedSint64[i]) && !(message.repeatedSint64[i] && $util.isInteger(message.repeatedSint64[i].low) && $util.isInteger(message.repeatedSint64[i].high)))
                            return "repeatedSint64: integer|Long[] expected";
                }
                if (message.repeatedFixed32 != null && message.hasOwnProperty("repeatedFixed32")) {
                    if (!Array.isArray(message.repeatedFixed32))
                        return "repeatedFixed32: array expected";
                    for (let i = 0; i < message.repeatedFixed32.length; ++i)
                        if (!$util.isInteger(message.repeatedFixed32[i]))
                            return "repeatedFixed32: integer[] expected";
                }
                if (message.repeatedFixed64 != null && message.hasOwnProperty("repeatedFixed64")) {
                    if (!Array.isArray(message.repeatedFixed64))
                        return "repeatedFixed64: array expected";
                    for (let i = 0; i < message.repeatedFixed64.length; ++i)
                        if (!$util.isInteger(message.repeatedFixed64[i]) && !(message.repeatedFixed64[i] && $util.isInteger(message.repeatedFixed64[i].low) && $util.isInteger(message.repeatedFixed64[i].high)))
                            return "repeatedFixed64: integer|Long[] expected";
                }
                if (message.repeatedSfixed32 != null && message.hasOwnProperty("repeatedSfixed32")) {
                    if (!Array.isArray(message.repeatedSfixed32))
                        return "repeatedSfixed32: array expected";
                    for (let i = 0; i < message.repeatedSfixed32.length; ++i)
                        if (!$util.isInteger(message.repeatedSfixed32[i]))
                            return "repeatedSfixed32: integer[] expected";
                }
                if (message.repeatedSfixed64 != null && message.hasOwnProperty("repeatedSfixed64")) {
                    if (!Array.isArray(message.repeatedSfixed64))
                        return "repeatedSfixed64: array expected";
                    for (let i = 0; i < message.repeatedSfixed64.length; ++i)
                        if (!$util.isInteger(message.repeatedSfixed64[i]) && !(message.repeatedSfixed64[i] && $util.isInteger(message.repeatedSfixed64[i].low) && $util.isInteger(message.repeatedSfixed64[i].high)))
                            return "repeatedSfixed64: integer|Long[] expected";
                }
                if (message.repeatedFloat != null && message.hasOwnProperty("repeatedFloat")) {
                    if (!Array.isArray(message.repeatedFloat))
                        return "repeatedFloat: array expected";
                    for (let i = 0; i < message.repeatedFloat.length; ++i)
                        if (typeof message.repeatedFloat[i] !== "number")
                            return "repeatedFloat: number[] expected";
                }
                if (message.repeatedDouble != null && message.hasOwnProperty("repeatedDouble")) {
                    if (!Array.isArray(message.repeatedDouble))
                        return "repeatedDouble: array expected";
                    for (let i = 0; i < message.repeatedDouble.length; ++i)
                        if (typeof message.repeatedDouble[i] !== "number")
                            return "repeatedDouble: number[] expected";
                }
                if (message.repeatedBool != null && message.hasOwnProperty("repeatedBool")) {
                    if (!Array.isArray(message.repeatedBool))
                        return "repeatedBool: array expected";
                    for (let i = 0; i < message.repeatedBool.length; ++i)
                        if (typeof message.repeatedBool[i] !== "boolean")
                            return "repeatedBool: boolean[] expected";
                }
                if (message.repeatedString != null && message.hasOwnProperty("repeatedString")) {
                    if (!Array.isArray(message.repeatedString))
                        return "repeatedString: array expected";
                    for (let i = 0; i < message.repeatedString.length; ++i)
                        if (!$util.isString(message.repeatedString[i]))
                            return "repeatedString: string[] expected";
                }
                if (message.repeatedBytes != null && message.hasOwnProperty("repeatedBytes")) {
                    if (!Array.isArray(message.repeatedBytes))
                        return "repeatedBytes: array expected";
                    for (let i = 0; i < message.repeatedBytes.length; ++i)
                        if (!(message.repeatedBytes[i] && typeof message.repeatedBytes[i].length === "number" || $util.isString(message.repeatedBytes[i])))
                            return "repeatedBytes: buffer[] expected";
                }
                if (message.repeatedNestedMessage != null && message.hasOwnProperty("repeatedNestedMessage")) {
                    if (!Array.isArray(message.repeatedNestedMessage))
                        return "repeatedNestedMessage: array expected";
                    for (let i = 0; i < message.repeatedNestedMessage.length; ++i) {
                        let error = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify(message.repeatedNestedMessage[i]);
                        if (error)
                            return "repeatedNestedMessage." + error;
                    }
                }
                if (message.repeatedForeignMessage != null && message.hasOwnProperty("repeatedForeignMessage")) {
                    if (!Array.isArray(message.repeatedForeignMessage))
                        return "repeatedForeignMessage: array expected";
                    for (let i = 0; i < message.repeatedForeignMessage.length; ++i) {
                        let error = $root.protobuf_test_messages.proto2.ForeignMessageProto2.verify(message.repeatedForeignMessage[i]);
                        if (error)
                            return "repeatedForeignMessage." + error;
                    }
                }
                if (message.repeatedNestedEnum != null && message.hasOwnProperty("repeatedNestedEnum")) {
                    if (!Array.isArray(message.repeatedNestedEnum))
                        return "repeatedNestedEnum: array expected";
                    for (let i = 0; i < message.repeatedNestedEnum.length; ++i)
                        switch (message.repeatedNestedEnum[i]) {
                        default:
                            return "repeatedNestedEnum: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case -1:
                            break;
                        }
                }
                if (message.repeatedForeignEnum != null && message.hasOwnProperty("repeatedForeignEnum")) {
                    if (!Array.isArray(message.repeatedForeignEnum))
                        return "repeatedForeignEnum: array expected";
                    for (let i = 0; i < message.repeatedForeignEnum.length; ++i)
                        switch (message.repeatedForeignEnum[i]) {
                        default:
                            return "repeatedForeignEnum: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                }
                if (message.repeatedStringPiece != null && message.hasOwnProperty("repeatedStringPiece")) {
                    if (!Array.isArray(message.repeatedStringPiece))
                        return "repeatedStringPiece: array expected";
                    for (let i = 0; i < message.repeatedStringPiece.length; ++i)
                        if (!$util.isString(message.repeatedStringPiece[i]))
                            return "repeatedStringPiece: string[] expected";
                }
                if (message.repeatedCord != null && message.hasOwnProperty("repeatedCord")) {
                    if (!Array.isArray(message.repeatedCord))
                        return "repeatedCord: array expected";
                    for (let i = 0; i < message.repeatedCord.length; ++i)
                        if (!$util.isString(message.repeatedCord[i]))
                            return "repeatedCord: string[] expected";
                }
                if (message.packedInt32 != null && message.hasOwnProperty("packedInt32")) {
                    if (!Array.isArray(message.packedInt32))
                        return "packedInt32: array expected";
                    for (let i = 0; i < message.packedInt32.length; ++i)
                        if (!$util.isInteger(message.packedInt32[i]))
                            return "packedInt32: integer[] expected";
                }
                if (message.packedInt64 != null && message.hasOwnProperty("packedInt64")) {
                    if (!Array.isArray(message.packedInt64))
                        return "packedInt64: array expected";
                    for (let i = 0; i < message.packedInt64.length; ++i)
                        if (!$util.isInteger(message.packedInt64[i]) && !(message.packedInt64[i] && $util.isInteger(message.packedInt64[i].low) && $util.isInteger(message.packedInt64[i].high)))
                            return "packedInt64: integer|Long[] expected";
                }
                if (message.packedUint32 != null && message.hasOwnProperty("packedUint32")) {
                    if (!Array.isArray(message.packedUint32))
                        return "packedUint32: array expected";
                    for (let i = 0; i < message.packedUint32.length; ++i)
                        if (!$util.isInteger(message.packedUint32[i]))
                            return "packedUint32: integer[] expected";
                }
                if (message.packedUint64 != null && message.hasOwnProperty("packedUint64")) {
                    if (!Array.isArray(message.packedUint64))
                        return "packedUint64: array expected";
                    for (let i = 0; i < message.packedUint64.length; ++i)
                        if (!$util.isInteger(message.packedUint64[i]) && !(message.packedUint64[i] && $util.isInteger(message.packedUint64[i].low) && $util.isInteger(message.packedUint64[i].high)))
                            return "packedUint64: integer|Long[] expected";
                }
                if (message.packedSint32 != null && message.hasOwnProperty("packedSint32")) {
                    if (!Array.isArray(message.packedSint32))
                        return "packedSint32: array expected";
                    for (let i = 0; i < message.packedSint32.length; ++i)
                        if (!$util.isInteger(message.packedSint32[i]))
                            return "packedSint32: integer[] expected";
                }
                if (message.packedSint64 != null && message.hasOwnProperty("packedSint64")) {
                    if (!Array.isArray(message.packedSint64))
                        return "packedSint64: array expected";
                    for (let i = 0; i < message.packedSint64.length; ++i)
                        if (!$util.isInteger(message.packedSint64[i]) && !(message.packedSint64[i] && $util.isInteger(message.packedSint64[i].low) && $util.isInteger(message.packedSint64[i].high)))
                            return "packedSint64: integer|Long[] expected";
                }
                if (message.packedFixed32 != null && message.hasOwnProperty("packedFixed32")) {
                    if (!Array.isArray(message.packedFixed32))
                        return "packedFixed32: array expected";
                    for (let i = 0; i < message.packedFixed32.length; ++i)
                        if (!$util.isInteger(message.packedFixed32[i]))
                            return "packedFixed32: integer[] expected";
                }
                if (message.packedFixed64 != null && message.hasOwnProperty("packedFixed64")) {
                    if (!Array.isArray(message.packedFixed64))
                        return "packedFixed64: array expected";
                    for (let i = 0; i < message.packedFixed64.length; ++i)
                        if (!$util.isInteger(message.packedFixed64[i]) && !(message.packedFixed64[i] && $util.isInteger(message.packedFixed64[i].low) && $util.isInteger(message.packedFixed64[i].high)))
                            return "packedFixed64: integer|Long[] expected";
                }
                if (message.packedSfixed32 != null && message.hasOwnProperty("packedSfixed32")) {
                    if (!Array.isArray(message.packedSfixed32))
                        return "packedSfixed32: array expected";
                    for (let i = 0; i < message.packedSfixed32.length; ++i)
                        if (!$util.isInteger(message.packedSfixed32[i]))
                            return "packedSfixed32: integer[] expected";
                }
                if (message.packedSfixed64 != null && message.hasOwnProperty("packedSfixed64")) {
                    if (!Array.isArray(message.packedSfixed64))
                        return "packedSfixed64: array expected";
                    for (let i = 0; i < message.packedSfixed64.length; ++i)
                        if (!$util.isInteger(message.packedSfixed64[i]) && !(message.packedSfixed64[i] && $util.isInteger(message.packedSfixed64[i].low) && $util.isInteger(message.packedSfixed64[i].high)))
                            return "packedSfixed64: integer|Long[] expected";
                }
                if (message.packedFloat != null && message.hasOwnProperty("packedFloat")) {
                    if (!Array.isArray(message.packedFloat))
                        return "packedFloat: array expected";
                    for (let i = 0; i < message.packedFloat.length; ++i)
                        if (typeof message.packedFloat[i] !== "number")
                            return "packedFloat: number[] expected";
                }
                if (message.packedDouble != null && message.hasOwnProperty("packedDouble")) {
                    if (!Array.isArray(message.packedDouble))
                        return "packedDouble: array expected";
                    for (let i = 0; i < message.packedDouble.length; ++i)
                        if (typeof message.packedDouble[i] !== "number")
                            return "packedDouble: number[] expected";
                }
                if (message.packedBool != null && message.hasOwnProperty("packedBool")) {
                    if (!Array.isArray(message.packedBool))
                        return "packedBool: array expected";
                    for (let i = 0; i < message.packedBool.length; ++i)
                        if (typeof message.packedBool[i] !== "boolean")
                            return "packedBool: boolean[] expected";
                }
                if (message.packedNestedEnum != null && message.hasOwnProperty("packedNestedEnum")) {
                    if (!Array.isArray(message.packedNestedEnum))
                        return "packedNestedEnum: array expected";
                    for (let i = 0; i < message.packedNestedEnum.length; ++i)
                        switch (message.packedNestedEnum[i]) {
                        default:
                            return "packedNestedEnum: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case -1:
                            break;
                        }
                }
                if (message.unpackedInt32 != null && message.hasOwnProperty("unpackedInt32")) {
                    if (!Array.isArray(message.unpackedInt32))
                        return "unpackedInt32: array expected";
                    for (let i = 0; i < message.unpackedInt32.length; ++i)
                        if (!$util.isInteger(message.unpackedInt32[i]))
                            return "unpackedInt32: integer[] expected";
                }
                if (message.unpackedInt64 != null && message.hasOwnProperty("unpackedInt64")) {
                    if (!Array.isArray(message.unpackedInt64))
                        return "unpackedInt64: array expected";
                    for (let i = 0; i < message.unpackedInt64.length; ++i)
                        if (!$util.isInteger(message.unpackedInt64[i]) && !(message.unpackedInt64[i] && $util.isInteger(message.unpackedInt64[i].low) && $util.isInteger(message.unpackedInt64[i].high)))
                            return "unpackedInt64: integer|Long[] expected";
                }
                if (message.unpackedUint32 != null && message.hasOwnProperty("unpackedUint32")) {
                    if (!Array.isArray(message.unpackedUint32))
                        return "unpackedUint32: array expected";
                    for (let i = 0; i < message.unpackedUint32.length; ++i)
                        if (!$util.isInteger(message.unpackedUint32[i]))
                            return "unpackedUint32: integer[] expected";
                }
                if (message.unpackedUint64 != null && message.hasOwnProperty("unpackedUint64")) {
                    if (!Array.isArray(message.unpackedUint64))
                        return "unpackedUint64: array expected";
                    for (let i = 0; i < message.unpackedUint64.length; ++i)
                        if (!$util.isInteger(message.unpackedUint64[i]) && !(message.unpackedUint64[i] && $util.isInteger(message.unpackedUint64[i].low) && $util.isInteger(message.unpackedUint64[i].high)))
                            return "unpackedUint64: integer|Long[] expected";
                }
                if (message.unpackedSint32 != null && message.hasOwnProperty("unpackedSint32")) {
                    if (!Array.isArray(message.unpackedSint32))
                        return "unpackedSint32: array expected";
                    for (let i = 0; i < message.unpackedSint32.length; ++i)
                        if (!$util.isInteger(message.unpackedSint32[i]))
                            return "unpackedSint32: integer[] expected";
                }
                if (message.unpackedSint64 != null && message.hasOwnProperty("unpackedSint64")) {
                    if (!Array.isArray(message.unpackedSint64))
                        return "unpackedSint64: array expected";
                    for (let i = 0; i < message.unpackedSint64.length; ++i)
                        if (!$util.isInteger(message.unpackedSint64[i]) && !(message.unpackedSint64[i] && $util.isInteger(message.unpackedSint64[i].low) && $util.isInteger(message.unpackedSint64[i].high)))
                            return "unpackedSint64: integer|Long[] expected";
                }
                if (message.unpackedFixed32 != null && message.hasOwnProperty("unpackedFixed32")) {
                    if (!Array.isArray(message.unpackedFixed32))
                        return "unpackedFixed32: array expected";
                    for (let i = 0; i < message.unpackedFixed32.length; ++i)
                        if (!$util.isInteger(message.unpackedFixed32[i]))
                            return "unpackedFixed32: integer[] expected";
                }
                if (message.unpackedFixed64 != null && message.hasOwnProperty("unpackedFixed64")) {
                    if (!Array.isArray(message.unpackedFixed64))
                        return "unpackedFixed64: array expected";
                    for (let i = 0; i < message.unpackedFixed64.length; ++i)
                        if (!$util.isInteger(message.unpackedFixed64[i]) && !(message.unpackedFixed64[i] && $util.isInteger(message.unpackedFixed64[i].low) && $util.isInteger(message.unpackedFixed64[i].high)))
                            return "unpackedFixed64: integer|Long[] expected";
                }
                if (message.unpackedSfixed32 != null && message.hasOwnProperty("unpackedSfixed32")) {
                    if (!Array.isArray(message.unpackedSfixed32))
                        return "unpackedSfixed32: array expected";
                    for (let i = 0; i < message.unpackedSfixed32.length; ++i)
                        if (!$util.isInteger(message.unpackedSfixed32[i]))
                            return "unpackedSfixed32: integer[] expected";
                }
                if (message.unpackedSfixed64 != null && message.hasOwnProperty("unpackedSfixed64")) {
                    if (!Array.isArray(message.unpackedSfixed64))
                        return "unpackedSfixed64: array expected";
                    for (let i = 0; i < message.unpackedSfixed64.length; ++i)
                        if (!$util.isInteger(message.unpackedSfixed64[i]) && !(message.unpackedSfixed64[i] && $util.isInteger(message.unpackedSfixed64[i].low) && $util.isInteger(message.unpackedSfixed64[i].high)))
                            return "unpackedSfixed64: integer|Long[] expected";
                }
                if (message.unpackedFloat != null && message.hasOwnProperty("unpackedFloat")) {
                    if (!Array.isArray(message.unpackedFloat))
                        return "unpackedFloat: array expected";
                    for (let i = 0; i < message.unpackedFloat.length; ++i)
                        if (typeof message.unpackedFloat[i] !== "number")
                            return "unpackedFloat: number[] expected";
                }
                if (message.unpackedDouble != null && message.hasOwnProperty("unpackedDouble")) {
                    if (!Array.isArray(message.unpackedDouble))
                        return "unpackedDouble: array expected";
                    for (let i = 0; i < message.unpackedDouble.length; ++i)
                        if (typeof message.unpackedDouble[i] !== "number")
                            return "unpackedDouble: number[] expected";
                }
                if (message.unpackedBool != null && message.hasOwnProperty("unpackedBool")) {
                    if (!Array.isArray(message.unpackedBool))
                        return "unpackedBool: array expected";
                    for (let i = 0; i < message.unpackedBool.length; ++i)
                        if (typeof message.unpackedBool[i] !== "boolean")
                            return "unpackedBool: boolean[] expected";
                }
                if (message.unpackedNestedEnum != null && message.hasOwnProperty("unpackedNestedEnum")) {
                    if (!Array.isArray(message.unpackedNestedEnum))
                        return "unpackedNestedEnum: array expected";
                    for (let i = 0; i < message.unpackedNestedEnum.length; ++i)
                        switch (message.unpackedNestedEnum[i]) {
                        default:
                            return "unpackedNestedEnum: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case -1:
                            break;
                        }
                }
                if (message.mapInt32Int32 != null && message.hasOwnProperty("mapInt32Int32")) {
                    if (!$util.isObject(message.mapInt32Int32))
                        return "mapInt32Int32: object expected";
                    let key = Object.keys(message.mapInt32Int32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapInt32Int32: integer key{k:int32} expected";
                        if (!$util.isInteger(message.mapInt32Int32[key[i]]))
                            return "mapInt32Int32: integer{k:int32} expected";
                    }
                }
                if (message.mapInt64Int64 != null && message.hasOwnProperty("mapInt64Int64")) {
                    if (!$util.isObject(message.mapInt64Int64))
                        return "mapInt64Int64: object expected";
                    let key = Object.keys(message.mapInt64Int64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapInt64Int64: integer|Long key{k:int64} expected";
                        if (!$util.isInteger(message.mapInt64Int64[key[i]]) && !(message.mapInt64Int64[key[i]] && $util.isInteger(message.mapInt64Int64[key[i]].low) && $util.isInteger(message.mapInt64Int64[key[i]].high)))
                            return "mapInt64Int64: integer|Long{k:int64} expected";
                    }
                }
                if (message.mapUint32Uint32 != null && message.hasOwnProperty("mapUint32Uint32")) {
                    if (!$util.isObject(message.mapUint32Uint32))
                        return "mapUint32Uint32: object expected";
                    let key = Object.keys(message.mapUint32Uint32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapUint32Uint32: integer key{k:uint32} expected";
                        if (!$util.isInteger(message.mapUint32Uint32[key[i]]))
                            return "mapUint32Uint32: integer{k:uint32} expected";
                    }
                }
                if (message.mapUint64Uint64 != null && message.hasOwnProperty("mapUint64Uint64")) {
                    if (!$util.isObject(message.mapUint64Uint64))
                        return "mapUint64Uint64: object expected";
                    let key = Object.keys(message.mapUint64Uint64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapUint64Uint64: integer|Long key{k:uint64} expected";
                        if (!$util.isInteger(message.mapUint64Uint64[key[i]]) && !(message.mapUint64Uint64[key[i]] && $util.isInteger(message.mapUint64Uint64[key[i]].low) && $util.isInteger(message.mapUint64Uint64[key[i]].high)))
                            return "mapUint64Uint64: integer|Long{k:uint64} expected";
                    }
                }
                if (message.mapSint32Sint32 != null && message.hasOwnProperty("mapSint32Sint32")) {
                    if (!$util.isObject(message.mapSint32Sint32))
                        return "mapSint32Sint32: object expected";
                    let key = Object.keys(message.mapSint32Sint32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapSint32Sint32: integer key{k:sint32} expected";
                        if (!$util.isInteger(message.mapSint32Sint32[key[i]]))
                            return "mapSint32Sint32: integer{k:sint32} expected";
                    }
                }
                if (message.mapSint64Sint64 != null && message.hasOwnProperty("mapSint64Sint64")) {
                    if (!$util.isObject(message.mapSint64Sint64))
                        return "mapSint64Sint64: object expected";
                    let key = Object.keys(message.mapSint64Sint64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapSint64Sint64: integer|Long key{k:sint64} expected";
                        if (!$util.isInteger(message.mapSint64Sint64[key[i]]) && !(message.mapSint64Sint64[key[i]] && $util.isInteger(message.mapSint64Sint64[key[i]].low) && $util.isInteger(message.mapSint64Sint64[key[i]].high)))
                            return "mapSint64Sint64: integer|Long{k:sint64} expected";
                    }
                }
                if (message.mapFixed32Fixed32 != null && message.hasOwnProperty("mapFixed32Fixed32")) {
                    if (!$util.isObject(message.mapFixed32Fixed32))
                        return "mapFixed32Fixed32: object expected";
                    let key = Object.keys(message.mapFixed32Fixed32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapFixed32Fixed32: integer key{k:fixed32} expected";
                        if (!$util.isInteger(message.mapFixed32Fixed32[key[i]]))
                            return "mapFixed32Fixed32: integer{k:fixed32} expected";
                    }
                }
                if (message.mapFixed64Fixed64 != null && message.hasOwnProperty("mapFixed64Fixed64")) {
                    if (!$util.isObject(message.mapFixed64Fixed64))
                        return "mapFixed64Fixed64: object expected";
                    let key = Object.keys(message.mapFixed64Fixed64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapFixed64Fixed64: integer|Long key{k:fixed64} expected";
                        if (!$util.isInteger(message.mapFixed64Fixed64[key[i]]) && !(message.mapFixed64Fixed64[key[i]] && $util.isInteger(message.mapFixed64Fixed64[key[i]].low) && $util.isInteger(message.mapFixed64Fixed64[key[i]].high)))
                            return "mapFixed64Fixed64: integer|Long{k:fixed64} expected";
                    }
                }
                if (message.mapSfixed32Sfixed32 != null && message.hasOwnProperty("mapSfixed32Sfixed32")) {
                    if (!$util.isObject(message.mapSfixed32Sfixed32))
                        return "mapSfixed32Sfixed32: object expected";
                    let key = Object.keys(message.mapSfixed32Sfixed32);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapSfixed32Sfixed32: integer key{k:sfixed32} expected";
                        if (!$util.isInteger(message.mapSfixed32Sfixed32[key[i]]))
                            return "mapSfixed32Sfixed32: integer{k:sfixed32} expected";
                    }
                }
                if (message.mapSfixed64Sfixed64 != null && message.hasOwnProperty("mapSfixed64Sfixed64")) {
                    if (!$util.isObject(message.mapSfixed64Sfixed64))
                        return "mapSfixed64Sfixed64: object expected";
                    let key = Object.keys(message.mapSfixed64Sfixed64);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key64Re.test(key[i]))
                            return "mapSfixed64Sfixed64: integer|Long key{k:sfixed64} expected";
                        if (!$util.isInteger(message.mapSfixed64Sfixed64[key[i]]) && !(message.mapSfixed64Sfixed64[key[i]] && $util.isInteger(message.mapSfixed64Sfixed64[key[i]].low) && $util.isInteger(message.mapSfixed64Sfixed64[key[i]].high)))
                            return "mapSfixed64Sfixed64: integer|Long{k:sfixed64} expected";
                    }
                }
                if (message.mapInt32Float != null && message.hasOwnProperty("mapInt32Float")) {
                    if (!$util.isObject(message.mapInt32Float))
                        return "mapInt32Float: object expected";
                    let key = Object.keys(message.mapInt32Float);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapInt32Float: integer key{k:int32} expected";
                        if (typeof message.mapInt32Float[key[i]] !== "number")
                            return "mapInt32Float: number{k:int32} expected";
                    }
                }
                if (message.mapInt32Double != null && message.hasOwnProperty("mapInt32Double")) {
                    if (!$util.isObject(message.mapInt32Double))
                        return "mapInt32Double: object expected";
                    let key = Object.keys(message.mapInt32Double);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "mapInt32Double: integer key{k:int32} expected";
                        if (typeof message.mapInt32Double[key[i]] !== "number")
                            return "mapInt32Double: number{k:int32} expected";
                    }
                }
                if (message.mapBoolBool != null && message.hasOwnProperty("mapBoolBool")) {
                    if (!$util.isObject(message.mapBoolBool))
                        return "mapBoolBool: object expected";
                    let key = Object.keys(message.mapBoolBool);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key2Re.test(key[i]))
                            return "mapBoolBool: boolean key{k:bool} expected";
                        if (typeof message.mapBoolBool[key[i]] !== "boolean")
                            return "mapBoolBool: boolean{k:bool} expected";
                    }
                }
                if (message.mapStringString != null && message.hasOwnProperty("mapStringString")) {
                    if (!$util.isObject(message.mapStringString))
                        return "mapStringString: object expected";
                    let key = Object.keys(message.mapStringString);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.mapStringString[key[i]]))
                            return "mapStringString: string{k:string} expected";
                }
                if (message.mapStringBytes != null && message.hasOwnProperty("mapStringBytes")) {
                    if (!$util.isObject(message.mapStringBytes))
                        return "mapStringBytes: object expected";
                    let key = Object.keys(message.mapStringBytes);
                    for (let i = 0; i < key.length; ++i)
                        if (!(message.mapStringBytes[key[i]] && typeof message.mapStringBytes[key[i]].length === "number" || $util.isString(message.mapStringBytes[key[i]])))
                            return "mapStringBytes: buffer{k:string} expected";
                }
                if (message.mapStringNestedMessage != null && message.hasOwnProperty("mapStringNestedMessage")) {
                    if (!$util.isObject(message.mapStringNestedMessage))
                        return "mapStringNestedMessage: object expected";
                    let key = Object.keys(message.mapStringNestedMessage);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify(message.mapStringNestedMessage[key[i]]);
                        if (error)
                            return "mapStringNestedMessage." + error;
                    }
                }
                if (message.mapStringForeignMessage != null && message.hasOwnProperty("mapStringForeignMessage")) {
                    if (!$util.isObject(message.mapStringForeignMessage))
                        return "mapStringForeignMessage: object expected";
                    let key = Object.keys(message.mapStringForeignMessage);
                    for (let i = 0; i < key.length; ++i) {
                        let error = $root.protobuf_test_messages.proto2.ForeignMessageProto2.verify(message.mapStringForeignMessage[key[i]]);
                        if (error)
                            return "mapStringForeignMessage." + error;
                    }
                }
                if (message.mapStringNestedEnum != null && message.hasOwnProperty("mapStringNestedEnum")) {
                    if (!$util.isObject(message.mapStringNestedEnum))
                        return "mapStringNestedEnum: object expected";
                    let key = Object.keys(message.mapStringNestedEnum);
                    for (let i = 0; i < key.length; ++i)
                        switch (message.mapStringNestedEnum[key[i]]) {
                        default:
                            return "mapStringNestedEnum: enum value{k:string} expected";
                        case 0:
                        case 1:
                        case 2:
                        case -1:
                            break;
                        }
                }
                if (message.mapStringForeignEnum != null && message.hasOwnProperty("mapStringForeignEnum")) {
                    if (!$util.isObject(message.mapStringForeignEnum))
                        return "mapStringForeignEnum: object expected";
                    let key = Object.keys(message.mapStringForeignEnum);
                    for (let i = 0; i < key.length; ++i)
                        switch (message.mapStringForeignEnum[key[i]]) {
                        default:
                            return "mapStringForeignEnum: enum value{k:string} expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                }
                if (message.oneofUint32 != null && message.hasOwnProperty("oneofUint32")) {
                    properties.oneofField = 1;
                    if (!$util.isInteger(message.oneofUint32))
                        return "oneofUint32: integer expected";
                }
                if (message.oneofNestedMessage != null && message.hasOwnProperty("oneofNestedMessage")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    {
                        let error = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify(message.oneofNestedMessage);
                        if (error)
                            return "oneofNestedMessage." + error;
                    }
                }
                if (message.oneofString != null && message.hasOwnProperty("oneofString")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (!$util.isString(message.oneofString))
                        return "oneofString: string expected";
                }
                if (message.oneofBytes != null && message.hasOwnProperty("oneofBytes")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (!(message.oneofBytes && typeof message.oneofBytes.length === "number" || $util.isString(message.oneofBytes)))
                        return "oneofBytes: buffer expected";
                }
                if (message.oneofBool != null && message.hasOwnProperty("oneofBool")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (typeof message.oneofBool !== "boolean")
                        return "oneofBool: boolean expected";
                }
                if (message.oneofUint64 != null && message.hasOwnProperty("oneofUint64")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (!$util.isInteger(message.oneofUint64) && !(message.oneofUint64 && $util.isInteger(message.oneofUint64.low) && $util.isInteger(message.oneofUint64.high)))
                        return "oneofUint64: integer|Long expected";
                }
                if (message.oneofFloat != null && message.hasOwnProperty("oneofFloat")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (typeof message.oneofFloat !== "number")
                        return "oneofFloat: number expected";
                }
                if (message.oneofDouble != null && message.hasOwnProperty("oneofDouble")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    if (typeof message.oneofDouble !== "number")
                        return "oneofDouble: number expected";
                }
                if (message.oneofEnum != null && message.hasOwnProperty("oneofEnum")) {
                    if (properties.oneofField === 1)
                        return "oneofField: multiple values";
                    properties.oneofField = 1;
                    switch (message.oneofEnum) {
                    default:
                        return "oneofEnum: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case -1:
                        break;
                    }
                }
                if (message.data != null && message.hasOwnProperty("data")) {
                    let error = $root.protobuf_test_messages.proto2.TestAllTypesProto2.Data.verify(message.data);
                    if (error)
                        return "data." + error;
                }
                if (message.defaultInt32 != null && message.hasOwnProperty("defaultInt32"))
                    if (!$util.isInteger(message.defaultInt32))
                        return "defaultInt32: integer expected";
                if (message.defaultInt64 != null && message.hasOwnProperty("defaultInt64"))
                    if (!$util.isInteger(message.defaultInt64) && !(message.defaultInt64 && $util.isInteger(message.defaultInt64.low) && $util.isInteger(message.defaultInt64.high)))
                        return "defaultInt64: integer|Long expected";
                if (message.defaultUint32 != null && message.hasOwnProperty("defaultUint32"))
                    if (!$util.isInteger(message.defaultUint32))
                        return "defaultUint32: integer expected";
                if (message.defaultUint64 != null && message.hasOwnProperty("defaultUint64"))
                    if (!$util.isInteger(message.defaultUint64) && !(message.defaultUint64 && $util.isInteger(message.defaultUint64.low) && $util.isInteger(message.defaultUint64.high)))
                        return "defaultUint64: integer|Long expected";
                if (message.defaultSint32 != null && message.hasOwnProperty("defaultSint32"))
                    if (!$util.isInteger(message.defaultSint32))
                        return "defaultSint32: integer expected";
                if (message.defaultSint64 != null && message.hasOwnProperty("defaultSint64"))
                    if (!$util.isInteger(message.defaultSint64) && !(message.defaultSint64 && $util.isInteger(message.defaultSint64.low) && $util.isInteger(message.defaultSint64.high)))
                        return "defaultSint64: integer|Long expected";
                if (message.defaultFixed32 != null && message.hasOwnProperty("defaultFixed32"))
                    if (!$util.isInteger(message.defaultFixed32))
                        return "defaultFixed32: integer expected";
                if (message.defaultFixed64 != null && message.hasOwnProperty("defaultFixed64"))
                    if (!$util.isInteger(message.defaultFixed64) && !(message.defaultFixed64 && $util.isInteger(message.defaultFixed64.low) && $util.isInteger(message.defaultFixed64.high)))
                        return "defaultFixed64: integer|Long expected";
                if (message.defaultSfixed32 != null && message.hasOwnProperty("defaultSfixed32"))
                    if (!$util.isInteger(message.defaultSfixed32))
                        return "defaultSfixed32: integer expected";
                if (message.defaultSfixed64 != null && message.hasOwnProperty("defaultSfixed64"))
                    if (!$util.isInteger(message.defaultSfixed64) && !(message.defaultSfixed64 && $util.isInteger(message.defaultSfixed64.low) && $util.isInteger(message.defaultSfixed64.high)))
                        return "defaultSfixed64: integer|Long expected";
                if (message.defaultFloat != null && message.hasOwnProperty("defaultFloat"))
                    if (typeof message.defaultFloat !== "number")
                        return "defaultFloat: number expected";
                if (message.defaultDouble != null && message.hasOwnProperty("defaultDouble"))
                    if (typeof message.defaultDouble !== "number")
                        return "defaultDouble: number expected";
                if (message.defaultBool != null && message.hasOwnProperty("defaultBool"))
                    if (typeof message.defaultBool !== "boolean")
                        return "defaultBool: boolean expected";
                if (message.defaultString != null && message.hasOwnProperty("defaultString"))
                    if (!$util.isString(message.defaultString))
                        return "defaultString: string expected";
                if (message.defaultBytes != null && message.hasOwnProperty("defaultBytes"))
                    if (!(message.defaultBytes && typeof message.defaultBytes.length === "number" || $util.isString(message.defaultBytes)))
                        return "defaultBytes: buffer expected";
                if (message.fieldname1 != null && message.hasOwnProperty("fieldname1"))
                    if (!$util.isInteger(message.fieldname1))
                        return "fieldname1: integer expected";
                if (message.fieldName2 != null && message.hasOwnProperty("fieldName2"))
                    if (!$util.isInteger(message.fieldName2))
                        return "fieldName2: integer expected";
                if (message._fieldName3 != null && message.hasOwnProperty("_fieldName3"))
                    if (!$util.isInteger(message._fieldName3))
                        return "_fieldName3: integer expected";
                if (message.field_Name4_ != null && message.hasOwnProperty("field_Name4_"))
                    if (!$util.isInteger(message.field_Name4_))
                        return "field_Name4_: integer expected";
                if (message.field0name5 != null && message.hasOwnProperty("field0name5"))
                    if (!$util.isInteger(message.field0name5))
                        return "field0name5: integer expected";
                if (message.field_0Name6 != null && message.hasOwnProperty("field_0Name6"))
                    if (!$util.isInteger(message.field_0Name6))
                        return "field_0Name6: integer expected";
                if (message.fieldName7 != null && message.hasOwnProperty("fieldName7"))
                    if (!$util.isInteger(message.fieldName7))
                        return "fieldName7: integer expected";
                if (message.FieldName8 != null && message.hasOwnProperty("FieldName8"))
                    if (!$util.isInteger(message.FieldName8))
                        return "FieldName8: integer expected";
                if (message.field_Name9 != null && message.hasOwnProperty("field_Name9"))
                    if (!$util.isInteger(message.field_Name9))
                        return "field_Name9: integer expected";
                if (message.Field_Name10 != null && message.hasOwnProperty("Field_Name10"))
                    if (!$util.isInteger(message.Field_Name10))
                        return "Field_Name10: integer expected";
                if (message.FIELD_NAME11 != null && message.hasOwnProperty("FIELD_NAME11"))
                    if (!$util.isInteger(message.FIELD_NAME11))
                        return "FIELD_NAME11: integer expected";
                if (message.FIELDName12 != null && message.hasOwnProperty("FIELDName12"))
                    if (!$util.isInteger(message.FIELDName12))
                        return "FIELDName12: integer expected";
                if (message._FieldName13 != null && message.hasOwnProperty("_FieldName13"))
                    if (!$util.isInteger(message._FieldName13))
                        return "_FieldName13: integer expected";
                if (message.__FieldName14 != null && message.hasOwnProperty("__FieldName14"))
                    if (!$util.isInteger(message.__FieldName14))
                        return "__FieldName14: integer expected";
                if (message.field_Name15 != null && message.hasOwnProperty("field_Name15"))
                    if (!$util.isInteger(message.field_Name15))
                        return "field_Name15: integer expected";
                if (message.field__Name16 != null && message.hasOwnProperty("field__Name16"))
                    if (!$util.isInteger(message.field__Name16))
                        return "field__Name16: integer expected";
                if (message.fieldName17__ != null && message.hasOwnProperty("fieldName17__"))
                    if (!$util.isInteger(message.fieldName17__))
                        return "fieldName17__: integer expected";
                if (message.FieldName18__ != null && message.hasOwnProperty("FieldName18__"))
                    if (!$util.isInteger(message.FieldName18__))
                        return "FieldName18__: integer expected";
                if (message[".protobuf_test_messages.proto2.extensionInt32"] != null && message.hasOwnProperty(".protobuf_test_messages.proto2.extensionInt32"))
                    if (!$util.isInteger(message[".protobuf_test_messages.proto2.extensionInt32"]))
                        return ".protobuf_test_messages.proto2.extensionInt32: integer expected";
                return null;
            };

            /**
             * Creates a TestAllTypesProto2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto2.TestAllTypesProto2} TestAllTypesProto2
             */
            TestAllTypesProto2.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto2.TestAllTypesProto2)
                    return object;
                let message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2();
                if (object.optionalInt32 != null)
                    message.optionalInt32 = object.optionalInt32 | 0;
                if (object.optionalInt64 != null)
                    if ($util.Long)
                        (message.optionalInt64 = $util.Long.fromValue(object.optionalInt64)).unsigned = false;
                    else if (typeof object.optionalInt64 === "string")
                        message.optionalInt64 = parseInt(object.optionalInt64, 10);
                    else if (typeof object.optionalInt64 === "number")
                        message.optionalInt64 = object.optionalInt64;
                    else if (typeof object.optionalInt64 === "object")
                        message.optionalInt64 = new $util.LongBits(object.optionalInt64.low >>> 0, object.optionalInt64.high >>> 0).toNumber();
                if (object.optionalUint32 != null)
                    message.optionalUint32 = object.optionalUint32 >>> 0;
                if (object.optionalUint64 != null)
                    if ($util.Long)
                        (message.optionalUint64 = $util.Long.fromValue(object.optionalUint64)).unsigned = true;
                    else if (typeof object.optionalUint64 === "string")
                        message.optionalUint64 = parseInt(object.optionalUint64, 10);
                    else if (typeof object.optionalUint64 === "number")
                        message.optionalUint64 = object.optionalUint64;
                    else if (typeof object.optionalUint64 === "object")
                        message.optionalUint64 = new $util.LongBits(object.optionalUint64.low >>> 0, object.optionalUint64.high >>> 0).toNumber(true);
                if (object.optionalSint32 != null)
                    message.optionalSint32 = object.optionalSint32 | 0;
                if (object.optionalSint64 != null)
                    if ($util.Long)
                        (message.optionalSint64 = $util.Long.fromValue(object.optionalSint64)).unsigned = false;
                    else if (typeof object.optionalSint64 === "string")
                        message.optionalSint64 = parseInt(object.optionalSint64, 10);
                    else if (typeof object.optionalSint64 === "number")
                        message.optionalSint64 = object.optionalSint64;
                    else if (typeof object.optionalSint64 === "object")
                        message.optionalSint64 = new $util.LongBits(object.optionalSint64.low >>> 0, object.optionalSint64.high >>> 0).toNumber();
                if (object.optionalFixed32 != null)
                    message.optionalFixed32 = object.optionalFixed32 >>> 0;
                if (object.optionalFixed64 != null)
                    if ($util.Long)
                        (message.optionalFixed64 = $util.Long.fromValue(object.optionalFixed64)).unsigned = false;
                    else if (typeof object.optionalFixed64 === "string")
                        message.optionalFixed64 = parseInt(object.optionalFixed64, 10);
                    else if (typeof object.optionalFixed64 === "number")
                        message.optionalFixed64 = object.optionalFixed64;
                    else if (typeof object.optionalFixed64 === "object")
                        message.optionalFixed64 = new $util.LongBits(object.optionalFixed64.low >>> 0, object.optionalFixed64.high >>> 0).toNumber();
                if (object.optionalSfixed32 != null)
                    message.optionalSfixed32 = object.optionalSfixed32 | 0;
                if (object.optionalSfixed64 != null)
                    if ($util.Long)
                        (message.optionalSfixed64 = $util.Long.fromValue(object.optionalSfixed64)).unsigned = false;
                    else if (typeof object.optionalSfixed64 === "string")
                        message.optionalSfixed64 = parseInt(object.optionalSfixed64, 10);
                    else if (typeof object.optionalSfixed64 === "number")
                        message.optionalSfixed64 = object.optionalSfixed64;
                    else if (typeof object.optionalSfixed64 === "object")
                        message.optionalSfixed64 = new $util.LongBits(object.optionalSfixed64.low >>> 0, object.optionalSfixed64.high >>> 0).toNumber();
                if (object.optionalFloat != null)
                    message.optionalFloat = Number(object.optionalFloat);
                if (object.optionalDouble != null)
                    message.optionalDouble = Number(object.optionalDouble);
                if (object.optionalBool != null)
                    message.optionalBool = Boolean(object.optionalBool);
                if (object.optionalString != null)
                    message.optionalString = String(object.optionalString);
                if (object.optionalBytes != null)
                    if (typeof object.optionalBytes === "string")
                        $util.base64.decode(object.optionalBytes, message.optionalBytes = $util.newBuffer($util.base64.length(object.optionalBytes)), 0);
                    else if (object.optionalBytes.length >= 0)
                        message.optionalBytes = object.optionalBytes;
                if (object.optionalNestedMessage != null) {
                    if (typeof object.optionalNestedMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.optionalNestedMessage: object expected");
                    message.optionalNestedMessage = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.fromObject(object.optionalNestedMessage);
                }
                if (object.optionalForeignMessage != null) {
                    if (typeof object.optionalForeignMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.optionalForeignMessage: object expected");
                    message.optionalForeignMessage = $root.protobuf_test_messages.proto2.ForeignMessageProto2.fromObject(object.optionalForeignMessage);
                }
                switch (object.optionalNestedEnum) {
                default:
                    if (typeof object.optionalNestedEnum === "number") {
                        message.optionalNestedEnum = object.optionalNestedEnum;
                        break;
                    }
                    break;
                case "FOO":
                case 0:
                    message.optionalNestedEnum = 0;
                    break;
                case "BAR":
                case 1:
                    message.optionalNestedEnum = 1;
                    break;
                case "BAZ":
                case 2:
                    message.optionalNestedEnum = 2;
                    break;
                case "NEG":
                case -1:
                    message.optionalNestedEnum = -1;
                    break;
                }
                switch (object.optionalForeignEnum) {
                default:
                    if (typeof object.optionalForeignEnum === "number") {
                        message.optionalForeignEnum = object.optionalForeignEnum;
                        break;
                    }
                    break;
                case "FOREIGN_FOO":
                case 0:
                    message.optionalForeignEnum = 0;
                    break;
                case "FOREIGN_BAR":
                case 1:
                    message.optionalForeignEnum = 1;
                    break;
                case "FOREIGN_BAZ":
                case 2:
                    message.optionalForeignEnum = 2;
                    break;
                }
                if (object.optionalStringPiece != null)
                    message.optionalStringPiece = String(object.optionalStringPiece);
                if (object.optionalCord != null)
                    message.optionalCord = String(object.optionalCord);
                if (object.recursiveMessage != null) {
                    if (typeof object.recursiveMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.recursiveMessage: object expected");
                    message.recursiveMessage = $root.protobuf_test_messages.proto2.TestAllTypesProto2.fromObject(object.recursiveMessage);
                }
                if (object.repeatedInt32) {
                    if (!Array.isArray(object.repeatedInt32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedInt32: array expected");
                    message.repeatedInt32 = [];
                    for (let i = 0; i < object.repeatedInt32.length; ++i)
                        message.repeatedInt32[i] = object.repeatedInt32[i] | 0;
                }
                if (object.repeatedInt64) {
                    if (!Array.isArray(object.repeatedInt64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedInt64: array expected");
                    message.repeatedInt64 = [];
                    for (let i = 0; i < object.repeatedInt64.length; ++i)
                        if ($util.Long)
                            (message.repeatedInt64[i] = $util.Long.fromValue(object.repeatedInt64[i])).unsigned = false;
                        else if (typeof object.repeatedInt64[i] === "string")
                            message.repeatedInt64[i] = parseInt(object.repeatedInt64[i], 10);
                        else if (typeof object.repeatedInt64[i] === "number")
                            message.repeatedInt64[i] = object.repeatedInt64[i];
                        else if (typeof object.repeatedInt64[i] === "object")
                            message.repeatedInt64[i] = new $util.LongBits(object.repeatedInt64[i].low >>> 0, object.repeatedInt64[i].high >>> 0).toNumber();
                }
                if (object.repeatedUint32) {
                    if (!Array.isArray(object.repeatedUint32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedUint32: array expected");
                    message.repeatedUint32 = [];
                    for (let i = 0; i < object.repeatedUint32.length; ++i)
                        message.repeatedUint32[i] = object.repeatedUint32[i] >>> 0;
                }
                if (object.repeatedUint64) {
                    if (!Array.isArray(object.repeatedUint64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedUint64: array expected");
                    message.repeatedUint64 = [];
                    for (let i = 0; i < object.repeatedUint64.length; ++i)
                        if ($util.Long)
                            (message.repeatedUint64[i] = $util.Long.fromValue(object.repeatedUint64[i])).unsigned = true;
                        else if (typeof object.repeatedUint64[i] === "string")
                            message.repeatedUint64[i] = parseInt(object.repeatedUint64[i], 10);
                        else if (typeof object.repeatedUint64[i] === "number")
                            message.repeatedUint64[i] = object.repeatedUint64[i];
                        else if (typeof object.repeatedUint64[i] === "object")
                            message.repeatedUint64[i] = new $util.LongBits(object.repeatedUint64[i].low >>> 0, object.repeatedUint64[i].high >>> 0).toNumber(true);
                }
                if (object.repeatedSint32) {
                    if (!Array.isArray(object.repeatedSint32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedSint32: array expected");
                    message.repeatedSint32 = [];
                    for (let i = 0; i < object.repeatedSint32.length; ++i)
                        message.repeatedSint32[i] = object.repeatedSint32[i] | 0;
                }
                if (object.repeatedSint64) {
                    if (!Array.isArray(object.repeatedSint64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedSint64: array expected");
                    message.repeatedSint64 = [];
                    for (let i = 0; i < object.repeatedSint64.length; ++i)
                        if ($util.Long)
                            (message.repeatedSint64[i] = $util.Long.fromValue(object.repeatedSint64[i])).unsigned = false;
                        else if (typeof object.repeatedSint64[i] === "string")
                            message.repeatedSint64[i] = parseInt(object.repeatedSint64[i], 10);
                        else if (typeof object.repeatedSint64[i] === "number")
                            message.repeatedSint64[i] = object.repeatedSint64[i];
                        else if (typeof object.repeatedSint64[i] === "object")
                            message.repeatedSint64[i] = new $util.LongBits(object.repeatedSint64[i].low >>> 0, object.repeatedSint64[i].high >>> 0).toNumber();
                }
                if (object.repeatedFixed32) {
                    if (!Array.isArray(object.repeatedFixed32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedFixed32: array expected");
                    message.repeatedFixed32 = [];
                    for (let i = 0; i < object.repeatedFixed32.length; ++i)
                        message.repeatedFixed32[i] = object.repeatedFixed32[i] >>> 0;
                }
                if (object.repeatedFixed64) {
                    if (!Array.isArray(object.repeatedFixed64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedFixed64: array expected");
                    message.repeatedFixed64 = [];
                    for (let i = 0; i < object.repeatedFixed64.length; ++i)
                        if ($util.Long)
                            (message.repeatedFixed64[i] = $util.Long.fromValue(object.repeatedFixed64[i])).unsigned = false;
                        else if (typeof object.repeatedFixed64[i] === "string")
                            message.repeatedFixed64[i] = parseInt(object.repeatedFixed64[i], 10);
                        else if (typeof object.repeatedFixed64[i] === "number")
                            message.repeatedFixed64[i] = object.repeatedFixed64[i];
                        else if (typeof object.repeatedFixed64[i] === "object")
                            message.repeatedFixed64[i] = new $util.LongBits(object.repeatedFixed64[i].low >>> 0, object.repeatedFixed64[i].high >>> 0).toNumber();
                }
                if (object.repeatedSfixed32) {
                    if (!Array.isArray(object.repeatedSfixed32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedSfixed32: array expected");
                    message.repeatedSfixed32 = [];
                    for (let i = 0; i < object.repeatedSfixed32.length; ++i)
                        message.repeatedSfixed32[i] = object.repeatedSfixed32[i] | 0;
                }
                if (object.repeatedSfixed64) {
                    if (!Array.isArray(object.repeatedSfixed64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedSfixed64: array expected");
                    message.repeatedSfixed64 = [];
                    for (let i = 0; i < object.repeatedSfixed64.length; ++i)
                        if ($util.Long)
                            (message.repeatedSfixed64[i] = $util.Long.fromValue(object.repeatedSfixed64[i])).unsigned = false;
                        else if (typeof object.repeatedSfixed64[i] === "string")
                            message.repeatedSfixed64[i] = parseInt(object.repeatedSfixed64[i], 10);
                        else if (typeof object.repeatedSfixed64[i] === "number")
                            message.repeatedSfixed64[i] = object.repeatedSfixed64[i];
                        else if (typeof object.repeatedSfixed64[i] === "object")
                            message.repeatedSfixed64[i] = new $util.LongBits(object.repeatedSfixed64[i].low >>> 0, object.repeatedSfixed64[i].high >>> 0).toNumber();
                }
                if (object.repeatedFloat) {
                    if (!Array.isArray(object.repeatedFloat))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedFloat: array expected");
                    message.repeatedFloat = [];
                    for (let i = 0; i < object.repeatedFloat.length; ++i)
                        message.repeatedFloat[i] = Number(object.repeatedFloat[i]);
                }
                if (object.repeatedDouble) {
                    if (!Array.isArray(object.repeatedDouble))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedDouble: array expected");
                    message.repeatedDouble = [];
                    for (let i = 0; i < object.repeatedDouble.length; ++i)
                        message.repeatedDouble[i] = Number(object.repeatedDouble[i]);
                }
                if (object.repeatedBool) {
                    if (!Array.isArray(object.repeatedBool))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedBool: array expected");
                    message.repeatedBool = [];
                    for (let i = 0; i < object.repeatedBool.length; ++i)
                        message.repeatedBool[i] = Boolean(object.repeatedBool[i]);
                }
                if (object.repeatedString) {
                    if (!Array.isArray(object.repeatedString))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedString: array expected");
                    message.repeatedString = [];
                    for (let i = 0; i < object.repeatedString.length; ++i)
                        message.repeatedString[i] = String(object.repeatedString[i]);
                }
                if (object.repeatedBytes) {
                    if (!Array.isArray(object.repeatedBytes))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedBytes: array expected");
                    message.repeatedBytes = [];
                    for (let i = 0; i < object.repeatedBytes.length; ++i)
                        if (typeof object.repeatedBytes[i] === "string")
                            $util.base64.decode(object.repeatedBytes[i], message.repeatedBytes[i] = $util.newBuffer($util.base64.length(object.repeatedBytes[i])), 0);
                        else if (object.repeatedBytes[i].length >= 0)
                            message.repeatedBytes[i] = object.repeatedBytes[i];
                }
                if (object.repeatedNestedMessage) {
                    if (!Array.isArray(object.repeatedNestedMessage))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedNestedMessage: array expected");
                    message.repeatedNestedMessage = [];
                    for (let i = 0; i < object.repeatedNestedMessage.length; ++i) {
                        if (typeof object.repeatedNestedMessage[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedNestedMessage: object expected");
                        message.repeatedNestedMessage[i] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.fromObject(object.repeatedNestedMessage[i]);
                    }
                }
                if (object.repeatedForeignMessage) {
                    if (!Array.isArray(object.repeatedForeignMessage))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedForeignMessage: array expected");
                    message.repeatedForeignMessage = [];
                    for (let i = 0; i < object.repeatedForeignMessage.length; ++i) {
                        if (typeof object.repeatedForeignMessage[i] !== "object")
                            throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedForeignMessage: object expected");
                        message.repeatedForeignMessage[i] = $root.protobuf_test_messages.proto2.ForeignMessageProto2.fromObject(object.repeatedForeignMessage[i]);
                    }
                }
                if (object.repeatedNestedEnum) {
                    if (!Array.isArray(object.repeatedNestedEnum))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedNestedEnum: array expected");
                    message.repeatedNestedEnum = [];
                    for (let i = 0; i < object.repeatedNestedEnum.length; ++i)
                        switch (object.repeatedNestedEnum[i]) {
                        default:
                            if (typeof object.repeatedNestedEnum[i] === "number") {
                                message.repeatedNestedEnum[i] = object.repeatedNestedEnum[i];
                                break;
                            }
                        case "FOO":
                        case 0:
                            message.repeatedNestedEnum[i] = 0;
                            break;
                        case "BAR":
                        case 1:
                            message.repeatedNestedEnum[i] = 1;
                            break;
                        case "BAZ":
                        case 2:
                            message.repeatedNestedEnum[i] = 2;
                            break;
                        case "NEG":
                        case -1:
                            message.repeatedNestedEnum[i] = -1;
                            break;
                        }
                }
                if (object.repeatedForeignEnum) {
                    if (!Array.isArray(object.repeatedForeignEnum))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedForeignEnum: array expected");
                    message.repeatedForeignEnum = [];
                    for (let i = 0; i < object.repeatedForeignEnum.length; ++i)
                        switch (object.repeatedForeignEnum[i]) {
                        default:
                            if (typeof object.repeatedForeignEnum[i] === "number") {
                                message.repeatedForeignEnum[i] = object.repeatedForeignEnum[i];
                                break;
                            }
                        case "FOREIGN_FOO":
                        case 0:
                            message.repeatedForeignEnum[i] = 0;
                            break;
                        case "FOREIGN_BAR":
                        case 1:
                            message.repeatedForeignEnum[i] = 1;
                            break;
                        case "FOREIGN_BAZ":
                        case 2:
                            message.repeatedForeignEnum[i] = 2;
                            break;
                        }
                }
                if (object.repeatedStringPiece) {
                    if (!Array.isArray(object.repeatedStringPiece))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedStringPiece: array expected");
                    message.repeatedStringPiece = [];
                    for (let i = 0; i < object.repeatedStringPiece.length; ++i)
                        message.repeatedStringPiece[i] = String(object.repeatedStringPiece[i]);
                }
                if (object.repeatedCord) {
                    if (!Array.isArray(object.repeatedCord))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.repeatedCord: array expected");
                    message.repeatedCord = [];
                    for (let i = 0; i < object.repeatedCord.length; ++i)
                        message.repeatedCord[i] = String(object.repeatedCord[i]);
                }
                if (object.packedInt32) {
                    if (!Array.isArray(object.packedInt32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedInt32: array expected");
                    message.packedInt32 = [];
                    for (let i = 0; i < object.packedInt32.length; ++i)
                        message.packedInt32[i] = object.packedInt32[i] | 0;
                }
                if (object.packedInt64) {
                    if (!Array.isArray(object.packedInt64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedInt64: array expected");
                    message.packedInt64 = [];
                    for (let i = 0; i < object.packedInt64.length; ++i)
                        if ($util.Long)
                            (message.packedInt64[i] = $util.Long.fromValue(object.packedInt64[i])).unsigned = false;
                        else if (typeof object.packedInt64[i] === "string")
                            message.packedInt64[i] = parseInt(object.packedInt64[i], 10);
                        else if (typeof object.packedInt64[i] === "number")
                            message.packedInt64[i] = object.packedInt64[i];
                        else if (typeof object.packedInt64[i] === "object")
                            message.packedInt64[i] = new $util.LongBits(object.packedInt64[i].low >>> 0, object.packedInt64[i].high >>> 0).toNumber();
                }
                if (object.packedUint32) {
                    if (!Array.isArray(object.packedUint32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedUint32: array expected");
                    message.packedUint32 = [];
                    for (let i = 0; i < object.packedUint32.length; ++i)
                        message.packedUint32[i] = object.packedUint32[i] >>> 0;
                }
                if (object.packedUint64) {
                    if (!Array.isArray(object.packedUint64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedUint64: array expected");
                    message.packedUint64 = [];
                    for (let i = 0; i < object.packedUint64.length; ++i)
                        if ($util.Long)
                            (message.packedUint64[i] = $util.Long.fromValue(object.packedUint64[i])).unsigned = true;
                        else if (typeof object.packedUint64[i] === "string")
                            message.packedUint64[i] = parseInt(object.packedUint64[i], 10);
                        else if (typeof object.packedUint64[i] === "number")
                            message.packedUint64[i] = object.packedUint64[i];
                        else if (typeof object.packedUint64[i] === "object")
                            message.packedUint64[i] = new $util.LongBits(object.packedUint64[i].low >>> 0, object.packedUint64[i].high >>> 0).toNumber(true);
                }
                if (object.packedSint32) {
                    if (!Array.isArray(object.packedSint32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedSint32: array expected");
                    message.packedSint32 = [];
                    for (let i = 0; i < object.packedSint32.length; ++i)
                        message.packedSint32[i] = object.packedSint32[i] | 0;
                }
                if (object.packedSint64) {
                    if (!Array.isArray(object.packedSint64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedSint64: array expected");
                    message.packedSint64 = [];
                    for (let i = 0; i < object.packedSint64.length; ++i)
                        if ($util.Long)
                            (message.packedSint64[i] = $util.Long.fromValue(object.packedSint64[i])).unsigned = false;
                        else if (typeof object.packedSint64[i] === "string")
                            message.packedSint64[i] = parseInt(object.packedSint64[i], 10);
                        else if (typeof object.packedSint64[i] === "number")
                            message.packedSint64[i] = object.packedSint64[i];
                        else if (typeof object.packedSint64[i] === "object")
                            message.packedSint64[i] = new $util.LongBits(object.packedSint64[i].low >>> 0, object.packedSint64[i].high >>> 0).toNumber();
                }
                if (object.packedFixed32) {
                    if (!Array.isArray(object.packedFixed32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedFixed32: array expected");
                    message.packedFixed32 = [];
                    for (let i = 0; i < object.packedFixed32.length; ++i)
                        message.packedFixed32[i] = object.packedFixed32[i] >>> 0;
                }
                if (object.packedFixed64) {
                    if (!Array.isArray(object.packedFixed64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedFixed64: array expected");
                    message.packedFixed64 = [];
                    for (let i = 0; i < object.packedFixed64.length; ++i)
                        if ($util.Long)
                            (message.packedFixed64[i] = $util.Long.fromValue(object.packedFixed64[i])).unsigned = false;
                        else if (typeof object.packedFixed64[i] === "string")
                            message.packedFixed64[i] = parseInt(object.packedFixed64[i], 10);
                        else if (typeof object.packedFixed64[i] === "number")
                            message.packedFixed64[i] = object.packedFixed64[i];
                        else if (typeof object.packedFixed64[i] === "object")
                            message.packedFixed64[i] = new $util.LongBits(object.packedFixed64[i].low >>> 0, object.packedFixed64[i].high >>> 0).toNumber();
                }
                if (object.packedSfixed32) {
                    if (!Array.isArray(object.packedSfixed32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedSfixed32: array expected");
                    message.packedSfixed32 = [];
                    for (let i = 0; i < object.packedSfixed32.length; ++i)
                        message.packedSfixed32[i] = object.packedSfixed32[i] | 0;
                }
                if (object.packedSfixed64) {
                    if (!Array.isArray(object.packedSfixed64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedSfixed64: array expected");
                    message.packedSfixed64 = [];
                    for (let i = 0; i < object.packedSfixed64.length; ++i)
                        if ($util.Long)
                            (message.packedSfixed64[i] = $util.Long.fromValue(object.packedSfixed64[i])).unsigned = false;
                        else if (typeof object.packedSfixed64[i] === "string")
                            message.packedSfixed64[i] = parseInt(object.packedSfixed64[i], 10);
                        else if (typeof object.packedSfixed64[i] === "number")
                            message.packedSfixed64[i] = object.packedSfixed64[i];
                        else if (typeof object.packedSfixed64[i] === "object")
                            message.packedSfixed64[i] = new $util.LongBits(object.packedSfixed64[i].low >>> 0, object.packedSfixed64[i].high >>> 0).toNumber();
                }
                if (object.packedFloat) {
                    if (!Array.isArray(object.packedFloat))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedFloat: array expected");
                    message.packedFloat = [];
                    for (let i = 0; i < object.packedFloat.length; ++i)
                        message.packedFloat[i] = Number(object.packedFloat[i]);
                }
                if (object.packedDouble) {
                    if (!Array.isArray(object.packedDouble))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedDouble: array expected");
                    message.packedDouble = [];
                    for (let i = 0; i < object.packedDouble.length; ++i)
                        message.packedDouble[i] = Number(object.packedDouble[i]);
                }
                if (object.packedBool) {
                    if (!Array.isArray(object.packedBool))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedBool: array expected");
                    message.packedBool = [];
                    for (let i = 0; i < object.packedBool.length; ++i)
                        message.packedBool[i] = Boolean(object.packedBool[i]);
                }
                if (object.packedNestedEnum) {
                    if (!Array.isArray(object.packedNestedEnum))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.packedNestedEnum: array expected");
                    message.packedNestedEnum = [];
                    for (let i = 0; i < object.packedNestedEnum.length; ++i)
                        switch (object.packedNestedEnum[i]) {
                        default:
                            if (typeof object.packedNestedEnum[i] === "number") {
                                message.packedNestedEnum[i] = object.packedNestedEnum[i];
                                break;
                            }
                        case "FOO":
                        case 0:
                            message.packedNestedEnum[i] = 0;
                            break;
                        case "BAR":
                        case 1:
                            message.packedNestedEnum[i] = 1;
                            break;
                        case "BAZ":
                        case 2:
                            message.packedNestedEnum[i] = 2;
                            break;
                        case "NEG":
                        case -1:
                            message.packedNestedEnum[i] = -1;
                            break;
                        }
                }
                if (object.unpackedInt32) {
                    if (!Array.isArray(object.unpackedInt32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedInt32: array expected");
                    message.unpackedInt32 = [];
                    for (let i = 0; i < object.unpackedInt32.length; ++i)
                        message.unpackedInt32[i] = object.unpackedInt32[i] | 0;
                }
                if (object.unpackedInt64) {
                    if (!Array.isArray(object.unpackedInt64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedInt64: array expected");
                    message.unpackedInt64 = [];
                    for (let i = 0; i < object.unpackedInt64.length; ++i)
                        if ($util.Long)
                            (message.unpackedInt64[i] = $util.Long.fromValue(object.unpackedInt64[i])).unsigned = false;
                        else if (typeof object.unpackedInt64[i] === "string")
                            message.unpackedInt64[i] = parseInt(object.unpackedInt64[i], 10);
                        else if (typeof object.unpackedInt64[i] === "number")
                            message.unpackedInt64[i] = object.unpackedInt64[i];
                        else if (typeof object.unpackedInt64[i] === "object")
                            message.unpackedInt64[i] = new $util.LongBits(object.unpackedInt64[i].low >>> 0, object.unpackedInt64[i].high >>> 0).toNumber();
                }
                if (object.unpackedUint32) {
                    if (!Array.isArray(object.unpackedUint32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedUint32: array expected");
                    message.unpackedUint32 = [];
                    for (let i = 0; i < object.unpackedUint32.length; ++i)
                        message.unpackedUint32[i] = object.unpackedUint32[i] >>> 0;
                }
                if (object.unpackedUint64) {
                    if (!Array.isArray(object.unpackedUint64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedUint64: array expected");
                    message.unpackedUint64 = [];
                    for (let i = 0; i < object.unpackedUint64.length; ++i)
                        if ($util.Long)
                            (message.unpackedUint64[i] = $util.Long.fromValue(object.unpackedUint64[i])).unsigned = true;
                        else if (typeof object.unpackedUint64[i] === "string")
                            message.unpackedUint64[i] = parseInt(object.unpackedUint64[i], 10);
                        else if (typeof object.unpackedUint64[i] === "number")
                            message.unpackedUint64[i] = object.unpackedUint64[i];
                        else if (typeof object.unpackedUint64[i] === "object")
                            message.unpackedUint64[i] = new $util.LongBits(object.unpackedUint64[i].low >>> 0, object.unpackedUint64[i].high >>> 0).toNumber(true);
                }
                if (object.unpackedSint32) {
                    if (!Array.isArray(object.unpackedSint32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedSint32: array expected");
                    message.unpackedSint32 = [];
                    for (let i = 0; i < object.unpackedSint32.length; ++i)
                        message.unpackedSint32[i] = object.unpackedSint32[i] | 0;
                }
                if (object.unpackedSint64) {
                    if (!Array.isArray(object.unpackedSint64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedSint64: array expected");
                    message.unpackedSint64 = [];
                    for (let i = 0; i < object.unpackedSint64.length; ++i)
                        if ($util.Long)
                            (message.unpackedSint64[i] = $util.Long.fromValue(object.unpackedSint64[i])).unsigned = false;
                        else if (typeof object.unpackedSint64[i] === "string")
                            message.unpackedSint64[i] = parseInt(object.unpackedSint64[i], 10);
                        else if (typeof object.unpackedSint64[i] === "number")
                            message.unpackedSint64[i] = object.unpackedSint64[i];
                        else if (typeof object.unpackedSint64[i] === "object")
                            message.unpackedSint64[i] = new $util.LongBits(object.unpackedSint64[i].low >>> 0, object.unpackedSint64[i].high >>> 0).toNumber();
                }
                if (object.unpackedFixed32) {
                    if (!Array.isArray(object.unpackedFixed32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedFixed32: array expected");
                    message.unpackedFixed32 = [];
                    for (let i = 0; i < object.unpackedFixed32.length; ++i)
                        message.unpackedFixed32[i] = object.unpackedFixed32[i] >>> 0;
                }
                if (object.unpackedFixed64) {
                    if (!Array.isArray(object.unpackedFixed64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedFixed64: array expected");
                    message.unpackedFixed64 = [];
                    for (let i = 0; i < object.unpackedFixed64.length; ++i)
                        if ($util.Long)
                            (message.unpackedFixed64[i] = $util.Long.fromValue(object.unpackedFixed64[i])).unsigned = false;
                        else if (typeof object.unpackedFixed64[i] === "string")
                            message.unpackedFixed64[i] = parseInt(object.unpackedFixed64[i], 10);
                        else if (typeof object.unpackedFixed64[i] === "number")
                            message.unpackedFixed64[i] = object.unpackedFixed64[i];
                        else if (typeof object.unpackedFixed64[i] === "object")
                            message.unpackedFixed64[i] = new $util.LongBits(object.unpackedFixed64[i].low >>> 0, object.unpackedFixed64[i].high >>> 0).toNumber();
                }
                if (object.unpackedSfixed32) {
                    if (!Array.isArray(object.unpackedSfixed32))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedSfixed32: array expected");
                    message.unpackedSfixed32 = [];
                    for (let i = 0; i < object.unpackedSfixed32.length; ++i)
                        message.unpackedSfixed32[i] = object.unpackedSfixed32[i] | 0;
                }
                if (object.unpackedSfixed64) {
                    if (!Array.isArray(object.unpackedSfixed64))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedSfixed64: array expected");
                    message.unpackedSfixed64 = [];
                    for (let i = 0; i < object.unpackedSfixed64.length; ++i)
                        if ($util.Long)
                            (message.unpackedSfixed64[i] = $util.Long.fromValue(object.unpackedSfixed64[i])).unsigned = false;
                        else if (typeof object.unpackedSfixed64[i] === "string")
                            message.unpackedSfixed64[i] = parseInt(object.unpackedSfixed64[i], 10);
                        else if (typeof object.unpackedSfixed64[i] === "number")
                            message.unpackedSfixed64[i] = object.unpackedSfixed64[i];
                        else if (typeof object.unpackedSfixed64[i] === "object")
                            message.unpackedSfixed64[i] = new $util.LongBits(object.unpackedSfixed64[i].low >>> 0, object.unpackedSfixed64[i].high >>> 0).toNumber();
                }
                if (object.unpackedFloat) {
                    if (!Array.isArray(object.unpackedFloat))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedFloat: array expected");
                    message.unpackedFloat = [];
                    for (let i = 0; i < object.unpackedFloat.length; ++i)
                        message.unpackedFloat[i] = Number(object.unpackedFloat[i]);
                }
                if (object.unpackedDouble) {
                    if (!Array.isArray(object.unpackedDouble))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedDouble: array expected");
                    message.unpackedDouble = [];
                    for (let i = 0; i < object.unpackedDouble.length; ++i)
                        message.unpackedDouble[i] = Number(object.unpackedDouble[i]);
                }
                if (object.unpackedBool) {
                    if (!Array.isArray(object.unpackedBool))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedBool: array expected");
                    message.unpackedBool = [];
                    for (let i = 0; i < object.unpackedBool.length; ++i)
                        message.unpackedBool[i] = Boolean(object.unpackedBool[i]);
                }
                if (object.unpackedNestedEnum) {
                    if (!Array.isArray(object.unpackedNestedEnum))
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.unpackedNestedEnum: array expected");
                    message.unpackedNestedEnum = [];
                    for (let i = 0; i < object.unpackedNestedEnum.length; ++i)
                        switch (object.unpackedNestedEnum[i]) {
                        default:
                            if (typeof object.unpackedNestedEnum[i] === "number") {
                                message.unpackedNestedEnum[i] = object.unpackedNestedEnum[i];
                                break;
                            }
                        case "FOO":
                        case 0:
                            message.unpackedNestedEnum[i] = 0;
                            break;
                        case "BAR":
                        case 1:
                            message.unpackedNestedEnum[i] = 1;
                            break;
                        case "BAZ":
                        case 2:
                            message.unpackedNestedEnum[i] = 2;
                            break;
                        case "NEG":
                        case -1:
                            message.unpackedNestedEnum[i] = -1;
                            break;
                        }
                }
                if (object.mapInt32Int32) {
                    if (typeof object.mapInt32Int32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapInt32Int32: object expected");
                    message.mapInt32Int32 = {};
                    for (let keys = Object.keys(object.mapInt32Int32), i = 0; i < keys.length; ++i)
                        message.mapInt32Int32[keys[i]] = object.mapInt32Int32[keys[i]] | 0;
                }
                if (object.mapInt64Int64) {
                    if (typeof object.mapInt64Int64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapInt64Int64: object expected");
                    message.mapInt64Int64 = {};
                    for (let keys = Object.keys(object.mapInt64Int64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapInt64Int64[keys[i]] = $util.Long.fromValue(object.mapInt64Int64[keys[i]])).unsigned = false;
                        else if (typeof object.mapInt64Int64[keys[i]] === "string")
                            message.mapInt64Int64[keys[i]] = parseInt(object.mapInt64Int64[keys[i]], 10);
                        else if (typeof object.mapInt64Int64[keys[i]] === "number")
                            message.mapInt64Int64[keys[i]] = object.mapInt64Int64[keys[i]];
                        else if (typeof object.mapInt64Int64[keys[i]] === "object")
                            message.mapInt64Int64[keys[i]] = new $util.LongBits(object.mapInt64Int64[keys[i]].low >>> 0, object.mapInt64Int64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapUint32Uint32) {
                    if (typeof object.mapUint32Uint32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapUint32Uint32: object expected");
                    message.mapUint32Uint32 = {};
                    for (let keys = Object.keys(object.mapUint32Uint32), i = 0; i < keys.length; ++i)
                        message.mapUint32Uint32[keys[i]] = object.mapUint32Uint32[keys[i]] >>> 0;
                }
                if (object.mapUint64Uint64) {
                    if (typeof object.mapUint64Uint64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapUint64Uint64: object expected");
                    message.mapUint64Uint64 = {};
                    for (let keys = Object.keys(object.mapUint64Uint64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapUint64Uint64[keys[i]] = $util.Long.fromValue(object.mapUint64Uint64[keys[i]])).unsigned = true;
                        else if (typeof object.mapUint64Uint64[keys[i]] === "string")
                            message.mapUint64Uint64[keys[i]] = parseInt(object.mapUint64Uint64[keys[i]], 10);
                        else if (typeof object.mapUint64Uint64[keys[i]] === "number")
                            message.mapUint64Uint64[keys[i]] = object.mapUint64Uint64[keys[i]];
                        else if (typeof object.mapUint64Uint64[keys[i]] === "object")
                            message.mapUint64Uint64[keys[i]] = new $util.LongBits(object.mapUint64Uint64[keys[i]].low >>> 0, object.mapUint64Uint64[keys[i]].high >>> 0).toNumber(true);
                }
                if (object.mapSint32Sint32) {
                    if (typeof object.mapSint32Sint32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapSint32Sint32: object expected");
                    message.mapSint32Sint32 = {};
                    for (let keys = Object.keys(object.mapSint32Sint32), i = 0; i < keys.length; ++i)
                        message.mapSint32Sint32[keys[i]] = object.mapSint32Sint32[keys[i]] | 0;
                }
                if (object.mapSint64Sint64) {
                    if (typeof object.mapSint64Sint64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapSint64Sint64: object expected");
                    message.mapSint64Sint64 = {};
                    for (let keys = Object.keys(object.mapSint64Sint64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapSint64Sint64[keys[i]] = $util.Long.fromValue(object.mapSint64Sint64[keys[i]])).unsigned = false;
                        else if (typeof object.mapSint64Sint64[keys[i]] === "string")
                            message.mapSint64Sint64[keys[i]] = parseInt(object.mapSint64Sint64[keys[i]], 10);
                        else if (typeof object.mapSint64Sint64[keys[i]] === "number")
                            message.mapSint64Sint64[keys[i]] = object.mapSint64Sint64[keys[i]];
                        else if (typeof object.mapSint64Sint64[keys[i]] === "object")
                            message.mapSint64Sint64[keys[i]] = new $util.LongBits(object.mapSint64Sint64[keys[i]].low >>> 0, object.mapSint64Sint64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapFixed32Fixed32) {
                    if (typeof object.mapFixed32Fixed32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapFixed32Fixed32: object expected");
                    message.mapFixed32Fixed32 = {};
                    for (let keys = Object.keys(object.mapFixed32Fixed32), i = 0; i < keys.length; ++i)
                        message.mapFixed32Fixed32[keys[i]] = object.mapFixed32Fixed32[keys[i]] >>> 0;
                }
                if (object.mapFixed64Fixed64) {
                    if (typeof object.mapFixed64Fixed64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapFixed64Fixed64: object expected");
                    message.mapFixed64Fixed64 = {};
                    for (let keys = Object.keys(object.mapFixed64Fixed64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapFixed64Fixed64[keys[i]] = $util.Long.fromValue(object.mapFixed64Fixed64[keys[i]])).unsigned = false;
                        else if (typeof object.mapFixed64Fixed64[keys[i]] === "string")
                            message.mapFixed64Fixed64[keys[i]] = parseInt(object.mapFixed64Fixed64[keys[i]], 10);
                        else if (typeof object.mapFixed64Fixed64[keys[i]] === "number")
                            message.mapFixed64Fixed64[keys[i]] = object.mapFixed64Fixed64[keys[i]];
                        else if (typeof object.mapFixed64Fixed64[keys[i]] === "object")
                            message.mapFixed64Fixed64[keys[i]] = new $util.LongBits(object.mapFixed64Fixed64[keys[i]].low >>> 0, object.mapFixed64Fixed64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapSfixed32Sfixed32) {
                    if (typeof object.mapSfixed32Sfixed32 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapSfixed32Sfixed32: object expected");
                    message.mapSfixed32Sfixed32 = {};
                    for (let keys = Object.keys(object.mapSfixed32Sfixed32), i = 0; i < keys.length; ++i)
                        message.mapSfixed32Sfixed32[keys[i]] = object.mapSfixed32Sfixed32[keys[i]] | 0;
                }
                if (object.mapSfixed64Sfixed64) {
                    if (typeof object.mapSfixed64Sfixed64 !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapSfixed64Sfixed64: object expected");
                    message.mapSfixed64Sfixed64 = {};
                    for (let keys = Object.keys(object.mapSfixed64Sfixed64), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.mapSfixed64Sfixed64[keys[i]] = $util.Long.fromValue(object.mapSfixed64Sfixed64[keys[i]])).unsigned = false;
                        else if (typeof object.mapSfixed64Sfixed64[keys[i]] === "string")
                            message.mapSfixed64Sfixed64[keys[i]] = parseInt(object.mapSfixed64Sfixed64[keys[i]], 10);
                        else if (typeof object.mapSfixed64Sfixed64[keys[i]] === "number")
                            message.mapSfixed64Sfixed64[keys[i]] = object.mapSfixed64Sfixed64[keys[i]];
                        else if (typeof object.mapSfixed64Sfixed64[keys[i]] === "object")
                            message.mapSfixed64Sfixed64[keys[i]] = new $util.LongBits(object.mapSfixed64Sfixed64[keys[i]].low >>> 0, object.mapSfixed64Sfixed64[keys[i]].high >>> 0).toNumber();
                }
                if (object.mapInt32Float) {
                    if (typeof object.mapInt32Float !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapInt32Float: object expected");
                    message.mapInt32Float = {};
                    for (let keys = Object.keys(object.mapInt32Float), i = 0; i < keys.length; ++i)
                        message.mapInt32Float[keys[i]] = Number(object.mapInt32Float[keys[i]]);
                }
                if (object.mapInt32Double) {
                    if (typeof object.mapInt32Double !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapInt32Double: object expected");
                    message.mapInt32Double = {};
                    for (let keys = Object.keys(object.mapInt32Double), i = 0; i < keys.length; ++i)
                        message.mapInt32Double[keys[i]] = Number(object.mapInt32Double[keys[i]]);
                }
                if (object.mapBoolBool) {
                    if (typeof object.mapBoolBool !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapBoolBool: object expected");
                    message.mapBoolBool = {};
                    for (let keys = Object.keys(object.mapBoolBool), i = 0; i < keys.length; ++i)
                        message.mapBoolBool[keys[i]] = Boolean(object.mapBoolBool[keys[i]]);
                }
                if (object.mapStringString) {
                    if (typeof object.mapStringString !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapStringString: object expected");
                    message.mapStringString = {};
                    for (let keys = Object.keys(object.mapStringString), i = 0; i < keys.length; ++i)
                        message.mapStringString[keys[i]] = String(object.mapStringString[keys[i]]);
                }
                if (object.mapStringBytes) {
                    if (typeof object.mapStringBytes !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapStringBytes: object expected");
                    message.mapStringBytes = {};
                    for (let keys = Object.keys(object.mapStringBytes), i = 0; i < keys.length; ++i)
                        if (typeof object.mapStringBytes[keys[i]] === "string")
                            $util.base64.decode(object.mapStringBytes[keys[i]], message.mapStringBytes[keys[i]] = $util.newBuffer($util.base64.length(object.mapStringBytes[keys[i]])), 0);
                        else if (object.mapStringBytes[keys[i]].length >= 0)
                            message.mapStringBytes[keys[i]] = object.mapStringBytes[keys[i]];
                }
                if (object.mapStringNestedMessage) {
                    if (typeof object.mapStringNestedMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapStringNestedMessage: object expected");
                    message.mapStringNestedMessage = {};
                    for (let keys = Object.keys(object.mapStringNestedMessage), i = 0; i < keys.length; ++i) {
                        if (typeof object.mapStringNestedMessage[keys[i]] !== "object")
                            throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapStringNestedMessage: object expected");
                        message.mapStringNestedMessage[keys[i]] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.fromObject(object.mapStringNestedMessage[keys[i]]);
                    }
                }
                if (object.mapStringForeignMessage) {
                    if (typeof object.mapStringForeignMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapStringForeignMessage: object expected");
                    message.mapStringForeignMessage = {};
                    for (let keys = Object.keys(object.mapStringForeignMessage), i = 0; i < keys.length; ++i) {
                        if (typeof object.mapStringForeignMessage[keys[i]] !== "object")
                            throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapStringForeignMessage: object expected");
                        message.mapStringForeignMessage[keys[i]] = $root.protobuf_test_messages.proto2.ForeignMessageProto2.fromObject(object.mapStringForeignMessage[keys[i]]);
                    }
                }
                if (object.mapStringNestedEnum) {
                    if (typeof object.mapStringNestedEnum !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapStringNestedEnum: object expected");
                    message.mapStringNestedEnum = {};
                    for (let keys = Object.keys(object.mapStringNestedEnum), i = 0; i < keys.length; ++i)
                        switch (object.mapStringNestedEnum[keys[i]]) {
                        default:
                            if (typeof object.mapStringNestedEnum[keys[i]] === "number") {
                                message.mapStringNestedEnum[keys[i]] = object.mapStringNestedEnum[keys[i]];
                                break;
                            }
                            break;
                        case "FOO":
                        case 0:
                            message.mapStringNestedEnum[keys[i]] = 0;
                            break;
                        case "BAR":
                        case 1:
                            message.mapStringNestedEnum[keys[i]] = 1;
                            break;
                        case "BAZ":
                        case 2:
                            message.mapStringNestedEnum[keys[i]] = 2;
                            break;
                        case "NEG":
                        case -1:
                            message.mapStringNestedEnum[keys[i]] = -1;
                            break;
                        }
                }
                if (object.mapStringForeignEnum) {
                    if (typeof object.mapStringForeignEnum !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.mapStringForeignEnum: object expected");
                    message.mapStringForeignEnum = {};
                    for (let keys = Object.keys(object.mapStringForeignEnum), i = 0; i < keys.length; ++i)
                        switch (object.mapStringForeignEnum[keys[i]]) {
                        default:
                            if (typeof object.mapStringForeignEnum[keys[i]] === "number") {
                                message.mapStringForeignEnum[keys[i]] = object.mapStringForeignEnum[keys[i]];
                                break;
                            }
                            break;
                        case "FOREIGN_FOO":
                        case 0:
                            message.mapStringForeignEnum[keys[i]] = 0;
                            break;
                        case "FOREIGN_BAR":
                        case 1:
                            message.mapStringForeignEnum[keys[i]] = 1;
                            break;
                        case "FOREIGN_BAZ":
                        case 2:
                            message.mapStringForeignEnum[keys[i]] = 2;
                            break;
                        }
                }
                if (object.oneofUint32 != null)
                    message.oneofUint32 = object.oneofUint32 >>> 0;
                if (object.oneofNestedMessage != null) {
                    if (typeof object.oneofNestedMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.oneofNestedMessage: object expected");
                    message.oneofNestedMessage = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.fromObject(object.oneofNestedMessage);
                }
                if (object.oneofString != null)
                    message.oneofString = String(object.oneofString);
                if (object.oneofBytes != null)
                    if (typeof object.oneofBytes === "string")
                        $util.base64.decode(object.oneofBytes, message.oneofBytes = $util.newBuffer($util.base64.length(object.oneofBytes)), 0);
                    else if (object.oneofBytes.length >= 0)
                        message.oneofBytes = object.oneofBytes;
                if (object.oneofBool != null)
                    message.oneofBool = Boolean(object.oneofBool);
                if (object.oneofUint64 != null)
                    if ($util.Long)
                        (message.oneofUint64 = $util.Long.fromValue(object.oneofUint64)).unsigned = true;
                    else if (typeof object.oneofUint64 === "string")
                        message.oneofUint64 = parseInt(object.oneofUint64, 10);
                    else if (typeof object.oneofUint64 === "number")
                        message.oneofUint64 = object.oneofUint64;
                    else if (typeof object.oneofUint64 === "object")
                        message.oneofUint64 = new $util.LongBits(object.oneofUint64.low >>> 0, object.oneofUint64.high >>> 0).toNumber(true);
                if (object.oneofFloat != null)
                    message.oneofFloat = Number(object.oneofFloat);
                if (object.oneofDouble != null)
                    message.oneofDouble = Number(object.oneofDouble);
                switch (object.oneofEnum) {
                default:
                    if (typeof object.oneofEnum === "number") {
                        message.oneofEnum = object.oneofEnum;
                        break;
                    }
                    break;
                case "FOO":
                case 0:
                    message.oneofEnum = 0;
                    break;
                case "BAR":
                case 1:
                    message.oneofEnum = 1;
                    break;
                case "BAZ":
                case 2:
                    message.oneofEnum = 2;
                    break;
                case "NEG":
                case -1:
                    message.oneofEnum = -1;
                    break;
                }
                if (object.data != null) {
                    if (typeof object.data !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.data: object expected");
                    message.data = $root.protobuf_test_messages.proto2.TestAllTypesProto2.Data.fromObject(object.data);
                }
                if (object.defaultInt32 != null)
                    message.defaultInt32 = object.defaultInt32 | 0;
                if (object.defaultInt64 != null)
                    if ($util.Long)
                        (message.defaultInt64 = $util.Long.fromValue(object.defaultInt64)).unsigned = false;
                    else if (typeof object.defaultInt64 === "string")
                        message.defaultInt64 = parseInt(object.defaultInt64, 10);
                    else if (typeof object.defaultInt64 === "number")
                        message.defaultInt64 = object.defaultInt64;
                    else if (typeof object.defaultInt64 === "object")
                        message.defaultInt64 = new $util.LongBits(object.defaultInt64.low >>> 0, object.defaultInt64.high >>> 0).toNumber();
                if (object.defaultUint32 != null)
                    message.defaultUint32 = object.defaultUint32 >>> 0;
                if (object.defaultUint64 != null)
                    if ($util.Long)
                        (message.defaultUint64 = $util.Long.fromValue(object.defaultUint64)).unsigned = true;
                    else if (typeof object.defaultUint64 === "string")
                        message.defaultUint64 = parseInt(object.defaultUint64, 10);
                    else if (typeof object.defaultUint64 === "number")
                        message.defaultUint64 = object.defaultUint64;
                    else if (typeof object.defaultUint64 === "object")
                        message.defaultUint64 = new $util.LongBits(object.defaultUint64.low >>> 0, object.defaultUint64.high >>> 0).toNumber(true);
                if (object.defaultSint32 != null)
                    message.defaultSint32 = object.defaultSint32 | 0;
                if (object.defaultSint64 != null)
                    if ($util.Long)
                        (message.defaultSint64 = $util.Long.fromValue(object.defaultSint64)).unsigned = false;
                    else if (typeof object.defaultSint64 === "string")
                        message.defaultSint64 = parseInt(object.defaultSint64, 10);
                    else if (typeof object.defaultSint64 === "number")
                        message.defaultSint64 = object.defaultSint64;
                    else if (typeof object.defaultSint64 === "object")
                        message.defaultSint64 = new $util.LongBits(object.defaultSint64.low >>> 0, object.defaultSint64.high >>> 0).toNumber();
                if (object.defaultFixed32 != null)
                    message.defaultFixed32 = object.defaultFixed32 >>> 0;
                if (object.defaultFixed64 != null)
                    if ($util.Long)
                        (message.defaultFixed64 = $util.Long.fromValue(object.defaultFixed64)).unsigned = false;
                    else if (typeof object.defaultFixed64 === "string")
                        message.defaultFixed64 = parseInt(object.defaultFixed64, 10);
                    else if (typeof object.defaultFixed64 === "number")
                        message.defaultFixed64 = object.defaultFixed64;
                    else if (typeof object.defaultFixed64 === "object")
                        message.defaultFixed64 = new $util.LongBits(object.defaultFixed64.low >>> 0, object.defaultFixed64.high >>> 0).toNumber();
                if (object.defaultSfixed32 != null)
                    message.defaultSfixed32 = object.defaultSfixed32 | 0;
                if (object.defaultSfixed64 != null)
                    if ($util.Long)
                        (message.defaultSfixed64 = $util.Long.fromValue(object.defaultSfixed64)).unsigned = false;
                    else if (typeof object.defaultSfixed64 === "string")
                        message.defaultSfixed64 = parseInt(object.defaultSfixed64, 10);
                    else if (typeof object.defaultSfixed64 === "number")
                        message.defaultSfixed64 = object.defaultSfixed64;
                    else if (typeof object.defaultSfixed64 === "object")
                        message.defaultSfixed64 = new $util.LongBits(object.defaultSfixed64.low >>> 0, object.defaultSfixed64.high >>> 0).toNumber();
                if (object.defaultFloat != null)
                    message.defaultFloat = Number(object.defaultFloat);
                if (object.defaultDouble != null)
                    message.defaultDouble = Number(object.defaultDouble);
                if (object.defaultBool != null)
                    message.defaultBool = Boolean(object.defaultBool);
                if (object.defaultString != null)
                    message.defaultString = String(object.defaultString);
                if (object.defaultBytes != null)
                    if (typeof object.defaultBytes === "string")
                        $util.base64.decode(object.defaultBytes, message.defaultBytes = $util.newBuffer($util.base64.length(object.defaultBytes)), 0);
                    else if (object.defaultBytes.length >= 0)
                        message.defaultBytes = object.defaultBytes;
                if (object.fieldname1 != null)
                    message.fieldname1 = object.fieldname1 | 0;
                if (object.fieldName2 != null)
                    message.fieldName2 = object.fieldName2 | 0;
                if (object._fieldName3 != null)
                    message._fieldName3 = object._fieldName3 | 0;
                if (object.field_Name4_ != null)
                    message.field_Name4_ = object.field_Name4_ | 0;
                if (object.field0name5 != null)
                    message.field0name5 = object.field0name5 | 0;
                if (object.field_0Name6 != null)
                    message.field_0Name6 = object.field_0Name6 | 0;
                if (object.fieldName7 != null)
                    message.fieldName7 = object.fieldName7 | 0;
                if (object.FieldName8 != null)
                    message.FieldName8 = object.FieldName8 | 0;
                if (object.field_Name9 != null)
                    message.field_Name9 = object.field_Name9 | 0;
                if (object.Field_Name10 != null)
                    message.Field_Name10 = object.Field_Name10 | 0;
                if (object.FIELD_NAME11 != null)
                    message.FIELD_NAME11 = object.FIELD_NAME11 | 0;
                if (object.FIELDName12 != null)
                    message.FIELDName12 = object.FIELDName12 | 0;
                if (object._FieldName13 != null)
                    message._FieldName13 = object._FieldName13 | 0;
                if (object.__FieldName14 != null)
                    message.__FieldName14 = object.__FieldName14 | 0;
                if (object.field_Name15 != null)
                    message.field_Name15 = object.field_Name15 | 0;
                if (object.field__Name16 != null)
                    message.field__Name16 = object.field__Name16 | 0;
                if (object.fieldName17__ != null)
                    message.fieldName17__ = object.fieldName17__ | 0;
                if (object.FieldName18__ != null)
                    message.FieldName18__ = object.FieldName18__ | 0;
                if (object[".protobuf_test_messages.proto2.extensionInt32"] != null)
                    message[".protobuf_test_messages.proto2.extensionInt32"] = object[".protobuf_test_messages.proto2.extensionInt32"] | 0;
                return message;
            };

            /**
             * Creates a plain object from a TestAllTypesProto2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @static
             * @param {protobuf_test_messages.proto2.TestAllTypesProto2} message TestAllTypesProto2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TestAllTypesProto2.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.repeatedInt32 = [];
                    object.repeatedInt64 = [];
                    object.repeatedUint32 = [];
                    object.repeatedUint64 = [];
                    object.repeatedSint32 = [];
                    object.repeatedSint64 = [];
                    object.repeatedFixed32 = [];
                    object.repeatedFixed64 = [];
                    object.repeatedSfixed32 = [];
                    object.repeatedSfixed64 = [];
                    object.repeatedFloat = [];
                    object.repeatedDouble = [];
                    object.repeatedBool = [];
                    object.repeatedString = [];
                    object.repeatedBytes = [];
                    object.repeatedNestedMessage = [];
                    object.repeatedForeignMessage = [];
                    object.repeatedNestedEnum = [];
                    object.repeatedForeignEnum = [];
                    object.repeatedStringPiece = [];
                    object.repeatedCord = [];
                    object.packedInt32 = [];
                    object.packedInt64 = [];
                    object.packedUint32 = [];
                    object.packedUint64 = [];
                    object.packedSint32 = [];
                    object.packedSint64 = [];
                    object.packedFixed32 = [];
                    object.packedFixed64 = [];
                    object.packedSfixed32 = [];
                    object.packedSfixed64 = [];
                    object.packedFloat = [];
                    object.packedDouble = [];
                    object.packedBool = [];
                    object.packedNestedEnum = [];
                    object.unpackedInt32 = [];
                    object.unpackedInt64 = [];
                    object.unpackedUint32 = [];
                    object.unpackedUint64 = [];
                    object.unpackedSint32 = [];
                    object.unpackedSint64 = [];
                    object.unpackedFixed32 = [];
                    object.unpackedFixed64 = [];
                    object.unpackedSfixed32 = [];
                    object.unpackedSfixed64 = [];
                    object.unpackedFloat = [];
                    object.unpackedDouble = [];
                    object.unpackedBool = [];
                    object.unpackedNestedEnum = [];
                }
                if (options.objects || options.defaults) {
                    object.mapInt32Int32 = {};
                    object.mapInt64Int64 = {};
                    object.mapUint32Uint32 = {};
                    object.mapUint64Uint64 = {};
                    object.mapSint32Sint32 = {};
                    object.mapSint64Sint64 = {};
                    object.mapFixed32Fixed32 = {};
                    object.mapFixed64Fixed64 = {};
                    object.mapSfixed32Sfixed32 = {};
                    object.mapSfixed64Sfixed64 = {};
                    object.mapInt32Float = {};
                    object.mapInt32Double = {};
                    object.mapBoolBool = {};
                    object.mapStringString = {};
                    object.mapStringBytes = {};
                    object.mapStringNestedMessage = {};
                    object.mapStringForeignMessage = {};
                    object.mapStringNestedEnum = {};
                    object.mapStringForeignEnum = {};
                }
                if (options.defaults) {
                    object.optionalInt32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.optionalInt64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalInt64 = options.longs === String ? "0" : 0;
                    object.optionalUint32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.optionalUint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalUint64 = options.longs === String ? "0" : 0;
                    object.optionalSint32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.optionalSint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalSint64 = options.longs === String ? "0" : 0;
                    object.optionalFixed32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.optionalFixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalFixed64 = options.longs === String ? "0" : 0;
                    object.optionalSfixed32 = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.optionalSfixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.optionalSfixed64 = options.longs === String ? "0" : 0;
                    object.optionalFloat = 0;
                    object.optionalDouble = 0;
                    object.optionalBool = false;
                    object.optionalString = "";
                    if (options.bytes === String)
                        object.optionalBytes = "";
                    else {
                        object.optionalBytes = [];
                        if (options.bytes !== Array)
                            object.optionalBytes = $util.newBuffer(object.optionalBytes);
                    }
                    object.optionalNestedMessage = null;
                    object.optionalForeignMessage = null;
                    object.optionalNestedEnum = options.enums === String ? "FOO" : 0;
                    object.optionalForeignEnum = options.enums === String ? "FOREIGN_FOO" : 0;
                    object.optionalStringPiece = "";
                    object.optionalCord = "";
                    object.recursiveMessage = null;
                    object[".protobuf_test_messages.proto2.extensionInt32"] = 0;
                    object.data = null;
                    object.defaultInt32 = -123456789;
                    if ($util.Long) {
                        let long = new $util.Long(1890295808, -2124220317, false);
                        object.defaultInt64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.defaultInt64 = options.longs === String ? "-9123456789123457024" : -9123456789123457000;
                    object.defaultUint32 = 2123456789;
                    if ($util.Long) {
                        let long = new $util.Long(918052864, -1937916336, true);
                        object.defaultUint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.defaultUint64 = options.longs === String ? "10123456789123457024" : 10123456789123457000;
                    object.defaultSint32 = -123456789;
                    if ($util.Long) {
                        let long = new $util.Long(1890295808, -2124220317, false);
                        object.defaultSint64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.defaultSint64 = options.longs === String ? "-9123456789123457024" : -9123456789123457000;
                    object.defaultFixed32 = 2123456789;
                    if ($util.Long) {
                        let long = new $util.Long(-1, 2147483647, false);
                        object.defaultFixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.defaultFixed64 = options.longs === String ? "9223372036854775807" : 9223372036854776000;
                    object.defaultSfixed32 = -123456789;
                    if ($util.Long) {
                        let long = new $util.Long(1890295808, -2124220317, false);
                        object.defaultSfixed64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.defaultSfixed64 = options.longs === String ? "-9123456789123457024" : -9123456789123457000;
                    object.defaultFloat = 9000000000;
                    object.defaultDouble = 7e+22;
                    object.defaultBool = true;
                    object.defaultString = "Rosebud";
                    if (options.bytes === String)
                        object.defaultBytes = "joshua";
                    else {
                        object.defaultBytes = [
                            106,
                            111,
                            115,
                            104,
                            117,
                            97
                        ];
                        if (options.bytes !== Array)
                            object.defaultBytes = $util.newBuffer(object.defaultBytes);
                    }
                    object.fieldname1 = 0;
                    object.fieldName2 = 0;
                    object._fieldName3 = 0;
                    object.field_Name4_ = 0;
                    object.field0name5 = 0;
                    object.field_0Name6 = 0;
                    object.fieldName7 = 0;
                    object.FieldName8 = 0;
                    object.field_Name9 = 0;
                    object.Field_Name10 = 0;
                    object.FIELD_NAME11 = 0;
                    object.FIELDName12 = 0;
                    object._FieldName13 = 0;
                    object.__FieldName14 = 0;
                    object.field_Name15 = 0;
                    object.field__Name16 = 0;
                    object.fieldName17__ = 0;
                    object.FieldName18__ = 0;
                }
                if (message.optionalInt32 != null && message.hasOwnProperty("optionalInt32"))
                    object.optionalInt32 = message.optionalInt32;
                if (message.optionalInt64 != null && message.hasOwnProperty("optionalInt64"))
                    if (typeof message.optionalInt64 === "number")
                        object.optionalInt64 = options.longs === String ? String(message.optionalInt64) : message.optionalInt64;
                    else
                        object.optionalInt64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalInt64) : options.longs === Number ? new $util.LongBits(message.optionalInt64.low >>> 0, message.optionalInt64.high >>> 0).toNumber() : message.optionalInt64;
                if (message.optionalUint32 != null && message.hasOwnProperty("optionalUint32"))
                    object.optionalUint32 = message.optionalUint32;
                if (message.optionalUint64 != null && message.hasOwnProperty("optionalUint64"))
                    if (typeof message.optionalUint64 === "number")
                        object.optionalUint64 = options.longs === String ? String(message.optionalUint64) : message.optionalUint64;
                    else
                        object.optionalUint64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalUint64) : options.longs === Number ? new $util.LongBits(message.optionalUint64.low >>> 0, message.optionalUint64.high >>> 0).toNumber(true) : message.optionalUint64;
                if (message.optionalSint32 != null && message.hasOwnProperty("optionalSint32"))
                    object.optionalSint32 = message.optionalSint32;
                if (message.optionalSint64 != null && message.hasOwnProperty("optionalSint64"))
                    if (typeof message.optionalSint64 === "number")
                        object.optionalSint64 = options.longs === String ? String(message.optionalSint64) : message.optionalSint64;
                    else
                        object.optionalSint64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalSint64) : options.longs === Number ? new $util.LongBits(message.optionalSint64.low >>> 0, message.optionalSint64.high >>> 0).toNumber() : message.optionalSint64;
                if (message.optionalFixed32 != null && message.hasOwnProperty("optionalFixed32"))
                    object.optionalFixed32 = message.optionalFixed32;
                if (message.optionalFixed64 != null && message.hasOwnProperty("optionalFixed64"))
                    if (typeof message.optionalFixed64 === "number")
                        object.optionalFixed64 = options.longs === String ? String(message.optionalFixed64) : message.optionalFixed64;
                    else
                        object.optionalFixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalFixed64) : options.longs === Number ? new $util.LongBits(message.optionalFixed64.low >>> 0, message.optionalFixed64.high >>> 0).toNumber() : message.optionalFixed64;
                if (message.optionalSfixed32 != null && message.hasOwnProperty("optionalSfixed32"))
                    object.optionalSfixed32 = message.optionalSfixed32;
                if (message.optionalSfixed64 != null && message.hasOwnProperty("optionalSfixed64"))
                    if (typeof message.optionalSfixed64 === "number")
                        object.optionalSfixed64 = options.longs === String ? String(message.optionalSfixed64) : message.optionalSfixed64;
                    else
                        object.optionalSfixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.optionalSfixed64) : options.longs === Number ? new $util.LongBits(message.optionalSfixed64.low >>> 0, message.optionalSfixed64.high >>> 0).toNumber() : message.optionalSfixed64;
                if (message.optionalFloat != null && message.hasOwnProperty("optionalFloat"))
                    object.optionalFloat = options.json && !isFinite(message.optionalFloat) ? String(message.optionalFloat) : message.optionalFloat;
                if (message.optionalDouble != null && message.hasOwnProperty("optionalDouble"))
                    object.optionalDouble = options.json && !isFinite(message.optionalDouble) ? String(message.optionalDouble) : message.optionalDouble;
                if (message.optionalBool != null && message.hasOwnProperty("optionalBool"))
                    object.optionalBool = message.optionalBool;
                if (message.optionalString != null && message.hasOwnProperty("optionalString"))
                    object.optionalString = message.optionalString;
                if (message.optionalBytes != null && message.hasOwnProperty("optionalBytes"))
                    object.optionalBytes = options.bytes === String ? $util.base64.encode(message.optionalBytes, 0, message.optionalBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.optionalBytes) : message.optionalBytes;
                if (message.optionalNestedMessage != null && message.hasOwnProperty("optionalNestedMessage"))
                    object.optionalNestedMessage = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.toObject(message.optionalNestedMessage, options);
                if (message.optionalForeignMessage != null && message.hasOwnProperty("optionalForeignMessage"))
                    object.optionalForeignMessage = $root.protobuf_test_messages.proto2.ForeignMessageProto2.toObject(message.optionalForeignMessage, options);
                if (message.optionalNestedEnum != null && message.hasOwnProperty("optionalNestedEnum"))
                    object.optionalNestedEnum = options.enums === String ? $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.optionalNestedEnum] === undefined ? message.optionalNestedEnum : $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.optionalNestedEnum] : message.optionalNestedEnum;
                if (message.optionalForeignEnum != null && message.hasOwnProperty("optionalForeignEnum"))
                    object.optionalForeignEnum = options.enums === String ? $root.protobuf_test_messages.proto2.ForeignEnumProto2[message.optionalForeignEnum] === undefined ? message.optionalForeignEnum : $root.protobuf_test_messages.proto2.ForeignEnumProto2[message.optionalForeignEnum] : message.optionalForeignEnum;
                if (message.optionalStringPiece != null && message.hasOwnProperty("optionalStringPiece"))
                    object.optionalStringPiece = message.optionalStringPiece;
                if (message.optionalCord != null && message.hasOwnProperty("optionalCord"))
                    object.optionalCord = message.optionalCord;
                if (message.recursiveMessage != null && message.hasOwnProperty("recursiveMessage"))
                    object.recursiveMessage = $root.protobuf_test_messages.proto2.TestAllTypesProto2.toObject(message.recursiveMessage, options);
                if (message.repeatedInt32 && message.repeatedInt32.length) {
                    object.repeatedInt32 = [];
                    for (let j = 0; j < message.repeatedInt32.length; ++j)
                        object.repeatedInt32[j] = message.repeatedInt32[j];
                }
                if (message.repeatedInt64 && message.repeatedInt64.length) {
                    object.repeatedInt64 = [];
                    for (let j = 0; j < message.repeatedInt64.length; ++j)
                        if (typeof message.repeatedInt64[j] === "number")
                            object.repeatedInt64[j] = options.longs === String ? String(message.repeatedInt64[j]) : message.repeatedInt64[j];
                        else
                            object.repeatedInt64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedInt64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedInt64[j].low >>> 0, message.repeatedInt64[j].high >>> 0).toNumber() : message.repeatedInt64[j];
                }
                if (message.repeatedUint32 && message.repeatedUint32.length) {
                    object.repeatedUint32 = [];
                    for (let j = 0; j < message.repeatedUint32.length; ++j)
                        object.repeatedUint32[j] = message.repeatedUint32[j];
                }
                if (message.repeatedUint64 && message.repeatedUint64.length) {
                    object.repeatedUint64 = [];
                    for (let j = 0; j < message.repeatedUint64.length; ++j)
                        if (typeof message.repeatedUint64[j] === "number")
                            object.repeatedUint64[j] = options.longs === String ? String(message.repeatedUint64[j]) : message.repeatedUint64[j];
                        else
                            object.repeatedUint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedUint64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedUint64[j].low >>> 0, message.repeatedUint64[j].high >>> 0).toNumber(true) : message.repeatedUint64[j];
                }
                if (message.repeatedSint32 && message.repeatedSint32.length) {
                    object.repeatedSint32 = [];
                    for (let j = 0; j < message.repeatedSint32.length; ++j)
                        object.repeatedSint32[j] = message.repeatedSint32[j];
                }
                if (message.repeatedSint64 && message.repeatedSint64.length) {
                    object.repeatedSint64 = [];
                    for (let j = 0; j < message.repeatedSint64.length; ++j)
                        if (typeof message.repeatedSint64[j] === "number")
                            object.repeatedSint64[j] = options.longs === String ? String(message.repeatedSint64[j]) : message.repeatedSint64[j];
                        else
                            object.repeatedSint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedSint64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedSint64[j].low >>> 0, message.repeatedSint64[j].high >>> 0).toNumber() : message.repeatedSint64[j];
                }
                if (message.repeatedFixed32 && message.repeatedFixed32.length) {
                    object.repeatedFixed32 = [];
                    for (let j = 0; j < message.repeatedFixed32.length; ++j)
                        object.repeatedFixed32[j] = message.repeatedFixed32[j];
                }
                if (message.repeatedFixed64 && message.repeatedFixed64.length) {
                    object.repeatedFixed64 = [];
                    for (let j = 0; j < message.repeatedFixed64.length; ++j)
                        if (typeof message.repeatedFixed64[j] === "number")
                            object.repeatedFixed64[j] = options.longs === String ? String(message.repeatedFixed64[j]) : message.repeatedFixed64[j];
                        else
                            object.repeatedFixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedFixed64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedFixed64[j].low >>> 0, message.repeatedFixed64[j].high >>> 0).toNumber() : message.repeatedFixed64[j];
                }
                if (message.repeatedSfixed32 && message.repeatedSfixed32.length) {
                    object.repeatedSfixed32 = [];
                    for (let j = 0; j < message.repeatedSfixed32.length; ++j)
                        object.repeatedSfixed32[j] = message.repeatedSfixed32[j];
                }
                if (message.repeatedSfixed64 && message.repeatedSfixed64.length) {
                    object.repeatedSfixed64 = [];
                    for (let j = 0; j < message.repeatedSfixed64.length; ++j)
                        if (typeof message.repeatedSfixed64[j] === "number")
                            object.repeatedSfixed64[j] = options.longs === String ? String(message.repeatedSfixed64[j]) : message.repeatedSfixed64[j];
                        else
                            object.repeatedSfixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.repeatedSfixed64[j]) : options.longs === Number ? new $util.LongBits(message.repeatedSfixed64[j].low >>> 0, message.repeatedSfixed64[j].high >>> 0).toNumber() : message.repeatedSfixed64[j];
                }
                if (message.repeatedFloat && message.repeatedFloat.length) {
                    object.repeatedFloat = [];
                    for (let j = 0; j < message.repeatedFloat.length; ++j)
                        object.repeatedFloat[j] = options.json && !isFinite(message.repeatedFloat[j]) ? String(message.repeatedFloat[j]) : message.repeatedFloat[j];
                }
                if (message.repeatedDouble && message.repeatedDouble.length) {
                    object.repeatedDouble = [];
                    for (let j = 0; j < message.repeatedDouble.length; ++j)
                        object.repeatedDouble[j] = options.json && !isFinite(message.repeatedDouble[j]) ? String(message.repeatedDouble[j]) : message.repeatedDouble[j];
                }
                if (message.repeatedBool && message.repeatedBool.length) {
                    object.repeatedBool = [];
                    for (let j = 0; j < message.repeatedBool.length; ++j)
                        object.repeatedBool[j] = message.repeatedBool[j];
                }
                if (message.repeatedString && message.repeatedString.length) {
                    object.repeatedString = [];
                    for (let j = 0; j < message.repeatedString.length; ++j)
                        object.repeatedString[j] = message.repeatedString[j];
                }
                if (message.repeatedBytes && message.repeatedBytes.length) {
                    object.repeatedBytes = [];
                    for (let j = 0; j < message.repeatedBytes.length; ++j)
                        object.repeatedBytes[j] = options.bytes === String ? $util.base64.encode(message.repeatedBytes[j], 0, message.repeatedBytes[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.repeatedBytes[j]) : message.repeatedBytes[j];
                }
                if (message.repeatedNestedMessage && message.repeatedNestedMessage.length) {
                    object.repeatedNestedMessage = [];
                    for (let j = 0; j < message.repeatedNestedMessage.length; ++j)
                        object.repeatedNestedMessage[j] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.toObject(message.repeatedNestedMessage[j], options);
                }
                if (message.repeatedForeignMessage && message.repeatedForeignMessage.length) {
                    object.repeatedForeignMessage = [];
                    for (let j = 0; j < message.repeatedForeignMessage.length; ++j)
                        object.repeatedForeignMessage[j] = $root.protobuf_test_messages.proto2.ForeignMessageProto2.toObject(message.repeatedForeignMessage[j], options);
                }
                if (message.repeatedNestedEnum && message.repeatedNestedEnum.length) {
                    object.repeatedNestedEnum = [];
                    for (let j = 0; j < message.repeatedNestedEnum.length; ++j)
                        object.repeatedNestedEnum[j] = options.enums === String ? $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.repeatedNestedEnum[j]] === undefined ? message.repeatedNestedEnum[j] : $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.repeatedNestedEnum[j]] : message.repeatedNestedEnum[j];
                }
                if (message.repeatedForeignEnum && message.repeatedForeignEnum.length) {
                    object.repeatedForeignEnum = [];
                    for (let j = 0; j < message.repeatedForeignEnum.length; ++j)
                        object.repeatedForeignEnum[j] = options.enums === String ? $root.protobuf_test_messages.proto2.ForeignEnumProto2[message.repeatedForeignEnum[j]] === undefined ? message.repeatedForeignEnum[j] : $root.protobuf_test_messages.proto2.ForeignEnumProto2[message.repeatedForeignEnum[j]] : message.repeatedForeignEnum[j];
                }
                if (message.repeatedStringPiece && message.repeatedStringPiece.length) {
                    object.repeatedStringPiece = [];
                    for (let j = 0; j < message.repeatedStringPiece.length; ++j)
                        object.repeatedStringPiece[j] = message.repeatedStringPiece[j];
                }
                if (message.repeatedCord && message.repeatedCord.length) {
                    object.repeatedCord = [];
                    for (let j = 0; j < message.repeatedCord.length; ++j)
                        object.repeatedCord[j] = message.repeatedCord[j];
                }
                let keys2;
                if (message.mapInt32Int32 && (keys2 = Object.keys(message.mapInt32Int32)).length) {
                    object.mapInt32Int32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapInt32Int32[keys2[j]] = message.mapInt32Int32[keys2[j]];
                }
                if (message.mapInt64Int64 && (keys2 = Object.keys(message.mapInt64Int64)).length) {
                    object.mapInt64Int64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapInt64Int64[keys2[j]] === "number")
                            object.mapInt64Int64[keys2[j]] = options.longs === String ? String(message.mapInt64Int64[keys2[j]]) : message.mapInt64Int64[keys2[j]];
                        else
                            object.mapInt64Int64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapInt64Int64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapInt64Int64[keys2[j]].low >>> 0, message.mapInt64Int64[keys2[j]].high >>> 0).toNumber() : message.mapInt64Int64[keys2[j]];
                }
                if (message.mapUint32Uint32 && (keys2 = Object.keys(message.mapUint32Uint32)).length) {
                    object.mapUint32Uint32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapUint32Uint32[keys2[j]] = message.mapUint32Uint32[keys2[j]];
                }
                if (message.mapUint64Uint64 && (keys2 = Object.keys(message.mapUint64Uint64)).length) {
                    object.mapUint64Uint64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapUint64Uint64[keys2[j]] === "number")
                            object.mapUint64Uint64[keys2[j]] = options.longs === String ? String(message.mapUint64Uint64[keys2[j]]) : message.mapUint64Uint64[keys2[j]];
                        else
                            object.mapUint64Uint64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapUint64Uint64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapUint64Uint64[keys2[j]].low >>> 0, message.mapUint64Uint64[keys2[j]].high >>> 0).toNumber(true) : message.mapUint64Uint64[keys2[j]];
                }
                if (message.mapSint32Sint32 && (keys2 = Object.keys(message.mapSint32Sint32)).length) {
                    object.mapSint32Sint32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapSint32Sint32[keys2[j]] = message.mapSint32Sint32[keys2[j]];
                }
                if (message.mapSint64Sint64 && (keys2 = Object.keys(message.mapSint64Sint64)).length) {
                    object.mapSint64Sint64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapSint64Sint64[keys2[j]] === "number")
                            object.mapSint64Sint64[keys2[j]] = options.longs === String ? String(message.mapSint64Sint64[keys2[j]]) : message.mapSint64Sint64[keys2[j]];
                        else
                            object.mapSint64Sint64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapSint64Sint64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapSint64Sint64[keys2[j]].low >>> 0, message.mapSint64Sint64[keys2[j]].high >>> 0).toNumber() : message.mapSint64Sint64[keys2[j]];
                }
                if (message.mapFixed32Fixed32 && (keys2 = Object.keys(message.mapFixed32Fixed32)).length) {
                    object.mapFixed32Fixed32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapFixed32Fixed32[keys2[j]] = message.mapFixed32Fixed32[keys2[j]];
                }
                if (message.mapFixed64Fixed64 && (keys2 = Object.keys(message.mapFixed64Fixed64)).length) {
                    object.mapFixed64Fixed64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapFixed64Fixed64[keys2[j]] === "number")
                            object.mapFixed64Fixed64[keys2[j]] = options.longs === String ? String(message.mapFixed64Fixed64[keys2[j]]) : message.mapFixed64Fixed64[keys2[j]];
                        else
                            object.mapFixed64Fixed64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapFixed64Fixed64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapFixed64Fixed64[keys2[j]].low >>> 0, message.mapFixed64Fixed64[keys2[j]].high >>> 0).toNumber() : message.mapFixed64Fixed64[keys2[j]];
                }
                if (message.mapSfixed32Sfixed32 && (keys2 = Object.keys(message.mapSfixed32Sfixed32)).length) {
                    object.mapSfixed32Sfixed32 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapSfixed32Sfixed32[keys2[j]] = message.mapSfixed32Sfixed32[keys2[j]];
                }
                if (message.mapSfixed64Sfixed64 && (keys2 = Object.keys(message.mapSfixed64Sfixed64)).length) {
                    object.mapSfixed64Sfixed64 = {};
                    for (let j = 0; j < keys2.length; ++j)
                        if (typeof message.mapSfixed64Sfixed64[keys2[j]] === "number")
                            object.mapSfixed64Sfixed64[keys2[j]] = options.longs === String ? String(message.mapSfixed64Sfixed64[keys2[j]]) : message.mapSfixed64Sfixed64[keys2[j]];
                        else
                            object.mapSfixed64Sfixed64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapSfixed64Sfixed64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapSfixed64Sfixed64[keys2[j]].low >>> 0, message.mapSfixed64Sfixed64[keys2[j]].high >>> 0).toNumber() : message.mapSfixed64Sfixed64[keys2[j]];
                }
                if (message.mapInt32Float && (keys2 = Object.keys(message.mapInt32Float)).length) {
                    object.mapInt32Float = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapInt32Float[keys2[j]] = options.json && !isFinite(message.mapInt32Float[keys2[j]]) ? String(message.mapInt32Float[keys2[j]]) : message.mapInt32Float[keys2[j]];
                }
                if (message.mapInt32Double && (keys2 = Object.keys(message.mapInt32Double)).length) {
                    object.mapInt32Double = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapInt32Double[keys2[j]] = options.json && !isFinite(message.mapInt32Double[keys2[j]]) ? String(message.mapInt32Double[keys2[j]]) : message.mapInt32Double[keys2[j]];
                }
                if (message.mapBoolBool && (keys2 = Object.keys(message.mapBoolBool)).length) {
                    object.mapBoolBool = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapBoolBool[keys2[j]] = message.mapBoolBool[keys2[j]];
                }
                if (message.mapStringString && (keys2 = Object.keys(message.mapStringString)).length) {
                    object.mapStringString = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringString[keys2[j]] = message.mapStringString[keys2[j]];
                }
                if (message.mapStringBytes && (keys2 = Object.keys(message.mapStringBytes)).length) {
                    object.mapStringBytes = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringBytes[keys2[j]] = options.bytes === String ? $util.base64.encode(message.mapStringBytes[keys2[j]], 0, message.mapStringBytes[keys2[j]].length) : options.bytes === Array ? Array.prototype.slice.call(message.mapStringBytes[keys2[j]]) : message.mapStringBytes[keys2[j]];
                }
                if (message.mapStringNestedMessage && (keys2 = Object.keys(message.mapStringNestedMessage)).length) {
                    object.mapStringNestedMessage = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringNestedMessage[keys2[j]] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.toObject(message.mapStringNestedMessage[keys2[j]], options);
                }
                if (message.mapStringForeignMessage && (keys2 = Object.keys(message.mapStringForeignMessage)).length) {
                    object.mapStringForeignMessage = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringForeignMessage[keys2[j]] = $root.protobuf_test_messages.proto2.ForeignMessageProto2.toObject(message.mapStringForeignMessage[keys2[j]], options);
                }
                if (message.mapStringNestedEnum && (keys2 = Object.keys(message.mapStringNestedEnum)).length) {
                    object.mapStringNestedEnum = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringNestedEnum[keys2[j]] = options.enums === String ? $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.mapStringNestedEnum[keys2[j]]] === undefined ? message.mapStringNestedEnum[keys2[j]] : $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.mapStringNestedEnum[keys2[j]]] : message.mapStringNestedEnum[keys2[j]];
                }
                if (message.mapStringForeignEnum && (keys2 = Object.keys(message.mapStringForeignEnum)).length) {
                    object.mapStringForeignEnum = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.mapStringForeignEnum[keys2[j]] = options.enums === String ? $root.protobuf_test_messages.proto2.ForeignEnumProto2[message.mapStringForeignEnum[keys2[j]]] === undefined ? message.mapStringForeignEnum[keys2[j]] : $root.protobuf_test_messages.proto2.ForeignEnumProto2[message.mapStringForeignEnum[keys2[j]]] : message.mapStringForeignEnum[keys2[j]];
                }
                if (message.packedInt32 && message.packedInt32.length) {
                    object.packedInt32 = [];
                    for (let j = 0; j < message.packedInt32.length; ++j)
                        object.packedInt32[j] = message.packedInt32[j];
                }
                if (message.packedInt64 && message.packedInt64.length) {
                    object.packedInt64 = [];
                    for (let j = 0; j < message.packedInt64.length; ++j)
                        if (typeof message.packedInt64[j] === "number")
                            object.packedInt64[j] = options.longs === String ? String(message.packedInt64[j]) : message.packedInt64[j];
                        else
                            object.packedInt64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedInt64[j]) : options.longs === Number ? new $util.LongBits(message.packedInt64[j].low >>> 0, message.packedInt64[j].high >>> 0).toNumber() : message.packedInt64[j];
                }
                if (message.packedUint32 && message.packedUint32.length) {
                    object.packedUint32 = [];
                    for (let j = 0; j < message.packedUint32.length; ++j)
                        object.packedUint32[j] = message.packedUint32[j];
                }
                if (message.packedUint64 && message.packedUint64.length) {
                    object.packedUint64 = [];
                    for (let j = 0; j < message.packedUint64.length; ++j)
                        if (typeof message.packedUint64[j] === "number")
                            object.packedUint64[j] = options.longs === String ? String(message.packedUint64[j]) : message.packedUint64[j];
                        else
                            object.packedUint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedUint64[j]) : options.longs === Number ? new $util.LongBits(message.packedUint64[j].low >>> 0, message.packedUint64[j].high >>> 0).toNumber(true) : message.packedUint64[j];
                }
                if (message.packedSint32 && message.packedSint32.length) {
                    object.packedSint32 = [];
                    for (let j = 0; j < message.packedSint32.length; ++j)
                        object.packedSint32[j] = message.packedSint32[j];
                }
                if (message.packedSint64 && message.packedSint64.length) {
                    object.packedSint64 = [];
                    for (let j = 0; j < message.packedSint64.length; ++j)
                        if (typeof message.packedSint64[j] === "number")
                            object.packedSint64[j] = options.longs === String ? String(message.packedSint64[j]) : message.packedSint64[j];
                        else
                            object.packedSint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedSint64[j]) : options.longs === Number ? new $util.LongBits(message.packedSint64[j].low >>> 0, message.packedSint64[j].high >>> 0).toNumber() : message.packedSint64[j];
                }
                if (message.packedFixed32 && message.packedFixed32.length) {
                    object.packedFixed32 = [];
                    for (let j = 0; j < message.packedFixed32.length; ++j)
                        object.packedFixed32[j] = message.packedFixed32[j];
                }
                if (message.packedFixed64 && message.packedFixed64.length) {
                    object.packedFixed64 = [];
                    for (let j = 0; j < message.packedFixed64.length; ++j)
                        if (typeof message.packedFixed64[j] === "number")
                            object.packedFixed64[j] = options.longs === String ? String(message.packedFixed64[j]) : message.packedFixed64[j];
                        else
                            object.packedFixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedFixed64[j]) : options.longs === Number ? new $util.LongBits(message.packedFixed64[j].low >>> 0, message.packedFixed64[j].high >>> 0).toNumber() : message.packedFixed64[j];
                }
                if (message.packedSfixed32 && message.packedSfixed32.length) {
                    object.packedSfixed32 = [];
                    for (let j = 0; j < message.packedSfixed32.length; ++j)
                        object.packedSfixed32[j] = message.packedSfixed32[j];
                }
                if (message.packedSfixed64 && message.packedSfixed64.length) {
                    object.packedSfixed64 = [];
                    for (let j = 0; j < message.packedSfixed64.length; ++j)
                        if (typeof message.packedSfixed64[j] === "number")
                            object.packedSfixed64[j] = options.longs === String ? String(message.packedSfixed64[j]) : message.packedSfixed64[j];
                        else
                            object.packedSfixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.packedSfixed64[j]) : options.longs === Number ? new $util.LongBits(message.packedSfixed64[j].low >>> 0, message.packedSfixed64[j].high >>> 0).toNumber() : message.packedSfixed64[j];
                }
                if (message.packedFloat && message.packedFloat.length) {
                    object.packedFloat = [];
                    for (let j = 0; j < message.packedFloat.length; ++j)
                        object.packedFloat[j] = options.json && !isFinite(message.packedFloat[j]) ? String(message.packedFloat[j]) : message.packedFloat[j];
                }
                if (message.packedDouble && message.packedDouble.length) {
                    object.packedDouble = [];
                    for (let j = 0; j < message.packedDouble.length; ++j)
                        object.packedDouble[j] = options.json && !isFinite(message.packedDouble[j]) ? String(message.packedDouble[j]) : message.packedDouble[j];
                }
                if (message.packedBool && message.packedBool.length) {
                    object.packedBool = [];
                    for (let j = 0; j < message.packedBool.length; ++j)
                        object.packedBool[j] = message.packedBool[j];
                }
                if (message.packedNestedEnum && message.packedNestedEnum.length) {
                    object.packedNestedEnum = [];
                    for (let j = 0; j < message.packedNestedEnum.length; ++j)
                        object.packedNestedEnum[j] = options.enums === String ? $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.packedNestedEnum[j]] === undefined ? message.packedNestedEnum[j] : $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.packedNestedEnum[j]] : message.packedNestedEnum[j];
                }
                if (message.unpackedInt32 && message.unpackedInt32.length) {
                    object.unpackedInt32 = [];
                    for (let j = 0; j < message.unpackedInt32.length; ++j)
                        object.unpackedInt32[j] = message.unpackedInt32[j];
                }
                if (message.unpackedInt64 && message.unpackedInt64.length) {
                    object.unpackedInt64 = [];
                    for (let j = 0; j < message.unpackedInt64.length; ++j)
                        if (typeof message.unpackedInt64[j] === "number")
                            object.unpackedInt64[j] = options.longs === String ? String(message.unpackedInt64[j]) : message.unpackedInt64[j];
                        else
                            object.unpackedInt64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedInt64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedInt64[j].low >>> 0, message.unpackedInt64[j].high >>> 0).toNumber() : message.unpackedInt64[j];
                }
                if (message.unpackedUint32 && message.unpackedUint32.length) {
                    object.unpackedUint32 = [];
                    for (let j = 0; j < message.unpackedUint32.length; ++j)
                        object.unpackedUint32[j] = message.unpackedUint32[j];
                }
                if (message.unpackedUint64 && message.unpackedUint64.length) {
                    object.unpackedUint64 = [];
                    for (let j = 0; j < message.unpackedUint64.length; ++j)
                        if (typeof message.unpackedUint64[j] === "number")
                            object.unpackedUint64[j] = options.longs === String ? String(message.unpackedUint64[j]) : message.unpackedUint64[j];
                        else
                            object.unpackedUint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedUint64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedUint64[j].low >>> 0, message.unpackedUint64[j].high >>> 0).toNumber(true) : message.unpackedUint64[j];
                }
                if (message.unpackedSint32 && message.unpackedSint32.length) {
                    object.unpackedSint32 = [];
                    for (let j = 0; j < message.unpackedSint32.length; ++j)
                        object.unpackedSint32[j] = message.unpackedSint32[j];
                }
                if (message.unpackedSint64 && message.unpackedSint64.length) {
                    object.unpackedSint64 = [];
                    for (let j = 0; j < message.unpackedSint64.length; ++j)
                        if (typeof message.unpackedSint64[j] === "number")
                            object.unpackedSint64[j] = options.longs === String ? String(message.unpackedSint64[j]) : message.unpackedSint64[j];
                        else
                            object.unpackedSint64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedSint64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedSint64[j].low >>> 0, message.unpackedSint64[j].high >>> 0).toNumber() : message.unpackedSint64[j];
                }
                if (message.unpackedFixed32 && message.unpackedFixed32.length) {
                    object.unpackedFixed32 = [];
                    for (let j = 0; j < message.unpackedFixed32.length; ++j)
                        object.unpackedFixed32[j] = message.unpackedFixed32[j];
                }
                if (message.unpackedFixed64 && message.unpackedFixed64.length) {
                    object.unpackedFixed64 = [];
                    for (let j = 0; j < message.unpackedFixed64.length; ++j)
                        if (typeof message.unpackedFixed64[j] === "number")
                            object.unpackedFixed64[j] = options.longs === String ? String(message.unpackedFixed64[j]) : message.unpackedFixed64[j];
                        else
                            object.unpackedFixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedFixed64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedFixed64[j].low >>> 0, message.unpackedFixed64[j].high >>> 0).toNumber() : message.unpackedFixed64[j];
                }
                if (message.unpackedSfixed32 && message.unpackedSfixed32.length) {
                    object.unpackedSfixed32 = [];
                    for (let j = 0; j < message.unpackedSfixed32.length; ++j)
                        object.unpackedSfixed32[j] = message.unpackedSfixed32[j];
                }
                if (message.unpackedSfixed64 && message.unpackedSfixed64.length) {
                    object.unpackedSfixed64 = [];
                    for (let j = 0; j < message.unpackedSfixed64.length; ++j)
                        if (typeof message.unpackedSfixed64[j] === "number")
                            object.unpackedSfixed64[j] = options.longs === String ? String(message.unpackedSfixed64[j]) : message.unpackedSfixed64[j];
                        else
                            object.unpackedSfixed64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unpackedSfixed64[j]) : options.longs === Number ? new $util.LongBits(message.unpackedSfixed64[j].low >>> 0, message.unpackedSfixed64[j].high >>> 0).toNumber() : message.unpackedSfixed64[j];
                }
                if (message.unpackedFloat && message.unpackedFloat.length) {
                    object.unpackedFloat = [];
                    for (let j = 0; j < message.unpackedFloat.length; ++j)
                        object.unpackedFloat[j] = options.json && !isFinite(message.unpackedFloat[j]) ? String(message.unpackedFloat[j]) : message.unpackedFloat[j];
                }
                if (message.unpackedDouble && message.unpackedDouble.length) {
                    object.unpackedDouble = [];
                    for (let j = 0; j < message.unpackedDouble.length; ++j)
                        object.unpackedDouble[j] = options.json && !isFinite(message.unpackedDouble[j]) ? String(message.unpackedDouble[j]) : message.unpackedDouble[j];
                }
                if (message.unpackedBool && message.unpackedBool.length) {
                    object.unpackedBool = [];
                    for (let j = 0; j < message.unpackedBool.length; ++j)
                        object.unpackedBool[j] = message.unpackedBool[j];
                }
                if (message.unpackedNestedEnum && message.unpackedNestedEnum.length) {
                    object.unpackedNestedEnum = [];
                    for (let j = 0; j < message.unpackedNestedEnum.length; ++j)
                        object.unpackedNestedEnum[j] = options.enums === String ? $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.unpackedNestedEnum[j]] === undefined ? message.unpackedNestedEnum[j] : $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.unpackedNestedEnum[j]] : message.unpackedNestedEnum[j];
                }
                if (message.oneofUint32 != null && message.hasOwnProperty("oneofUint32")) {
                    object.oneofUint32 = message.oneofUint32;
                    if (options.oneofs)
                        object.oneofField = "oneofUint32";
                }
                if (message.oneofNestedMessage != null && message.hasOwnProperty("oneofNestedMessage")) {
                    object.oneofNestedMessage = $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.toObject(message.oneofNestedMessage, options);
                    if (options.oneofs)
                        object.oneofField = "oneofNestedMessage";
                }
                if (message.oneofString != null && message.hasOwnProperty("oneofString")) {
                    object.oneofString = message.oneofString;
                    if (options.oneofs)
                        object.oneofField = "oneofString";
                }
                if (message.oneofBytes != null && message.hasOwnProperty("oneofBytes")) {
                    object.oneofBytes = options.bytes === String ? $util.base64.encode(message.oneofBytes, 0, message.oneofBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.oneofBytes) : message.oneofBytes;
                    if (options.oneofs)
                        object.oneofField = "oneofBytes";
                }
                if (message.oneofBool != null && message.hasOwnProperty("oneofBool")) {
                    object.oneofBool = message.oneofBool;
                    if (options.oneofs)
                        object.oneofField = "oneofBool";
                }
                if (message.oneofUint64 != null && message.hasOwnProperty("oneofUint64")) {
                    if (typeof message.oneofUint64 === "number")
                        object.oneofUint64 = options.longs === String ? String(message.oneofUint64) : message.oneofUint64;
                    else
                        object.oneofUint64 = options.longs === String ? $util.Long.prototype.toString.call(message.oneofUint64) : options.longs === Number ? new $util.LongBits(message.oneofUint64.low >>> 0, message.oneofUint64.high >>> 0).toNumber(true) : message.oneofUint64;
                    if (options.oneofs)
                        object.oneofField = "oneofUint64";
                }
                if (message.oneofFloat != null && message.hasOwnProperty("oneofFloat")) {
                    object.oneofFloat = options.json && !isFinite(message.oneofFloat) ? String(message.oneofFloat) : message.oneofFloat;
                    if (options.oneofs)
                        object.oneofField = "oneofFloat";
                }
                if (message.oneofDouble != null && message.hasOwnProperty("oneofDouble")) {
                    object.oneofDouble = options.json && !isFinite(message.oneofDouble) ? String(message.oneofDouble) : message.oneofDouble;
                    if (options.oneofs)
                        object.oneofField = "oneofDouble";
                }
                if (message.oneofEnum != null && message.hasOwnProperty("oneofEnum")) {
                    object.oneofEnum = options.enums === String ? $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.oneofEnum] === undefined ? message.oneofEnum : $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum[message.oneofEnum] : message.oneofEnum;
                    if (options.oneofs)
                        object.oneofField = "oneofEnum";
                }
                if (message[".protobuf_test_messages.proto2.extensionInt32"] != null && message.hasOwnProperty(".protobuf_test_messages.proto2.extensionInt32"))
                    object[".protobuf_test_messages.proto2.extensionInt32"] = message[".protobuf_test_messages.proto2.extensionInt32"];
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = $root.protobuf_test_messages.proto2.TestAllTypesProto2.Data.toObject(message.data, options);
                if (message.defaultInt32 != null && message.hasOwnProperty("defaultInt32"))
                    object.defaultInt32 = message.defaultInt32;
                if (message.defaultInt64 != null && message.hasOwnProperty("defaultInt64"))
                    if (typeof message.defaultInt64 === "number")
                        object.defaultInt64 = options.longs === String ? String(message.defaultInt64) : message.defaultInt64;
                    else
                        object.defaultInt64 = options.longs === String ? $util.Long.prototype.toString.call(message.defaultInt64) : options.longs === Number ? new $util.LongBits(message.defaultInt64.low >>> 0, message.defaultInt64.high >>> 0).toNumber() : message.defaultInt64;
                if (message.defaultUint32 != null && message.hasOwnProperty("defaultUint32"))
                    object.defaultUint32 = message.defaultUint32;
                if (message.defaultUint64 != null && message.hasOwnProperty("defaultUint64"))
                    if (typeof message.defaultUint64 === "number")
                        object.defaultUint64 = options.longs === String ? String(message.defaultUint64) : message.defaultUint64;
                    else
                        object.defaultUint64 = options.longs === String ? $util.Long.prototype.toString.call(message.defaultUint64) : options.longs === Number ? new $util.LongBits(message.defaultUint64.low >>> 0, message.defaultUint64.high >>> 0).toNumber(true) : message.defaultUint64;
                if (message.defaultSint32 != null && message.hasOwnProperty("defaultSint32"))
                    object.defaultSint32 = message.defaultSint32;
                if (message.defaultSint64 != null && message.hasOwnProperty("defaultSint64"))
                    if (typeof message.defaultSint64 === "number")
                        object.defaultSint64 = options.longs === String ? String(message.defaultSint64) : message.defaultSint64;
                    else
                        object.defaultSint64 = options.longs === String ? $util.Long.prototype.toString.call(message.defaultSint64) : options.longs === Number ? new $util.LongBits(message.defaultSint64.low >>> 0, message.defaultSint64.high >>> 0).toNumber() : message.defaultSint64;
                if (message.defaultFixed32 != null && message.hasOwnProperty("defaultFixed32"))
                    object.defaultFixed32 = message.defaultFixed32;
                if (message.defaultFixed64 != null && message.hasOwnProperty("defaultFixed64"))
                    if (typeof message.defaultFixed64 === "number")
                        object.defaultFixed64 = options.longs === String ? String(message.defaultFixed64) : message.defaultFixed64;
                    else
                        object.defaultFixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.defaultFixed64) : options.longs === Number ? new $util.LongBits(message.defaultFixed64.low >>> 0, message.defaultFixed64.high >>> 0).toNumber() : message.defaultFixed64;
                if (message.defaultSfixed32 != null && message.hasOwnProperty("defaultSfixed32"))
                    object.defaultSfixed32 = message.defaultSfixed32;
                if (message.defaultSfixed64 != null && message.hasOwnProperty("defaultSfixed64"))
                    if (typeof message.defaultSfixed64 === "number")
                        object.defaultSfixed64 = options.longs === String ? String(message.defaultSfixed64) : message.defaultSfixed64;
                    else
                        object.defaultSfixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.defaultSfixed64) : options.longs === Number ? new $util.LongBits(message.defaultSfixed64.low >>> 0, message.defaultSfixed64.high >>> 0).toNumber() : message.defaultSfixed64;
                if (message.defaultFloat != null && message.hasOwnProperty("defaultFloat"))
                    object.defaultFloat = options.json && !isFinite(message.defaultFloat) ? String(message.defaultFloat) : message.defaultFloat;
                if (message.defaultDouble != null && message.hasOwnProperty("defaultDouble"))
                    object.defaultDouble = options.json && !isFinite(message.defaultDouble) ? String(message.defaultDouble) : message.defaultDouble;
                if (message.defaultBool != null && message.hasOwnProperty("defaultBool"))
                    object.defaultBool = message.defaultBool;
                if (message.defaultString != null && message.hasOwnProperty("defaultString"))
                    object.defaultString = message.defaultString;
                if (message.defaultBytes != null && message.hasOwnProperty("defaultBytes"))
                    object.defaultBytes = options.bytes === String ? $util.base64.encode(message.defaultBytes, 0, message.defaultBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.defaultBytes) : message.defaultBytes;
                if (message.fieldname1 != null && message.hasOwnProperty("fieldname1"))
                    object.fieldname1 = message.fieldname1;
                if (message.fieldName2 != null && message.hasOwnProperty("fieldName2"))
                    object.fieldName2 = message.fieldName2;
                if (message._fieldName3 != null && message.hasOwnProperty("_fieldName3"))
                    object._fieldName3 = message._fieldName3;
                if (message.field_Name4_ != null && message.hasOwnProperty("field_Name4_"))
                    object.field_Name4_ = message.field_Name4_;
                if (message.field0name5 != null && message.hasOwnProperty("field0name5"))
                    object.field0name5 = message.field0name5;
                if (message.field_0Name6 != null && message.hasOwnProperty("field_0Name6"))
                    object.field_0Name6 = message.field_0Name6;
                if (message.fieldName7 != null && message.hasOwnProperty("fieldName7"))
                    object.fieldName7 = message.fieldName7;
                if (message.FieldName8 != null && message.hasOwnProperty("FieldName8"))
                    object.FieldName8 = message.FieldName8;
                if (message.field_Name9 != null && message.hasOwnProperty("field_Name9"))
                    object.field_Name9 = message.field_Name9;
                if (message.Field_Name10 != null && message.hasOwnProperty("Field_Name10"))
                    object.Field_Name10 = message.Field_Name10;
                if (message.FIELD_NAME11 != null && message.hasOwnProperty("FIELD_NAME11"))
                    object.FIELD_NAME11 = message.FIELD_NAME11;
                if (message.FIELDName12 != null && message.hasOwnProperty("FIELDName12"))
                    object.FIELDName12 = message.FIELDName12;
                if (message._FieldName13 != null && message.hasOwnProperty("_FieldName13"))
                    object._FieldName13 = message._FieldName13;
                if (message.__FieldName14 != null && message.hasOwnProperty("__FieldName14"))
                    object.__FieldName14 = message.__FieldName14;
                if (message.field_Name15 != null && message.hasOwnProperty("field_Name15"))
                    object.field_Name15 = message.field_Name15;
                if (message.field__Name16 != null && message.hasOwnProperty("field__Name16"))
                    object.field__Name16 = message.field__Name16;
                if (message.fieldName17__ != null && message.hasOwnProperty("fieldName17__"))
                    object.fieldName17__ = message.fieldName17__;
                if (message.FieldName18__ != null && message.hasOwnProperty("FieldName18__"))
                    object.FieldName18__ = message.FieldName18__;
                return object;
            };

            /**
             * Converts this TestAllTypesProto2 to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TestAllTypesProto2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TestAllTypesProto2
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestAllTypesProto2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto2.TestAllTypesProto2";
            };

            TestAllTypesProto2.NestedMessage = (function() {

                /**
                 * Properties of a NestedMessage.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @interface INestedMessage
                 * @property {number|null} [a] NestedMessage a
                 * @property {protobuf_test_messages.proto2.ITestAllTypesProto2|null} [corecursive] NestedMessage corecursive
                 */

                /**
                 * Constructs a new NestedMessage.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @classdesc Represents a NestedMessage.
                 * @implements INestedMessage
                 * @constructor
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage=} [properties] Properties to set
                 */
                function NestedMessage(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NestedMessage a.
                 * @member {number} a
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @instance
                 */
                NestedMessage.prototype.a = 0;

                /**
                 * NestedMessage corecursive.
                 * @member {protobuf_test_messages.proto2.ITestAllTypesProto2|null|undefined} corecursive
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @instance
                 */
                NestedMessage.prototype.corecursive = null;

                /**
                 * Creates a new NestedMessage instance using the specified properties.
                 * @function create
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage=} [properties] Properties to set
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage} NestedMessage instance
                 */
                NestedMessage.create = function create(properties) {
                    return new NestedMessage(properties);
                };

                /**
                 * Encodes the specified NestedMessage message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify|verify} messages.
                 * @function encode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage} message NestedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.a);
                    if (message.corecursive != null && Object.hasOwnProperty.call(message, "corecursive"))
                        $root.protobuf_test_messages.proto2.TestAllTypesProto2.encode(message.corecursive, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified NestedMessage message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.INestedMessage} message NestedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NestedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.a = reader.int32();
                                break;
                            }
                        case 2: {
                                message.corecursive = $root.protobuf_test_messages.proto2.TestAllTypesProto2.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a NestedMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage} NestedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NestedMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NestedMessage message.
                 * @function verify
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NestedMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.a != null && message.hasOwnProperty("a"))
                        if (!$util.isInteger(message.a))
                            return "a: integer expected";
                    if (message.corecursive != null && message.hasOwnProperty("corecursive")) {
                        let error = $root.protobuf_test_messages.proto2.TestAllTypesProto2.verify(message.corecursive);
                        if (error)
                            return "corecursive." + error;
                    }
                    return null;
                };

                /**
                 * Creates a NestedMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage} NestedMessage
                 */
                NestedMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage)
                        return object;
                    let message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage();
                    if (object.a != null)
                        message.a = object.a | 0;
                    if (object.corecursive != null) {
                        if (typeof object.corecursive !== "object")
                            throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage.corecursive: object expected");
                        message.corecursive = $root.protobuf_test_messages.proto2.TestAllTypesProto2.fromObject(object.corecursive);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a NestedMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage} message NestedMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NestedMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.a = 0;
                        object.corecursive = null;
                    }
                    if (message.a != null && message.hasOwnProperty("a"))
                        object.a = message.a;
                    if (message.corecursive != null && message.hasOwnProperty("corecursive"))
                        object.corecursive = $root.protobuf_test_messages.proto2.TestAllTypesProto2.toObject(message.corecursive, options);
                    return object;
                };

                /**
                 * Converts this NestedMessage to JSON.
                 * @function toJSON
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NestedMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for NestedMessage
                 * @function getTypeUrl
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NestedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage";
                };

                return NestedMessage;
            })();

            /**
             * NestedEnum enum.
             * @name protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum
             * @enum {number}
             * @property {number} FOO=0 FOO value
             * @property {number} BAR=1 BAR value
             * @property {number} BAZ=2 BAZ value
             * @property {number} NEG=-1 NEG value
             */
            TestAllTypesProto2.NestedEnum = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FOO"] = 0;
                values[valuesById[1] = "BAR"] = 1;
                values[valuesById[2] = "BAZ"] = 2;
                values[valuesById[-1] = "NEG"] = -1;
                return values;
            })();

            TestAllTypesProto2.Data = (function() {

                /**
                 * Properties of a Data.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @interface IData
                 * @property {number|null} [groupInt32] Data groupInt32
                 * @property {number|null} [groupUint32] Data groupUint32
                 */

                /**
                 * Constructs a new Data.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @classdesc Represents a Data.
                 * @implements IData
                 * @constructor
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IData=} [properties] Properties to set
                 */
                function Data(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Data groupInt32.
                 * @member {number} groupInt32
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @instance
                 */
                Data.prototype.groupInt32 = 0;

                /**
                 * Data groupUint32.
                 * @member {number} groupUint32
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @instance
                 */
                Data.prototype.groupUint32 = 0;

                /**
                 * Creates a new Data instance using the specified properties.
                 * @function create
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IData=} [properties] Properties to set
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.Data} Data instance
                 */
                Data.create = function create(properties) {
                    return new Data(properties);
                };

                /**
                 * Encodes the specified Data message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.Data.verify|verify} messages.
                 * @function encode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IData} message Data message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Data.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.groupInt32 != null && Object.hasOwnProperty.call(message, "groupInt32"))
                        writer.uint32(/* id 202, wireType 0 =*/1616).int32(message.groupInt32);
                    if (message.groupUint32 != null && Object.hasOwnProperty.call(message, "groupUint32"))
                        writer.uint32(/* id 203, wireType 0 =*/1624).uint32(message.groupUint32);
                    return writer;
                };

                /**
                 * Encodes the specified Data message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.Data.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IData} message Data message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Data.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Data message from the specified reader or buffer.
                 * @function decode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.Data} Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Data.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.Data();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if ((tag & 7) === 4)
                            break;
                        switch (tag >>> 3) {
                        case 202: {
                                message.groupInt32 = reader.int32();
                                break;
                            }
                        case 203: {
                                message.groupUint32 = reader.uint32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Data message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.Data} Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Data.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Data message.
                 * @function verify
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Data.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.groupInt32 != null && message.hasOwnProperty("groupInt32"))
                        if (!$util.isInteger(message.groupInt32))
                            return "groupInt32: integer expected";
                    if (message.groupUint32 != null && message.hasOwnProperty("groupUint32"))
                        if (!$util.isInteger(message.groupUint32))
                            return "groupUint32: integer expected";
                    return null;
                };

                /**
                 * Creates a Data message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.Data} Data
                 */
                Data.fromObject = function fromObject(object) {
                    if (object instanceof $root.protobuf_test_messages.proto2.TestAllTypesProto2.Data)
                        return object;
                    let message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.Data();
                    if (object.groupInt32 != null)
                        message.groupInt32 = object.groupInt32 | 0;
                    if (object.groupUint32 != null)
                        message.groupUint32 = object.groupUint32 >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Data message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.Data} message Data
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Data.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.groupInt32 = 0;
                        object.groupUint32 = 0;
                    }
                    if (message.groupInt32 != null && message.hasOwnProperty("groupInt32"))
                        object.groupInt32 = message.groupInt32;
                    if (message.groupUint32 != null && message.hasOwnProperty("groupUint32"))
                        object.groupUint32 = message.groupUint32;
                    return object;
                };

                /**
                 * Converts this Data to JSON.
                 * @function toJSON
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Data.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Data
                 * @function getTypeUrl
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.Data
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Data.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/protobuf_test_messages.proto2.TestAllTypesProto2.Data";
                };

                return Data;
            })();

            TestAllTypesProto2.MessageSetCorrect = (function() {

                /**
                 * Properties of a MessageSetCorrect.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @interface IMessageSetCorrect
                 * @property {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1|null} [".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension
                 * @property {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2|null} [".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension
                 */

                /**
                 * Constructs a new MessageSetCorrect.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @classdesc Represents a MessageSetCorrect.
                 * @implements IMessageSetCorrect
                 * @constructor
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrect=} [properties] Properties to set
                 */
                function MessageSetCorrect(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension.
                 * @member {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1|null|undefined} .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @instance
                 */
                MessageSetCorrect.prototype[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] = null;

                /**
                 * MessageSetCorrect .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension.
                 * @member {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2|null|undefined} .protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @instance
                 */
                MessageSetCorrect.prototype[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] = null;

                /**
                 * Creates a new MessageSetCorrect instance using the specified properties.
                 * @function create
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrect=} [properties] Properties to set
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect} MessageSetCorrect instance
                 */
                MessageSetCorrect.create = function create(properties) {
                    return new MessageSetCorrect(properties);
                };

                /**
                 * Encodes the specified MessageSetCorrect message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.verify|verify} messages.
                 * @function encode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrect} message MessageSetCorrect message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageSetCorrect.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] != null && Object.hasOwnProperty.call(message, ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"))
                        $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.encode(message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"], writer.uint32(/* id 1547769, wireType 2 =*/12382154).fork()).ldelim();
                    if (message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] != null && Object.hasOwnProperty.call(message, ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"))
                        $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.encode(message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"], writer.uint32(/* id 4135312, wireType 2 =*/33082498).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MessageSetCorrect message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrect} message MessageSetCorrect message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageSetCorrect.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageSetCorrect message from the specified reader or buffer.
                 * @function decode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect} MessageSetCorrect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageSetCorrect.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1547769: {
                                message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.decode(reader, reader.uint32());
                                break;
                            }
                        case 4135312: {
                                message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MessageSetCorrect message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect} MessageSetCorrect
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageSetCorrect.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageSetCorrect message.
                 * @function verify
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageSetCorrect.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] != null && message.hasOwnProperty(".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension")) {
                        let error = $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.verify(message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"]);
                        if (error)
                            return ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension." + error;
                    }
                    if (message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] != null && message.hasOwnProperty(".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension")) {
                        let error = $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.verify(message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"]);
                        if (error)
                            return ".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension." + error;
                    }
                    return null;
                };

                /**
                 * Creates a MessageSetCorrect message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect} MessageSetCorrect
                 */
                MessageSetCorrect.fromObject = function fromObject(object) {
                    if (object instanceof $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect)
                        return object;
                    let message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect();
                    if (object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] != null) {
                        if (typeof object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] !== "object")
                            throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect..protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension: object expected");
                        message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.fromObject(object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"]);
                    }
                    if (object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] != null) {
                        if (typeof object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] !== "object")
                            throw TypeError(".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect..protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension: object expected");
                        message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.fromObject(object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MessageSetCorrect message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect} message MessageSetCorrect
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageSetCorrect.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] = null;
                        object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] = null;
                    }
                    if (message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] != null && message.hasOwnProperty(".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"))
                        object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.toObject(message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.messageSetExtension"], options);
                    if (message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] != null && message.hasOwnProperty(".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"))
                        object[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"] = $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.toObject(message[".protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.messageSetExtension"], options);
                    return object;
                };

                /**
                 * Converts this MessageSetCorrect to JSON.
                 * @function toJSON
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageSetCorrect.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MessageSetCorrect
                 * @function getTypeUrl
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageSetCorrect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect";
                };

                return MessageSetCorrect;
            })();

            TestAllTypesProto2.MessageSetCorrectExtension1 = (function() {

                /**
                 * Properties of a MessageSetCorrectExtension1.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @interface IMessageSetCorrectExtension1
                 * @property {string|null} [str] MessageSetCorrectExtension1 str
                 */

                /**
                 * Constructs a new MessageSetCorrectExtension1.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @classdesc Represents a MessageSetCorrectExtension1.
                 * @implements IMessageSetCorrectExtension1
                 * @constructor
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1=} [properties] Properties to set
                 */
                function MessageSetCorrectExtension1(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageSetCorrectExtension1 str.
                 * @member {string} str
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @instance
                 */
                MessageSetCorrectExtension1.prototype.str = "";

                /**
                 * Creates a new MessageSetCorrectExtension1 instance using the specified properties.
                 * @function create
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1=} [properties] Properties to set
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1} MessageSetCorrectExtension1 instance
                 */
                MessageSetCorrectExtension1.create = function create(properties) {
                    return new MessageSetCorrectExtension1(properties);
                };

                /**
                 * Encodes the specified MessageSetCorrectExtension1 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                 * @function encode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1} message MessageSetCorrectExtension1 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageSetCorrectExtension1.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                        writer.uint32(/* id 25, wireType 2 =*/202).string(message.str);
                    return writer;
                };

                /**
                 * Encodes the specified MessageSetCorrectExtension1 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension1} message MessageSetCorrectExtension1 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageSetCorrectExtension1.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer.
                 * @function decode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1} MessageSetCorrectExtension1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageSetCorrectExtension1.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 25: {
                                message.str = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MessageSetCorrectExtension1 message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1} MessageSetCorrectExtension1
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageSetCorrectExtension1.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageSetCorrectExtension1 message.
                 * @function verify
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageSetCorrectExtension1.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.str != null && message.hasOwnProperty("str"))
                        if (!$util.isString(message.str))
                            return "str: string expected";
                    return null;
                };

                /**
                 * Creates a MessageSetCorrectExtension1 message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1} MessageSetCorrectExtension1
                 */
                MessageSetCorrectExtension1.fromObject = function fromObject(object) {
                    if (object instanceof $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1)
                        return object;
                    let message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1();
                    if (object.str != null)
                        message.str = String(object.str);
                    return message;
                };

                /**
                 * Creates a plain object from a MessageSetCorrectExtension1 message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1} message MessageSetCorrectExtension1
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageSetCorrectExtension1.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.str = "";
                    if (message.str != null && message.hasOwnProperty("str"))
                        object.str = message.str;
                    return object;
                };

                /**
                 * Converts this MessageSetCorrectExtension1 to JSON.
                 * @function toJSON
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageSetCorrectExtension1.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MessageSetCorrectExtension1
                 * @function getTypeUrl
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageSetCorrectExtension1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1";
                };

                return MessageSetCorrectExtension1;
            })();

            TestAllTypesProto2.MessageSetCorrectExtension2 = (function() {

                /**
                 * Properties of a MessageSetCorrectExtension2.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @interface IMessageSetCorrectExtension2
                 * @property {number|null} [i] MessageSetCorrectExtension2 i
                 */

                /**
                 * Constructs a new MessageSetCorrectExtension2.
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2
                 * @classdesc Represents a MessageSetCorrectExtension2.
                 * @implements IMessageSetCorrectExtension2
                 * @constructor
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2=} [properties] Properties to set
                 */
                function MessageSetCorrectExtension2(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageSetCorrectExtension2 i.
                 * @member {number} i
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @instance
                 */
                MessageSetCorrectExtension2.prototype.i = 0;

                /**
                 * Creates a new MessageSetCorrectExtension2 instance using the specified properties.
                 * @function create
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2=} [properties] Properties to set
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2} MessageSetCorrectExtension2 instance
                 */
                MessageSetCorrectExtension2.create = function create(properties) {
                    return new MessageSetCorrectExtension2(properties);
                };

                /**
                 * Encodes the specified MessageSetCorrectExtension2 message. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                 * @function encode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2} message MessageSetCorrectExtension2 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageSetCorrectExtension2.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.i != null && Object.hasOwnProperty.call(message, "i"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.i);
                    return writer;
                };

                /**
                 * Encodes the specified MessageSetCorrectExtension2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.IMessageSetCorrectExtension2} message MessageSetCorrectExtension2 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageSetCorrectExtension2.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer.
                 * @function decode
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2} MessageSetCorrectExtension2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageSetCorrectExtension2.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 9: {
                                message.i = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MessageSetCorrectExtension2 message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2} MessageSetCorrectExtension2
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageSetCorrectExtension2.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageSetCorrectExtension2 message.
                 * @function verify
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageSetCorrectExtension2.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.i != null && message.hasOwnProperty("i"))
                        if (!$util.isInteger(message.i))
                            return "i: integer expected";
                    return null;
                };

                /**
                 * Creates a MessageSetCorrectExtension2 message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2} MessageSetCorrectExtension2
                 */
                MessageSetCorrectExtension2.fromObject = function fromObject(object) {
                    if (object instanceof $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2)
                        return object;
                    let message = new $root.protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2();
                    if (object.i != null)
                        message.i = object.i | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a MessageSetCorrectExtension2 message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @static
                 * @param {protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2} message MessageSetCorrectExtension2
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageSetCorrectExtension2.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.i = 0;
                    if (message.i != null && message.hasOwnProperty("i"))
                        object.i = message.i;
                    return object;
                };

                /**
                 * Converts this MessageSetCorrectExtension2 to JSON.
                 * @function toJSON
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageSetCorrectExtension2.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MessageSetCorrectExtension2
                 * @function getTypeUrl
                 * @memberof protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageSetCorrectExtension2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2";
                };

                return MessageSetCorrectExtension2;
            })();

            return TestAllTypesProto2;
        })();

        proto2.ForeignMessageProto2 = (function() {

            /**
             * Properties of a ForeignMessageProto2.
             * @memberof protobuf_test_messages.proto2
             * @interface IForeignMessageProto2
             * @property {number|null} [c] ForeignMessageProto2 c
             */

            /**
             * Constructs a new ForeignMessageProto2.
             * @memberof protobuf_test_messages.proto2
             * @classdesc Represents a ForeignMessageProto2.
             * @implements IForeignMessageProto2
             * @constructor
             * @param {protobuf_test_messages.proto2.IForeignMessageProto2=} [properties] Properties to set
             */
            function ForeignMessageProto2(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ForeignMessageProto2 c.
             * @member {number} c
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @instance
             */
            ForeignMessageProto2.prototype.c = 0;

            /**
             * Creates a new ForeignMessageProto2 instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @static
             * @param {protobuf_test_messages.proto2.IForeignMessageProto2=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto2.ForeignMessageProto2} ForeignMessageProto2 instance
             */
            ForeignMessageProto2.create = function create(properties) {
                return new ForeignMessageProto2(properties);
            };

            /**
             * Encodes the specified ForeignMessageProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.ForeignMessageProto2.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @static
             * @param {protobuf_test_messages.proto2.IForeignMessageProto2} message ForeignMessageProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ForeignMessageProto2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.c != null && Object.hasOwnProperty.call(message, "c"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.c);
                return writer;
            };

            /**
             * Encodes the specified ForeignMessageProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.ForeignMessageProto2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @static
             * @param {protobuf_test_messages.proto2.IForeignMessageProto2} message ForeignMessageProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ForeignMessageProto2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ForeignMessageProto2 message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.ForeignMessageProto2} ForeignMessageProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ForeignMessageProto2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.ForeignMessageProto2();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.c = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ForeignMessageProto2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.ForeignMessageProto2} ForeignMessageProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ForeignMessageProto2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ForeignMessageProto2 message.
             * @function verify
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ForeignMessageProto2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.c != null && message.hasOwnProperty("c"))
                    if (!$util.isInteger(message.c))
                        return "c: integer expected";
                return null;
            };

            /**
             * Creates a ForeignMessageProto2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto2.ForeignMessageProto2} ForeignMessageProto2
             */
            ForeignMessageProto2.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto2.ForeignMessageProto2)
                    return object;
                let message = new $root.protobuf_test_messages.proto2.ForeignMessageProto2();
                if (object.c != null)
                    message.c = object.c | 0;
                return message;
            };

            /**
             * Creates a plain object from a ForeignMessageProto2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @static
             * @param {protobuf_test_messages.proto2.ForeignMessageProto2} message ForeignMessageProto2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ForeignMessageProto2.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.c = 0;
                if (message.c != null && message.hasOwnProperty("c"))
                    object.c = message.c;
                return object;
            };

            /**
             * Converts this ForeignMessageProto2 to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ForeignMessageProto2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ForeignMessageProto2
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto2.ForeignMessageProto2
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ForeignMessageProto2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto2.ForeignMessageProto2";
            };

            return ForeignMessageProto2;
        })();

        /**
         * ForeignEnumProto2 enum.
         * @name protobuf_test_messages.proto2.ForeignEnumProto2
         * @enum {number}
         * @property {number} FOREIGN_FOO=0 FOREIGN_FOO value
         * @property {number} FOREIGN_BAR=1 FOREIGN_BAR value
         * @property {number} FOREIGN_BAZ=2 FOREIGN_BAZ value
         */
        proto2.ForeignEnumProto2 = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FOREIGN_FOO"] = 0;
            values[valuesById[1] = "FOREIGN_BAR"] = 1;
            values[valuesById[2] = "FOREIGN_BAZ"] = 2;
            return values;
        })();

        proto2.UnknownToTestAllTypes = (function() {

            /**
             * Properties of an UnknownToTestAllTypes.
             * @memberof protobuf_test_messages.proto2
             * @interface IUnknownToTestAllTypes
             * @property {number|null} [optionalInt32] UnknownToTestAllTypes optionalInt32
             * @property {string|null} [optionalString] UnknownToTestAllTypes optionalString
             * @property {protobuf_test_messages.proto2.IForeignMessageProto2|null} [nestedMessage] UnknownToTestAllTypes nestedMessage
             * @property {protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup|null} [optionalGroup] UnknownToTestAllTypes optionalGroup
             * @property {boolean|null} [optionalBool] UnknownToTestAllTypes optionalBool
             * @property {Array.<number>|null} [repeatedInt32] UnknownToTestAllTypes repeatedInt32
             */

            /**
             * Constructs a new UnknownToTestAllTypes.
             * @memberof protobuf_test_messages.proto2
             * @classdesc Represents an UnknownToTestAllTypes.
             * @implements IUnknownToTestAllTypes
             * @constructor
             * @param {protobuf_test_messages.proto2.IUnknownToTestAllTypes=} [properties] Properties to set
             */
            function UnknownToTestAllTypes(properties) {
                this.repeatedInt32 = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UnknownToTestAllTypes optionalInt32.
             * @member {number} optionalInt32
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @instance
             */
            UnknownToTestAllTypes.prototype.optionalInt32 = 0;

            /**
             * UnknownToTestAllTypes optionalString.
             * @member {string} optionalString
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @instance
             */
            UnknownToTestAllTypes.prototype.optionalString = "";

            /**
             * UnknownToTestAllTypes nestedMessage.
             * @member {protobuf_test_messages.proto2.IForeignMessageProto2|null|undefined} nestedMessage
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @instance
             */
            UnknownToTestAllTypes.prototype.nestedMessage = null;

            /**
             * UnknownToTestAllTypes optionalGroup.
             * @member {protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup|null|undefined} optionalGroup
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @instance
             */
            UnknownToTestAllTypes.prototype.optionalGroup = null;

            /**
             * UnknownToTestAllTypes optionalBool.
             * @member {boolean} optionalBool
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @instance
             */
            UnknownToTestAllTypes.prototype.optionalBool = false;

            /**
             * UnknownToTestAllTypes repeatedInt32.
             * @member {Array.<number>} repeatedInt32
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @instance
             */
            UnknownToTestAllTypes.prototype.repeatedInt32 = $util.emptyArray;

            /**
             * Creates a new UnknownToTestAllTypes instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @static
             * @param {protobuf_test_messages.proto2.IUnknownToTestAllTypes=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes} UnknownToTestAllTypes instance
             */
            UnknownToTestAllTypes.create = function create(properties) {
                return new UnknownToTestAllTypes(properties);
            };

            /**
             * Encodes the specified UnknownToTestAllTypes message. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @static
             * @param {protobuf_test_messages.proto2.IUnknownToTestAllTypes} message UnknownToTestAllTypes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnknownToTestAllTypes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.optionalInt32 != null && Object.hasOwnProperty.call(message, "optionalInt32"))
                    writer.uint32(/* id 1001, wireType 0 =*/8008).int32(message.optionalInt32);
                if (message.optionalString != null && Object.hasOwnProperty.call(message, "optionalString"))
                    writer.uint32(/* id 1002, wireType 2 =*/8018).string(message.optionalString);
                if (message.nestedMessage != null && Object.hasOwnProperty.call(message, "nestedMessage"))
                    $root.protobuf_test_messages.proto2.ForeignMessageProto2.encode(message.nestedMessage, writer.uint32(/* id 1003, wireType 2 =*/8026).fork()).ldelim();
                if (message.optionalGroup != null && Object.hasOwnProperty.call(message, "optionalGroup"))
                    $root.protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.encode(message.optionalGroup, writer.uint32(/* id 1004, wireType 3 =*/8035)).uint32(/* id 1004, wireType 4 =*/8036);
                if (message.optionalBool != null && Object.hasOwnProperty.call(message, "optionalBool"))
                    writer.uint32(/* id 1006, wireType 0 =*/8048).bool(message.optionalBool);
                if (message.repeatedInt32 != null && message.repeatedInt32.length)
                    for (let i = 0; i < message.repeatedInt32.length; ++i)
                        writer.uint32(/* id 1011, wireType 0 =*/8088).int32(message.repeatedInt32[i]);
                return writer;
            };

            /**
             * Encodes the specified UnknownToTestAllTypes message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @static
             * @param {protobuf_test_messages.proto2.IUnknownToTestAllTypes} message UnknownToTestAllTypes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnknownToTestAllTypes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UnknownToTestAllTypes message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes} UnknownToTestAllTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnknownToTestAllTypes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.UnknownToTestAllTypes();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1001: {
                            message.optionalInt32 = reader.int32();
                            break;
                        }
                    case 1002: {
                            message.optionalString = reader.string();
                            break;
                        }
                    case 1003: {
                            message.nestedMessage = $root.protobuf_test_messages.proto2.ForeignMessageProto2.decode(reader, reader.uint32());
                            break;
                        }
                    case 1004: {
                            message.optionalGroup = $root.protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.decode(reader);
                            break;
                        }
                    case 1006: {
                            message.optionalBool = reader.bool();
                            break;
                        }
                    case 1011: {
                            if (!(message.repeatedInt32 && message.repeatedInt32.length))
                                message.repeatedInt32 = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.repeatedInt32.push(reader.int32());
                            } else
                                message.repeatedInt32.push(reader.int32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UnknownToTestAllTypes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes} UnknownToTestAllTypes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnknownToTestAllTypes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UnknownToTestAllTypes message.
             * @function verify
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnknownToTestAllTypes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.optionalInt32 != null && message.hasOwnProperty("optionalInt32"))
                    if (!$util.isInteger(message.optionalInt32))
                        return "optionalInt32: integer expected";
                if (message.optionalString != null && message.hasOwnProperty("optionalString"))
                    if (!$util.isString(message.optionalString))
                        return "optionalString: string expected";
                if (message.nestedMessage != null && message.hasOwnProperty("nestedMessage")) {
                    let error = $root.protobuf_test_messages.proto2.ForeignMessageProto2.verify(message.nestedMessage);
                    if (error)
                        return "nestedMessage." + error;
                }
                if (message.optionalGroup != null && message.hasOwnProperty("optionalGroup")) {
                    let error = $root.protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.verify(message.optionalGroup);
                    if (error)
                        return "optionalGroup." + error;
                }
                if (message.optionalBool != null && message.hasOwnProperty("optionalBool"))
                    if (typeof message.optionalBool !== "boolean")
                        return "optionalBool: boolean expected";
                if (message.repeatedInt32 != null && message.hasOwnProperty("repeatedInt32")) {
                    if (!Array.isArray(message.repeatedInt32))
                        return "repeatedInt32: array expected";
                    for (let i = 0; i < message.repeatedInt32.length; ++i)
                        if (!$util.isInteger(message.repeatedInt32[i]))
                            return "repeatedInt32: integer[] expected";
                }
                return null;
            };

            /**
             * Creates an UnknownToTestAllTypes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes} UnknownToTestAllTypes
             */
            UnknownToTestAllTypes.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto2.UnknownToTestAllTypes)
                    return object;
                let message = new $root.protobuf_test_messages.proto2.UnknownToTestAllTypes();
                if (object.optionalInt32 != null)
                    message.optionalInt32 = object.optionalInt32 | 0;
                if (object.optionalString != null)
                    message.optionalString = String(object.optionalString);
                if (object.nestedMessage != null) {
                    if (typeof object.nestedMessage !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.UnknownToTestAllTypes.nestedMessage: object expected");
                    message.nestedMessage = $root.protobuf_test_messages.proto2.ForeignMessageProto2.fromObject(object.nestedMessage);
                }
                if (object.optionalGroup != null) {
                    if (typeof object.optionalGroup !== "object")
                        throw TypeError(".protobuf_test_messages.proto2.UnknownToTestAllTypes.optionalGroup: object expected");
                    message.optionalGroup = $root.protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.fromObject(object.optionalGroup);
                }
                if (object.optionalBool != null)
                    message.optionalBool = Boolean(object.optionalBool);
                if (object.repeatedInt32) {
                    if (!Array.isArray(object.repeatedInt32))
                        throw TypeError(".protobuf_test_messages.proto2.UnknownToTestAllTypes.repeatedInt32: array expected");
                    message.repeatedInt32 = [];
                    for (let i = 0; i < object.repeatedInt32.length; ++i)
                        message.repeatedInt32[i] = object.repeatedInt32[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from an UnknownToTestAllTypes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @static
             * @param {protobuf_test_messages.proto2.UnknownToTestAllTypes} message UnknownToTestAllTypes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnknownToTestAllTypes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.repeatedInt32 = [];
                if (options.defaults) {
                    object.optionalInt32 = 0;
                    object.optionalString = "";
                    object.nestedMessage = null;
                    object.optionalGroup = null;
                    object.optionalBool = false;
                }
                if (message.optionalInt32 != null && message.hasOwnProperty("optionalInt32"))
                    object.optionalInt32 = message.optionalInt32;
                if (message.optionalString != null && message.hasOwnProperty("optionalString"))
                    object.optionalString = message.optionalString;
                if (message.nestedMessage != null && message.hasOwnProperty("nestedMessage"))
                    object.nestedMessage = $root.protobuf_test_messages.proto2.ForeignMessageProto2.toObject(message.nestedMessage, options);
                if (message.optionalGroup != null && message.hasOwnProperty("optionalGroup"))
                    object.optionalGroup = $root.protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.toObject(message.optionalGroup, options);
                if (message.optionalBool != null && message.hasOwnProperty("optionalBool"))
                    object.optionalBool = message.optionalBool;
                if (message.repeatedInt32 && message.repeatedInt32.length) {
                    object.repeatedInt32 = [];
                    for (let j = 0; j < message.repeatedInt32.length; ++j)
                        object.repeatedInt32[j] = message.repeatedInt32[j];
                }
                return object;
            };

            /**
             * Converts this UnknownToTestAllTypes to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnknownToTestAllTypes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UnknownToTestAllTypes
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UnknownToTestAllTypes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto2.UnknownToTestAllTypes";
            };

            UnknownToTestAllTypes.OptionalGroup = (function() {

                /**
                 * Properties of an OptionalGroup.
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
                 * @interface IOptionalGroup
                 * @property {number|null} [a] OptionalGroup a
                 */

                /**
                 * Constructs a new OptionalGroup.
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes
                 * @classdesc Represents an OptionalGroup.
                 * @implements IOptionalGroup
                 * @constructor
                 * @param {protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup=} [properties] Properties to set
                 */
                function OptionalGroup(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OptionalGroup a.
                 * @member {number} a
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @instance
                 */
                OptionalGroup.prototype.a = 0;

                /**
                 * Creates a new OptionalGroup instance using the specified properties.
                 * @function create
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @static
                 * @param {protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup=} [properties] Properties to set
                 * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup} OptionalGroup instance
                 */
                OptionalGroup.create = function create(properties) {
                    return new OptionalGroup(properties);
                };

                /**
                 * Encodes the specified OptionalGroup message. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.verify|verify} messages.
                 * @function encode
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @static
                 * @param {protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup} message OptionalGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OptionalGroup.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.a != null && Object.hasOwnProperty.call(message, "a"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.a);
                    return writer;
                };

                /**
                 * Encodes the specified OptionalGroup message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @static
                 * @param {protobuf_test_messages.proto2.UnknownToTestAllTypes.IOptionalGroup} message OptionalGroup message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OptionalGroup.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer.
                 * @function decode
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup} OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OptionalGroup.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if ((tag & 7) === 4)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.a = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OptionalGroup message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup} OptionalGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OptionalGroup.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OptionalGroup message.
                 * @function verify
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OptionalGroup.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.a != null && message.hasOwnProperty("a"))
                        if (!$util.isInteger(message.a))
                            return "a: integer expected";
                    return null;
                };

                /**
                 * Creates an OptionalGroup message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup} OptionalGroup
                 */
                OptionalGroup.fromObject = function fromObject(object) {
                    if (object instanceof $root.protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup)
                        return object;
                    let message = new $root.protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup();
                    if (object.a != null)
                        message.a = object.a | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an OptionalGroup message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @static
                 * @param {protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup} message OptionalGroup
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OptionalGroup.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.a = 0;
                    if (message.a != null && message.hasOwnProperty("a"))
                        object.a = message.a;
                    return object;
                };

                /**
                 * Converts this OptionalGroup to JSON.
                 * @function toJSON
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OptionalGroup.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for OptionalGroup
                 * @function getTypeUrl
                 * @memberof protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OptionalGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup";
                };

                return OptionalGroup;
            })();

            return UnknownToTestAllTypes;
        })();

        proto2.NullHypothesisProto2 = (function() {

            /**
             * Properties of a NullHypothesisProto2.
             * @memberof protobuf_test_messages.proto2
             * @interface INullHypothesisProto2
             */

            /**
             * Constructs a new NullHypothesisProto2.
             * @memberof protobuf_test_messages.proto2
             * @classdesc Represents a NullHypothesisProto2.
             * @implements INullHypothesisProto2
             * @constructor
             * @param {protobuf_test_messages.proto2.INullHypothesisProto2=} [properties] Properties to set
             */
            function NullHypothesisProto2(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new NullHypothesisProto2 instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @static
             * @param {protobuf_test_messages.proto2.INullHypothesisProto2=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto2.NullHypothesisProto2} NullHypothesisProto2 instance
             */
            NullHypothesisProto2.create = function create(properties) {
                return new NullHypothesisProto2(properties);
            };

            /**
             * Encodes the specified NullHypothesisProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.NullHypothesisProto2.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @static
             * @param {protobuf_test_messages.proto2.INullHypothesisProto2} message NullHypothesisProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NullHypothesisProto2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified NullHypothesisProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.NullHypothesisProto2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @static
             * @param {protobuf_test_messages.proto2.INullHypothesisProto2} message NullHypothesisProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NullHypothesisProto2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NullHypothesisProto2 message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.NullHypothesisProto2} NullHypothesisProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NullHypothesisProto2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.NullHypothesisProto2();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NullHypothesisProto2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.NullHypothesisProto2} NullHypothesisProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NullHypothesisProto2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NullHypothesisProto2 message.
             * @function verify
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NullHypothesisProto2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a NullHypothesisProto2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto2.NullHypothesisProto2} NullHypothesisProto2
             */
            NullHypothesisProto2.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto2.NullHypothesisProto2)
                    return object;
                return new $root.protobuf_test_messages.proto2.NullHypothesisProto2();
            };

            /**
             * Creates a plain object from a NullHypothesisProto2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @static
             * @param {protobuf_test_messages.proto2.NullHypothesisProto2} message NullHypothesisProto2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NullHypothesisProto2.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this NullHypothesisProto2 to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NullHypothesisProto2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NullHypothesisProto2
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto2.NullHypothesisProto2
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NullHypothesisProto2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto2.NullHypothesisProto2";
            };

            return NullHypothesisProto2;
        })();

        proto2.EnumOnlyProto2 = (function() {

            /**
             * Properties of an EnumOnlyProto2.
             * @memberof protobuf_test_messages.proto2
             * @interface IEnumOnlyProto2
             */

            /**
             * Constructs a new EnumOnlyProto2.
             * @memberof protobuf_test_messages.proto2
             * @classdesc Represents an EnumOnlyProto2.
             * @implements IEnumOnlyProto2
             * @constructor
             * @param {protobuf_test_messages.proto2.IEnumOnlyProto2=} [properties] Properties to set
             */
            function EnumOnlyProto2(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new EnumOnlyProto2 instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @static
             * @param {protobuf_test_messages.proto2.IEnumOnlyProto2=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto2.EnumOnlyProto2} EnumOnlyProto2 instance
             */
            EnumOnlyProto2.create = function create(properties) {
                return new EnumOnlyProto2(properties);
            };

            /**
             * Encodes the specified EnumOnlyProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.EnumOnlyProto2.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @static
             * @param {protobuf_test_messages.proto2.IEnumOnlyProto2} message EnumOnlyProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOnlyProto2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified EnumOnlyProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.EnumOnlyProto2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @static
             * @param {protobuf_test_messages.proto2.IEnumOnlyProto2} message EnumOnlyProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOnlyProto2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOnlyProto2 message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.EnumOnlyProto2} EnumOnlyProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOnlyProto2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.EnumOnlyProto2();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOnlyProto2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.EnumOnlyProto2} EnumOnlyProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOnlyProto2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOnlyProto2 message.
             * @function verify
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOnlyProto2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an EnumOnlyProto2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto2.EnumOnlyProto2} EnumOnlyProto2
             */
            EnumOnlyProto2.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto2.EnumOnlyProto2)
                    return object;
                return new $root.protobuf_test_messages.proto2.EnumOnlyProto2();
            };

            /**
             * Creates a plain object from an EnumOnlyProto2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @static
             * @param {protobuf_test_messages.proto2.EnumOnlyProto2} message EnumOnlyProto2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOnlyProto2.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this EnumOnlyProto2 to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOnlyProto2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumOnlyProto2
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto2.EnumOnlyProto2
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumOnlyProto2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto2.EnumOnlyProto2";
            };

            /**
             * Bool enum.
             * @name protobuf_test_messages.proto2.EnumOnlyProto2.Bool
             * @enum {number}
             * @property {number} kFalse=0 kFalse value
             * @property {number} kTrue=1 kTrue value
             */
            EnumOnlyProto2.Bool = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "kFalse"] = 0;
                values[valuesById[1] = "kTrue"] = 1;
                return values;
            })();

            return EnumOnlyProto2;
        })();

        proto2.OneStringProto2 = (function() {

            /**
             * Properties of an OneStringProto2.
             * @memberof protobuf_test_messages.proto2
             * @interface IOneStringProto2
             * @property {string|null} [data] OneStringProto2 data
             */

            /**
             * Constructs a new OneStringProto2.
             * @memberof protobuf_test_messages.proto2
             * @classdesc Represents an OneStringProto2.
             * @implements IOneStringProto2
             * @constructor
             * @param {protobuf_test_messages.proto2.IOneStringProto2=} [properties] Properties to set
             */
            function OneStringProto2(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneStringProto2 data.
             * @member {string} data
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @instance
             */
            OneStringProto2.prototype.data = "";

            /**
             * Creates a new OneStringProto2 instance using the specified properties.
             * @function create
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @static
             * @param {protobuf_test_messages.proto2.IOneStringProto2=} [properties] Properties to set
             * @returns {protobuf_test_messages.proto2.OneStringProto2} OneStringProto2 instance
             */
            OneStringProto2.create = function create(properties) {
                return new OneStringProto2(properties);
            };

            /**
             * Encodes the specified OneStringProto2 message. Does not implicitly {@link protobuf_test_messages.proto2.OneStringProto2.verify|verify} messages.
             * @function encode
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @static
             * @param {protobuf_test_messages.proto2.IOneStringProto2} message OneStringProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneStringProto2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
                return writer;
            };

            /**
             * Encodes the specified OneStringProto2 message, length delimited. Does not implicitly {@link protobuf_test_messages.proto2.OneStringProto2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @static
             * @param {protobuf_test_messages.proto2.IOneStringProto2} message OneStringProto2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneStringProto2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneStringProto2 message from the specified reader or buffer.
             * @function decode
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protobuf_test_messages.proto2.OneStringProto2} OneStringProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneStringProto2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protobuf_test_messages.proto2.OneStringProto2();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.data = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneStringProto2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protobuf_test_messages.proto2.OneStringProto2} OneStringProto2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneStringProto2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneStringProto2 message.
             * @function verify
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneStringProto2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                return null;
            };

            /**
             * Creates an OneStringProto2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protobuf_test_messages.proto2.OneStringProto2} OneStringProto2
             */
            OneStringProto2.fromObject = function fromObject(object) {
                if (object instanceof $root.protobuf_test_messages.proto2.OneStringProto2)
                    return object;
                let message = new $root.protobuf_test_messages.proto2.OneStringProto2();
                if (object.data != null)
                    message.data = String(object.data);
                return message;
            };

            /**
             * Creates a plain object from an OneStringProto2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @static
             * @param {protobuf_test_messages.proto2.OneStringProto2} message OneStringProto2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneStringProto2.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.data = "";
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                return object;
            };

            /**
             * Converts this OneStringProto2 to JSON.
             * @function toJSON
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneStringProto2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OneStringProto2
             * @function getTypeUrl
             * @memberof protobuf_test_messages.proto2.OneStringProto2
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OneStringProto2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protobuf_test_messages.proto2.OneStringProto2";
            };

            return OneStringProto2;
        })();

        return proto2;
    })();

    return protobuf_test_messages;
})();