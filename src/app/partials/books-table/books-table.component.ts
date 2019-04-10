import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})

export class BooksTableComponent implements OnInit {

  constructor(private booksService: BooksService, private searchService: SearchService) {
  }

  public allBooks: Book[] = [];
  public updates: Book[] = [];
  public takenByMe: Book[] = [];
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

    this.searchService.searchText.subscribe(searchText => {
      this.searchText = searchText;
    });
  }
}
