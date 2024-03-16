import { FormInput } from '@app/core/types/form-input.type';
import { FormValidation } from '@app/shared/interfaces/form-validation';

export interface FormItem {
  name: string;
  defaultValue: unknown;
  label: string;
  type: FormInput;
  validators: Array<FormValidation>;
}
