import { DateHelper } from './DateHelper';
import { ResponseItem } from './Item';
import { CommentTypes, Comment } from './Comment';
import { UserDTO, User } from './User';
import { BookDetails, StatusDetailsDTO, Vote } from '../services/books.service';

const EMPTY_BOOK_DETAILS = {
  title: '',
  image: '',
  author: [],
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
  from: string;
  to: string;
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
  public votes: Vote[];
  public usersQueue: UsersQueueItem[];
  public takenBy: User;
  public isTaken: boolean;
  public takenFrom: Date;
  public takenTo: Date;
  private _publishedDate: Date;
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
    this.createdDate = createdDate;
    this.labels = details.labels;
    this.status = BookStatus[status];
    this.inLibrary = statusWithRating.includes(status);
    this.isUnderVoting = status === BookStatus.voting;
    this.isTaken = status === BookStatus.taken;

    if (this.inLibrary) {
      this.likesCount = comments.filter(comment => comment.type === CommentTypes.like).length;
      this.dislikesCount = comments.filter(comment => comment.type === CommentTypes.dislike).length;
      this.comments = comments;
    }

    if (this.isTaken) {
      this.usersQueue = statusDetails.usersQueue;
      const { id, email, nickName, avatar, role } = statusDetails.takenBy;
      this.takenBy = new User(id, email, nickName, avatar, role);
      this.takenFrom = new Date(statusDetails.takenFrom);
      this.takenTo = new Date(statusDetails.takenTo);
    }

    if (this.isUnderVoting) {
      this.votes = statusDetails.votes;
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

  public addVote(vote: Vote): void {
    this.votes = [...this.votes, vote];
  }
}
