import { Validators } from '@angular/forms';
import { FormItem } from '@app/shared/interfaces/form-item';
import { AbstractForm } from '@app/shared/models/abstract-form';

export class LoginForm extends AbstractForm {
  constructor() {
    super();
    this.FormItems = [this.email, this.password];
  }

  public email: FormItem = {
    name: 'email',
    defaultValue: '',
    label: 'E-mail',
    type: 'email',
    validators: [
      { key: 'email', validator: Validators.email, validationMessage: 'Type a valid e-mail' },
      { key: 'required', validator: Validators.required, validationMessage: 'Type the e-mail' },
    ],
  };

  public password: FormItem = {
    name: 'password',
    defaultValue: '',
    label: 'Password',
    type: 'password',
    validators: [{ key: 'required', validator: Validators.required, validationMessage: 'Type the password' }],
  };
}
