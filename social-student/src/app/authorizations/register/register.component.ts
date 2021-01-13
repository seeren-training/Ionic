import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';

import { AuthorizationsHttpService } from '../shared/services/authorizations-http.service';
import { RegisterFormService } from './shared/services/register-form.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  public error: HttpErrorResponse;

  constructor(
    private authorizationsHttpService: AuthorizationsHttpService,
    private registerFormService: RegisterFormService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.registerFormService.create();
  }

  ionViewDidLeave(): void {
    this.registerForm.reset();
    this.error = null;
  }

  register() {
    this.authorizationsHttpService
      .register(this.registerForm)
      .subscribe(
        () => this.router.navigate(["/authorizations", "login"]),
        (error: HttpErrorResponse) => this.error = error,
      );
  }

}
