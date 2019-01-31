import {DateHelper} from './DateHelper';

const DEFAULT_BOOKS_COUNT = 1;
const NONE_ELEMENTS_COUNT = 0;

export class Book {

  public readonly id: string;
  public title: string;
  public image: string;
  public author: string;
  public description: string;
  public commentsCount: number;
  public labelIds: string[];
  public _count: number;
  private _availableCount: number;
  private _publishedDate: Date;
  private _createdDate: Date;

  private dateHelper: DateHelper = new DateHelper();

  constructor(
    id: string = null,
    title: string = null,
    image: string = null,
    author: string = null,
    description: string = null,
    count: number = DEFAULT_BOOKS_COUNT,
    availableCount: number = DEFAULT_BOOKS_COUNT,
    labelIds: string[] = [],
    publishedDate: Date | string = new Date(),
    createdDate: Date | string = new Date(),
    commentsCount: number = NONE_ELEMENTS_COUNT
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.author = author;
    this.description = description;
    this.count = count;
    this.availableCount = availableCount;
    this.publishedDate = publishedDate;
    this.createdDate = createdDate;
    this.commentsCount = commentsCount;
    this.labelIds = labelIds;
  }

  public get count(): number {
    return this._count;
  }

  public set count(count: number) {
    this._count = count < NONE_ELEMENTS_COUNT ? NONE_ELEMENTS_COUNT : count;
  }

  public get availableCount(): number {
    return this._availableCount;
  }

  public set availableCount(count: number) {
    this._availableCount = count > this.count ? this.count : count;
    if (this._availableCount < NONE_ELEMENTS_COUNT) {
      this._availableCount = NONE_ELEMENTS_COUNT;
    }
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
  author: string;
  description: string;
  count: number;
  availableCount: number;
  labelIds: string[];
  publishedDate: string;
  createdDate: string;
  commentsCount: number;
}
