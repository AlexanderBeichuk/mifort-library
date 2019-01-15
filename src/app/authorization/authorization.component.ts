import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from './authorization.service';
import {SocialUser} from 'angular5-social-login';
import {User} from '../models/User';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  public googleSignIn(): void {
    this.authorizationService.googleSignIn()
      .then((socialUser: SocialUser) => {
        const user = new User(socialUser.id, socialUser.email, socialUser.name, socialUser.image);
        console.log(user);
      })
      .catch(error => console.error(error.message)); /*TODO snotify service*/
  }
}
