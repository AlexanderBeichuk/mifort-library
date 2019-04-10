import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { SearchService } from '../../services/search.service';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';
import { AskForBookDialogComponent } from '../ask-for-book-dialog/ask-for-book-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})

export class BooksTableComponent implements OnInit {

  constructor(private booksService: BooksService, private searchService: SearchService, public dialog: MatDialog) {
  }

  public allBooks: Book[] = [];
  public updates: Book[] = [];
  public takenByMe: Book[] = [];
  public myWishlist: Book[] = [];
  public searchText: string;
  public searchFields: string[] = ['title', 'description'];

  ngOnInit() {
    this.booksService.getUpdatesList()
      .subscribe((updatesList: Book[]) => {
        this.updates = updatesList;
      });

    this.booksService.getBooksList()
      .subscribe(books => {
        this.allBooks = books;
      });

    this.booksService.getTakenByMe()
      .subscribe(books => {
        this.takenByMe = books;
      });

    this.booksService.getMyWishlist()
      .subscribe(books => {
        this.myWishlist = books;
      });

    this.searchService.searchText.subscribe(searchText => {
      this.searchText = searchText;
    });
  }

  public askForBook(): void {
    const dialogRef = this.dialog.open(AskForBookDialogComponent, {
      width: '500px',
      height: '310px'
    });

  }
}
