import { Injectable } from '@angular/core';
import {Notification} from '../models/Notification';
import {SnotifyService, SnotifyToastConfig} from 'ng-snotify';
import {NotificationConfig} from '../models/NotificationConfig';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snotifyService: SnotifyService) { }

  public show(notification: Notification): void {
    if (notification) {
      this.snotifyService[notification.status](notification.description, notification.title, this.setConfig(notification.config));
    }
  }

  private setConfig(notificationConfig: NotificationConfig): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: notificationConfig.isNewTop,
        maxAtPosition: notificationConfig.blockMax,
        maxOnScreen: notificationConfig.dockMax,
      }
    });
    const snotifyToastConfig: SnotifyToastConfig = {
      bodyMaxLength: notificationConfig.bodyMaxLength,
      titleMaxLength: notificationConfig.titleMaxLength,
      backdrop: notificationConfig.backdrop,
      position: notificationConfig.position,
      timeout: notificationConfig.timeout,
      showProgressBar: notificationConfig.isProgressBar,
      closeOnClick: notificationConfig.isCloseClick,
      pauseOnHover: notificationConfig.isPauseHover,
      icon: notificationConfig.icon
    };
    if (notificationConfig.animation) {
      snotifyToastConfig.animation = notificationConfig.animation;
    }
    return snotifyToastConfig;
  }
}
