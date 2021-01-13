import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private builder: FormBuilder) { }

  create(): FormGroup {
    return this.builder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required]
    });
  }

}