import {Book} from './Book';
import {User} from './User';

export enum EventType {
  take = 'take',
  return = 'return',
  makeReservation = 'reservation'
}

export class Event {

  public readonly id;
  public book: Book;
  public user: User;
  public date: number;
  public type: EventType;

  constructor(
    id: string = null,
    book: Book = new Book(),
    user: User = new User(),
    date: number = new Date().getTime(),
    type: EventType | string = EventType.take
  ) {
    this.id = id;
    this.book = book;
    this.user = user;
    this.date = date;
    this.type = EventType[type] || EventType.take;
  }
}
