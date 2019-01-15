import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from 'angular5-social-login';
import {GET_AUTHORIZATION_SERVICE_CONFIG} from './config';

@NgModule({
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  declarations: [AuthorizationComponent],
  providers: [{
     provide: AuthServiceConfig,
     useFactory: GET_AUTHORIZATION_SERVICE_CONFIG
  }],
})
export class AuthorizationModule { }
