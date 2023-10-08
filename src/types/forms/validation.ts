import { Control, FieldErrors, FieldValues, UseFormReturn } from 'react-hook-form';

/**
 * The above type represents a custom validation object that includes control, handleSubmit, formState,
 * and reset properties.
 * @property control - The `control` property is an instance of the `Control` class from the React Hook
 * Form library. It is used to control and manage the form inputs and their validation.
 * @property handleSubmit - The `handleSubmit` property is a function provided by the `UseFormReturn`
 * hook from the React Hook Form library. It is used to handle form submission and trigger validation
 * for all fields in the form.
 * @property formState - The `formState` property is an object that contains two properties:
 * @property reset - The `reset` property is a function provided by the `UseFormReturn` hook that
 * allows you to reset the form fields to their initial values. It takes no arguments and returns void.
 */
export type CustomValidation<T extends FieldValues> = {
  control: Control<T>;
  handleSubmit: UseFormReturn<T>['handleSubmit'];
  formState: {
    errors: FieldErrors<T>;
    isValid: boolean;
  };
  reset: UseFormReturn<T>['reset'];
  defaultValues?: any;
};
