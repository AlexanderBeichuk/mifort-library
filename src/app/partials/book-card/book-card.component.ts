import { Component, Input, OnInit } from '@angular/core';
import { Book, BookStatus } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { User, UserDTO } from '../../models/User';
import { AuthorizationService } from '../header/authorization/authorization.service';
import { CommentTypes } from '../../models/Comment';
import { Comment } from '../../models/Comment';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  public showAllComments = false;
  public defaultCommentsToShow = 1;
  public isAvailable: boolean;
  public takenByMe: boolean;
  public currentUser: UserDTO;
  public isMyFavorite = false;
  public commentTypes = CommentTypes;

  @Input()
  public book: Book;

  constructor(private booksService: BooksService, private authorisationService: AuthorizationService) {
  }

  ngOnInit() {
    this.isAvailable = this.book.status === BookStatus.available;

    this.authorisationService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.takenByMe = this.book.isTaken && this.book.takenBy.id === user.id;
    });
  }

  public get toggleCommentsButtonText(): string {
    return this.showAllComments ? 'Скрыть' : 'Посмотреть все';
  }

  public hasMoreComments(): boolean {
    return this.book.comments.length > this.defaultCommentsToShow;
  }

  public showComment(index: number): boolean {
    return index < this.defaultCommentsToShow || this.showAllComments;
  }

  public toggleComments(): void {
    this.showAllComments = !this.showAllComments;
  }

  public vote(position: boolean): void {
    this.book.addVote({
      userId: this.currentUser.id,
      nickName: this.currentUser.nickName,
      position
    });
    this.booksService.vote(this.book.id, position);
  }

  public addToWishlist(): void {
    this.isMyFavorite = !this.isMyFavorite;
    this.booksService.addToWishlist(this.book.id);
  }

  public removeFromWishlist(): void {
    this.booksService.removeFromWishlist(this.book.id);
  }

  public takeBook(takeTo: string): void {
    this.booksService.takeBook(this.book.id, takeTo);
  }

  public getInQueue(forWeeks: number): void {
    this.book.usersQueue = [
      ...this.book.usersQueue,
      {
        user: this.currentUser,
        forWeeks,
      }
    ];
  }

  public getOutOfQueue(): void {
    this.book.usersQueue = this.book.usersQueue.filter(({ user: { id } }) => id !== this.currentUser.id);
  }

  public get favoriteTooltip(): string {
    return this.isMyFavorite ? 'Убрать из избранного' : 'Добавить в избранное';
  }

  public addRating(type: CommentTypes): void {
    this.book.addComment(new Comment(
      '123',
      new User(
        this.currentUser.id,
        this.currentUser.email,
        this.currentUser.nickName,
        this.currentUser.avatar,
        this.currentUser.role
      ),
      '',
      CommentTypes[type],
    ));

    this.book.setRatings();
  }
}
