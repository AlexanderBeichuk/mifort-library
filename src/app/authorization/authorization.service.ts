import { Injectable } from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angular5-social-login';
import {SocialUser} from 'angular5-social-login/entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private socialAuthService: AuthService) { }

  public googleSignIn(): Promise<SocialUser> {
    return this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
