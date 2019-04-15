import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { SearchService } from '../../services/search.service';
import { AskForBookDialogComponent } from '../ask-for-book-dialog/ask-for-book-dialog.component';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../header/authorization/authorization.service';
import { BookRequest } from '../../typing/book.request';

export interface BookFilter {
  overdue: boolean;
  ending: boolean;
  popular: boolean;
  searchText: string;
}

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent implements OnInit {

  public allBooks: Book[] = [];
  public updates: Book[] = [];
  public takenByMe: Book[] = [];
  public myWishlist: Book[] = [];
  public requests: BookRequest[] = [];
  public searchFields: string[] = ['title', 'description', 'author', 'publishedDate'];
  public filterForm: FormGroup;
  public isAdmin: Boolean;
  public filter: BookFilter = {
    overdue: false,
    ending: false,
    popular: false,
    searchText: '',
  };

  constructor(
    private booksService: BooksService,
    private authService: AuthorizationService,
    private searchService: SearchService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
  }

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

    this.booksService.getBookRequests()
      .subscribe(books => {
        this.requests = books;
      });

    this.searchService.searchText.subscribe(searchText => {
      if (this.filterForm) {
        this.filterForm.patchValue({ searchText });
      }
    });

    this.authService.isAdmin.subscribe((isAdmin: boolean) => {
      this.isAdmin = isAdmin;
    });

    this.initFilterForm();
  }

  public askForBook(): void {
    const dialogRef = this.dialog.open(AskForBookDialogComponent, {
      width: '500px',
      height: '310px'
    });
  }

  private initFilterForm(): void {
    this.filterForm = this.formBuilder.group({
      overdue: this.formBuilder.control(false),
      ending: this.formBuilder.control(false),
      popular: this.formBuilder.control(false),
      searchText: this.formBuilder.control('')
    });

    this.filterForm.valueChanges
      .subscribe(value => {
        this.filter = value;
      });
  }
}
