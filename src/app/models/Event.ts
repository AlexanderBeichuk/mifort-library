import {Book} from './Book';
import {User} from './User';
import {DateHelper} from './DateHelper';
import {EnumValues} from 'enum-values';

export enum EventType {
  take = 'take',
  return = 'return',
  makeReservation = 'reservation'
}

export class Event {

  public readonly id;
  public book: Book;
  public user: User;
  private _type: EventType;
  private _date: Date;


  constructor(
    id: string = null,
    book: Book = new Book(),
    user: User = new User(),
    date: Date | string = new Date(),
    type: EventType | string = EventType.take
  ) {
    this.id = id;
    this.book = book;
    this.user = user;
    this.date = date;
    this.type = type;
  }

  public get type(): EventType | string {
    return this._type;
  }

  public set type(type: EventType | string) {
    const orderName = EnumValues.getNameFromValue(EventType, type);
    this._type = orderName ? EventType[orderName] : EventType.take;
  }

  public get date(): Date | string {
    return this._date;
  }

  public set date(date: Date | string) {
    this._date = new DateHelper().convertStringToDate(date);
  }
}

export interface ResponseEvent {
  id: string;
  book: Book;
  user: User;
  type: string;
  date: string;
}
