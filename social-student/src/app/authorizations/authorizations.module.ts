import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationsRoutingModule } from './authorizations-routing.module';
import { AuthorizationsComponent } from './authorizations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EntryComponent } from './entry/entry.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthorizationsComponent,
    LoginComponent,
    RegisterComponent,
    EntryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthorizationsRoutingModule
  ]
})
export class AuthorizationsModule { }
