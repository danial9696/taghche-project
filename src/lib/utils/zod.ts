/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { z, ZodObject } from 'zod';

/**
 * The function `validateRequest` takes in an unknown data and a schema, and returns the parsed data
 * according to the schema.
 * @param {unknown} data - The `data` parameter is the input data that needs to be validated against
 * the provided schema. It can be of any type, as it is defined as `unknown`.
 * @param {T} schema - The `schema` parameter is a Zod schema object that defines the structure and
 * validation rules for the data being passed in. It is used to validate and parse the `data`
 * parameter.
 * @returns the parsed data according to the provided schema.
 */
export function validateRequest<T extends ZodObject<any>>(data: unknown, schema: T): z.infer<T> {
  return schema.parse(data);
}
