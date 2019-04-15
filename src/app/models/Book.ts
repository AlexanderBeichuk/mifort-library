import { DateHelper } from './DateHelper';
import { ResponseItem } from './Item';
import { Comment, CommentTypes } from './Comment';
import { User, UserDTO } from './User';
import { BookDetails, StatusDetailsDTO, Vote } from '../services/books.service';
import * as moment from 'moment';
import { Moment } from 'moment';
import { BOOK_ENDING_PERIOD } from '../app.config';

const EMPTY_BOOK_DETAILS = {
  title: '',
  image: '',
  author: '',
  description: '',
  labels: [],
  publishedDate: '',
};

export enum BookStatus {
  requested = 'requested',
  voting = 'voting',
  shipping = 'shipping',
  available = 'available',
  taken = 'taken',
  declined = 'declined',
  lost = 'lost',
}

export interface UsersQueueItem {
  user: UserDTO;
  forWeeks: number;
  from?: Moment;
  to?: Moment;
  fromFormatted?: string;
  toFormatted?: string;
}

export const statusWithRating = ['available', 'taken', 'declined', 'lost'];

export class Book {

  public readonly id: string;
  public title: string;
  public image: string;
  public author: string;
  public description: string;
  public pages: number;
  public isbn: string;
  public comments: Comment[];
  public commonRating: Comment[];
  public labels: ResponseItem[];
  public status: BookStatus;
  public likesCount: number;
  public dislikesCount: number;
  public inLibrary: boolean;
  public isUnderVoting: boolean;
  public votes: Vote[];
  public usersQueue: UsersQueueItem[];
  public takenBy: User;
  public isTaken: boolean;
  public takenFrom: Date;
  public takenTo: Date;
  public publishedDate: string;
  public daysLeft: number;
  public isOverdue: boolean;
  public isEnding: boolean;
  private _createdDate: Date;

  private dateHelper: DateHelper = new DateHelper();

  constructor(
    userId: string = null,
    details: BookDetails = EMPTY_BOOK_DETAILS,
    status: string = null,
    createdDate: Date | string = new Date(),
    comments: Comment[] = [],
    statusDetails: StatusDetailsDTO = {}
  ) {
    this.id = userId;
    this.title = details.title;
    this.image = details.image;
    this.author = details.author;
    this.description = details.description;
    this.publishedDate = details.publishedDate;
    this.pages = details.pages;
    this.isbn = details.isbn;
    this.createdDate = createdDate;
    this.labels = details.labels;
    this.status = BookStatus[status];
    this.inLibrary = statusWithRating.includes(status);
    this.isUnderVoting = status === BookStatus.voting;
    this.isTaken = status === BookStatus.taken;

    if (this.inLibrary) {
      this.commonRating = comments;
      this.setRatings();
    }

    if (this.isTaken) {
      this.usersQueue = statusDetails.usersQueue;
      const { id, email, nickName, avatar, role } = statusDetails.takenBy;
      this.takenBy = new User(id, email, nickName, avatar, role);
      this.takenFrom = new Date(statusDetails.takenFrom);
      this.takenTo = new Date(statusDetails.takenTo);
      this.daysLeft = this.calculateLeftDays();
      this.isOverdue = this.daysLeft < 0;
      this.isEnding = !this.isOverdue && this.daysLeft <= BOOK_ENDING_PERIOD;
    }

    if (this.isUnderVoting) {
      this.votes = statusDetails.votes;
    }
  }

  public get createdDate(): Date | string {
    return this._createdDate;
  }

  public set createdDate(date: Date | string) {
    this._createdDate = this.dateHelper.convertStringToDate(date);
  }

  public addVote(vote: Vote): void {
    this.votes = [...this.votes, vote];
  }

  public addComment(comment: Comment) {
    this.commonRating.push(comment);
    this.setRatings();
  }

  public setRatings(): void {
    this.likesCount = this.commonRating.filter(comment => comment.type === CommentTypes.like).length;
    this.dislikesCount = this.commonRating.filter(comment => comment.type === CommentTypes.dislike).length;
    this.comments = this.commonRating.filter(({text}) => !!text);
  }

  private calculateLeftDays(): number {
    const now = moment().endOf('day');
    const endDate = moment(this.takenTo).endOf('day');
    return endDate.diff(now, 'days');
  }
}
