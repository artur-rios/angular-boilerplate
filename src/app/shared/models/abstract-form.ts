import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { FormItem } from '@app/shared/interfaces/form-item';
import { FormValidation } from '@app/shared/interfaces/form-validation';

export class AbstractForm {
  public FormItems: Array<FormItem> = [];

  public BuildFormFromItems(): FormGroup {
    const formGroup = new FormGroup({});

    this.FormItems.forEach((item) => {
      const validators: ValidatorFn[] = item.validators.map<ValidatorFn>(this.GetValidatorFromItem);
      formGroup.addControl(item.name, new FormControl(item.defaultValue, validators));
    });

    return formGroup;
  }

  public GetValidatorFromItem(item: FormValidation): ValidatorFn {
    return item.validator;
  }
}
