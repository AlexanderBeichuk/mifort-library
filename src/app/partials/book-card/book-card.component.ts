import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { PeriodSheetComponent } from './components/period-sheet';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  public showAllComments = false;
  public defaultCommentsToShow = 1;

  @Input()
  public book: Book;
  public listOptions = [
    {
      name: 'На 1 неделю',
      value: 1
    },
    {
      name: 'На 2 недели',
      value: 2
    },
    {
      name: 'На 3 недели',
      value: 3
    },
    {
      name: 'На 4 недели',
      value: 4
    }
  ];

  private daysInWeek = 7;
  constructor(private booksService: BooksService, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
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

  public takeBook(weeks: number): void {
    this.booksService.takeBook(this.book.id, weeks);
  }

  public tillDate(weeks): Date {
    const date = new Date();
    date.setDate(date.getDate() + this.daysInWeek * weeks);
    return date;
  }
}
