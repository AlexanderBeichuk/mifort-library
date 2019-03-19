import {DateHelper} from './DateHelper';

const NONE_ELEMENTS_COUNT = 0;

export enum BookStatus {
  requested = 'Requested',
  voting = 'Voting',
  shipping = 'Shipping',
  available = 'Available',
  taken = 'Taken',
  declined = 'Declined',
  lost = 'Lost',
}

export class Book {

  public readonly id: string;
  public title: string;
  public image: string;
  public author: string[];
  public description: string;
  public commentsCount: number;
  public labelIds: string[];
  public status: BookStatus;
  private _publishedDate: Date;
  private _createdDate: Date;

  private dateHelper: DateHelper = new DateHelper();

  constructor(
    id: string = null,
    title: string = null,
    image: string = null,
    author: string[] = [],
    description: string = null,
    labelIds: string[] = [],
    status: BookStatus = null,
    publishedDate: Date | string = new Date(),
    createdDate: Date | string = new Date(),
    commentsCount: number = NONE_ELEMENTS_COUNT
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.author = author;
    this.description = description;
    this.publishedDate = publishedDate;
    this.createdDate = createdDate;
    this.commentsCount = commentsCount;
    this.labelIds = labelIds;
    this.status = BookStatus[status];
  }

  public get publishedDate(): Date | string {
    return this._publishedDate;
  }

  public set publishedDate(date: Date | string) {
    this._publishedDate = this.dateHelper.convertStringToDate(date);
  }

  public get createdDate(): Date | string {
    return this._createdDate;
  }

  public set createdDate(date: Date | string) {
    this._createdDate = this.dateHelper.convertStringToDate(date);
  }
}

export interface ResponseBook {
  id: string;
  title: string;
  image: string;
  author: string[];
  description: string;
  labelIds: string[];
  publishedDate: string;
  createdDate: string;
  commentsCount: number;
}
