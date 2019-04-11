import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from './authorization.service';
import {SocialUser} from 'angular5-social-login';
import {User, UserRole} from '../../../models/User';
import {NotificationService} from '../../../services/notification.service';
import {Notification, NotificationStatus} from '../../../models/Notification';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly notificationService: NotificationService
  ) { }

  ngOnInit() { }

  public googleSignIn(): void {
    this.authorizationService.googleSignIn()
      .then((socialUser: SocialUser) => {
        const user = new User(socialUser.id, socialUser.email, socialUser.name, socialUser.image, UserRole.admin);
        this.authorizationService.updateUser(user);
        console.log(user);
      })
      .catch(error => this.notificationService.show(new Notification(NotificationStatus.Error, error.message)));
  }
}
