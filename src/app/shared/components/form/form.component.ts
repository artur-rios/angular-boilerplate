import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AbstractForm } from '@app/shared/models/abstract-form';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  @Input() formModel!: AbstractForm;
  @Input() formTitle: string = '';
  @Input() submitButton: string = 'Submit';

  @Output() formSubmit = new EventEmitter<unknown>();

  public form!: FormGroup;
  public submitted = false;

  ngOnInit(): void {
    this.form = this.formModel.BuildFormFromItems();
  }

  get f() {
    return this.form.controls;
  }

  public isFieldInvalid(field: string): boolean {
    return this.form.get(field)?.invalid ?? false;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}
