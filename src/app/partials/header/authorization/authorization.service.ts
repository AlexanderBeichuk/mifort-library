import { Injectable } from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angular5-social-login';
import {SocialUser} from 'angular5-social-login/entities/user';
import {StorageService} from '../../../services/storage.service';
import { UserDTO } from '../../../models/User';
import { Observable, of } from 'rxjs';

const BEARER_TOKEN = 'bearerToken';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  constructor(private socialAuthService: AuthService,
              private storageService: StorageService) { }

  public googleSignIn(): Promise<SocialUser> {
    return this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public setSessionToken(token: string): void {
    this.storageService.setLocalStorageItem(BEARER_TOKEN, token);
  }

  public getSessionToken(): string {
    return this.storageService.getLocalStorageItem(BEARER_TOKEN);
  }

  public getCurrentUser(): Observable<UserDTO> {
    return of({
      id: '987654',
      email: 'irina@mail.com',
      nickName: 'Irina',
      role: 'user'
    });
  }
}
