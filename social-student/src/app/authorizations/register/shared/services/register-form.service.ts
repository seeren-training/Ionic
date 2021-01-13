import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RepeatedPasswordValidator } from 'src/app/authorizations/shared/validators/repeated-password.validator';


@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  constructor(
    private builder: FormBuilder,
    private confirmValidator: RepeatedPasswordValidator) { }

  create(): FormGroup {
    return this.builder.group({
      username: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required],
      confirm: ['', [this.confirmValidator]]
    });
  }

}
