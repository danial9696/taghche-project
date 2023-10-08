import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { CustomValidation } from 'src/types/forms/validation';
import * as yup from 'yup';

/**
 * The `useValidation` function is a TypeScript function that takes a Yup schema as input and returns
 * an object with control, handleSubmit, reset, and formState properties for form validation.
 * @param schema - The `schema` parameter is a Yup schema object that defines the validation rules for
 * the form fields. Yup is a JavaScript library for schema validation. It allows you to define a schema
 * with various validation rules such as required fields, minimum and maximum values, regular
 * expressions, and more. The `schema`
 * @returns The function `useValidation` returns an object with the following properties:
 */
const useValidation = <T extends FieldValues>(
  schema: yup.Schema<T>,
  defaultValues?: any,
): CustomValidation<T> => {
  const validationSchema = schema;

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<T>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return { control, handleSubmit, reset, formState: { errors, isValid } };
};

export default useValidation;
