import type { Message } from "../message.js";
import type { MessageType } from "../message-type.js";

/* eslint-disable @typescript-eslint/no-explicit-any -- unknown fields are represented with any */

/**
 * A field wrapper unwraps a message to a primitive value that is more
 * ergonomic for use as a message field.
 *
 * Note that this feature exists for google/protobuf/{wrappers,struct}.proto
 * and cannot be used to arbitrarily modify types in generated code.
 */
export interface FieldWrapper<T extends Message<T> = any, U = any> {
  wrapField(value: U): T;

  unwrapField(value: T): U;
}

/**
 * Wrap field values whose message type has a wrapper.
 */
export function wrapField<T extends Message<T>>(
  type: MessageType<T>,
  value: any
): T {
  if (value instanceof type) {
    return value;
  }
  if (type.fieldWrapper) {
    return type.fieldWrapper.wrapField(value);
  }
  throw new Error(
    `cannot unwrap field value, ${type.typeName} does not define a field wrapper`
  );
}

/**
 * Unwrap field values whose message type has a wrapper.
 */
export function unwrapField<T extends Message<T>>(
  type: MessageType<T>,
  value: T
): any {
  return type.fieldWrapper ? type.fieldWrapper.unwrapField(value) : value;
}
