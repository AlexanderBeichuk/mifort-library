import { UserDTO, User } from './User';
import {DateHelper} from './DateHelper';

export enum CommentTypes {
  dislike,
  like
}

export class Comment {

  public readonly id: string;
  public user: User;
  public text: string;
  public type: CommentTypes;
  private _date: Date;

  constructor(
    id: string = null,
    user: User = new User(),
    text: string = null,
    type: string,
    date: Date | string = new Date()
  ) {
    this.id = id;
    this.user = user;
    this.text = text;
    this.type = CommentTypes[type];
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
  type: string;
  date: string;
}

export interface CommentDTO {
  id: string;
  user: UserDTO;
  text: string;
  type: string;
  date: string;
}
