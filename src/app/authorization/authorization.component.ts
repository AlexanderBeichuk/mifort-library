import { Component, OnInit } from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angular5-social-login';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  public socialSignIn(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        console.log('sign in data : ' , userData);
      }
    );
  }
}
