import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from './authorization.service';
import {SocialUser} from 'angular5-social-login';
import {User} from '../models/User';
import {NotificationStatus, UserRole} from '../models/config';
import {NotificationService} from '../services/notification.service';
import {Notification} from '../models/Notification';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService,
              private notificationService: NotificationService) { }

  ngOnInit() {
  }

  public googleSignIn(): void {
    this.authorizationService.googleSignIn()
      .then((socialUser: SocialUser) => {
        const user = new User(socialUser.id, socialUser.email, socialUser.name, socialUser.image, UserRole.admin);
        console.log(user);
      })
      .catch(error => this.notificationService.show(new Notification(NotificationStatus.Error, error.message)));
  }
}
