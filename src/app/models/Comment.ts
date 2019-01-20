import {User} from './User';
import {DateHelper} from './DateHelper';

export class Comment {

  public readonly id: string;
  public user: User;
  public text: string;
  private _date: Date;

  constructor(
    id: string = null,
    user: User = new User(),
    text: string = null,
    date: Date | string = new Date()
  ) {
    this.id = id;
    this.user = user;
    this.text = text;
    this.date = date;
  }

  public get date(): Date | string {
    return this._date;
  }

  public set date(date: Date | string) {
    this._date = new DateHelper().convertStringToDate(date);
  }
}

export interface ResponseComment {
  id: string;
  user: User;
  text: string;
  date: string;
}
