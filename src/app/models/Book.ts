import {DateHelper} from './DateHelper';
import { ResponseItem } from './Item';
import { CommentTypes, Comment } from './Comment';

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

export const statusWithRating = ['available', 'taken', 'declined', 'lost'];

export class Book {

  public readonly id: string;
  public title: string;
  public image: string;
  public author: string[];
  public description: string;
  public comments: Comment[];
  public labels: ResponseItem[];
  public status: BookStatus;
  public likesCount: number;
  public dislikesCount: number;
  public inLibrary: boolean;
  public isUnderVoting: boolean;
  public votesAgainst: number;
  public votesFor: number;
  private _publishedDate: Date;
  private _createdDate: Date;

  private dateHelper: DateHelper = new DateHelper();

  constructor(
    id: string = null,
    title: string = null,
    image: string = null,
    author: string[] = [],
    description: string = null,
    labels: ResponseItem[] = [],
    status: string = null,
    publishedDate: Date | string = new Date(),
    createdDate: Date | string = new Date(),
    comments: Comment[] = [],
    votesAgainst: number = 0,
    votesFor: number = 0,
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.author = author;
    this.description = description;
    this.publishedDate = publishedDate;
    this.createdDate = createdDate;
    this.comments = comments;
    this.labels = labels;
    this.status = BookStatus[status];
    this.inLibrary = statusWithRating.includes(status);
    this.isUnderVoting = status === BookStatus.voting;
    this.likesCount = comments.filter(comment => comment.type === CommentTypes.like).length;
    this.dislikesCount = comments.filter(comment => comment.type === CommentTypes.dislike).length;
    this.votesAgainst = votesAgainst;
    this.votesFor = votesFor;
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

  public addVote(position): void {
    if (position) {
      this.votesFor++;
    } else {
      this.votesAgainst++;
    }
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
