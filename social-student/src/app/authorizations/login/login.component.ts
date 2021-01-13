import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { AuthorizationsHttpService } from '../shared/services/authorizations-http.service';
import { LoginFormService } from './shared/services/login-form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public error: HttpErrorResponse;

  public loginForm: FormGroup;

  constructor(
    private loginFormService: LoginFormService,
    private authorizationsHttpService: AuthorizationsHttpService,
    private router: Router) { }

  ngOnInit(): void {
    // if (this.userService.has()) {
    //   this.router.navigate(["/contacts", "dashboard"]);
    // }
    this.loginForm = this.loginFormService.create();
  }

  login(): void {
    console.log("LOGIN");
    this.authorizationsHttpService
      .login(this.loginForm)
      .subscribe(
        (user: User) => {
          console.log("Je suis dans subscribe");
         
          // this.router.navigate(["/contacts", "dashboard"])
        },
        (error: HttpErrorResponse) => this.error = error
      )
  }

}
