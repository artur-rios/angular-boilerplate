import { Component } from '@angular/core';
import { DialogService } from '@app/core/services/dialog.service';
import { LoaderService } from '@app/core/services/loader.service';
import { LoginForm } from '@app/features/authentication/models/login.form';
import { LoginModel } from '@app/features/authentication/models/login.model';
import { FormComponent } from '@app/shared/components/form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public form = new LoginForm();

  constructor(
    private dialogService: DialogService,
    private loaderService: LoaderService
  ) {}

  public onSubmit(formValue: unknown): void {
    // TODO Login submit
    const credentials = formValue as LoginModel;

    this.loaderService.enable();
    setTimeout(() => {
      this.loaderService.disable();
      this.dialogService.openSimpleDialog({
        Buttons: ['OK'],
        Message: `Submitted email: ${credentials.email}`,
        Title: 'Test',
      });
    }, 3000);
  }
}
