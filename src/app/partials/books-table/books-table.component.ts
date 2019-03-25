import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})

export class BooksTableComponent implements OnInit {

  constructor(private booksService: BooksService) {
  }

  public allBooks: Book[] = [];
  public updates: Book[] = [];
  public wishlist: Book[] = [];

  ngOnInit() {
    this.booksService.getUpdatesList()
      .subscribe((updatesList: Book[]) => {
        this.updates = updatesList;
      });

    this.booksService.getBooksList()
      .subscribe(books => {
        this.allBooks = books;
      });
  }
}
