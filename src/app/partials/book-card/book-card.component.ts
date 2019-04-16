import { Component, Input, OnInit } from '@angular/core';
import { Book, BookStatus } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { User, UserDTO, UserRole } from '../../models/User';
import { AuthorizationService } from '../header/authorization/authorization.service';
import { Comment, CommentTypes } from '../../models/Comment';
import { Router } from '@angular/router';
import { MessageDialogComponent } from '../mesage-dialog/message-dialog.component';
import { MatDialog } from '@angular/material';
import { EditBookDialogComponent } from '../edit-book-dialog/edit-book-dialog.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  public isExpanded = false;
  public isAvailable: boolean;
  public takenByMe: boolean;
  public currentUser: UserDTO;
  public isMyFavorite = false;
  public commentTypes = CommentTypes;
  public isAdmin = true;

  @Input()
  public book: Book;

  constructor(
    private booksService: BooksService,
    private authorisationService: AuthorizationService,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.isAvailable = this.book.status === BookStatus.available;

    this.authorisationService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.isAdmin = user.role === UserRole.admin;
      this.takenByMe = this.book.isTaken && this.book.takenBy.id === user.id;
    });
  }

  public get toggleCommentsButtonText(): string {
    return this.isExpanded ? 'Скрыть' : 'Посмотреть все';
  }

  public toggleCard(): void {
    this.isExpanded = !this.isExpanded;
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

  public initEditBook(): void {
    this.dialog.open(EditBookDialogComponent, {
      width: '700px',
      position: {
        top: '100px'
      },
      data: {book: this.book}
    });
  }

  public openCommentDialog() {
    this.dialog.open(MessageDialogComponent, {
      width: '500px',
      height: '310px',
      data: {user: this.book.takenBy}
    });
  }
}
