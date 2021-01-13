import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationsRoutingModule } from './authorizations-routing.module';
import { AuthorizationsComponent } from './authorizations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EntryComponent } from './entry/entry.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { RepeatedPasswordValidator } from './shared/validators/repeated-password.validator';


@NgModule({
  declarations: [
    AuthorizationsComponent,
    LoginComponent,
    RegisterComponent,
    EntryComponent,
    ToolbarComponent,
    RepeatedPasswordValidator
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthorizationsRoutingModule
  ]
})
export class AuthorizationsModule { }
