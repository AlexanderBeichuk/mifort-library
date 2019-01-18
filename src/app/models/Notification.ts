import {NotificationConfig, NotificationStatus} from './NotificationConfig';

export class Notification {
  constructor (
    public status: NotificationStatus = NotificationStatus.Success,
    public title: string = NotificationStatus.Success,
    public description: string = NotificationStatus.Success,
    public config: NotificationConfig = new NotificationConfig()
  ) { }
}
