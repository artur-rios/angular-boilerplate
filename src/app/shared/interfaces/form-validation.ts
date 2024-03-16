import { ValidatorFn } from '@angular/forms';

export interface FormValidation {
  key: string;
  validator: ValidatorFn;
  validationMessage: string;
}
