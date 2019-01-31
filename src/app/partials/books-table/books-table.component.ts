import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {TableHead, TablePagination} from '../../models/Table';
import {BOOKS, LABELS} from '../../models/mock';
import {Label} from '../../models/Item';
import {MdbTablePaginationComponent, MdbTableService} from 'angular-bootstrap-md';
import {Book} from '../../models/Book';

const DEFAULT_BOOKS_HEADER: TableHead[] = [
  new TableHead(),
  new TableHead('Title', true),
  new TableHead('Author', true),
  new TableHead('Description', true),
  new TableHead('Count'),
  new TableHead('Labels'),
  new TableHead()
];

const BOOK_SEE_PAGE = {
  bookList: 5
};

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})

export class BooksTableComponent implements OnInit, AfterViewInit {

  constructor(
    private tableService: MdbTableService
  ) { }

  @ViewChild(MdbTablePaginationComponent)
  public mdbTablePagination: MdbTablePaginationComponent;
  public allBooks: Book[] = BOOKS;
  public headers: TableHead[] = DEFAULT_BOOKS_HEADER;
  public allLabels: Label[] = LABELS;
  public firstItemIndex: number;
  public lastItemIndex: number;

  ngOnInit() {
    this.tableService.setDataSource(this.allBooks);
    this.allBooks = this.tableService.getDataSource();
  }

  public getBookLabels(book: Book): Label[] {
    return this.allLabels.filter(label => book.labelIds.some(id => id === label.id));
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(BOOK_SEE_PAGE.bookList);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
  }

  onNextPageClick(data: TablePagination): void {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: TablePagination): void {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

}
