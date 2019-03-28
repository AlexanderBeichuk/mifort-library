import { Component, Input, OnInit } from '@angular/core';
import { Book, BookStatus } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { User, UserDTO } from '../../models/User';
import { AuthorizationService } from '../header/authorization/authorization.service';

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
    this.book.addVote(position);
    this.booksService.vote(this.book.id, position);
  }

  public addToWishlist(): void {
    this.booksService.addToWishlist(this.book.id);
  }

  public removeFromWishlist(): void {
    this.booksService.removeFromWishlist(this.book.id);
  }

  public takeBook(takeTo: string): void {
    this.booksService.takeBook(this.book.id, takeTo);
  }

  public getInQueue({from, to}): void {
    this.book.usersQueue.push({
      user: this.currentUser,
      from,
      to
    });
  }
}
