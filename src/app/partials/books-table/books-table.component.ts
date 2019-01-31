import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/Book';
import {BOOKS, LABELS} from '../../models/mock';
import {Label} from '../../models/Item';
import {TableHead} from '../../models/Table';

const DEFAULT_BOOKS_HEADER: TableHead[] = [
  new TableHead(),
  new TableHead('Title', 'name', true),
  new TableHead('Author', 'author', true),
  new TableHead('Description', 'description', true),
  new TableHead('Count', 'count'),
  new TableHead('Labels', 'labelIds'),
  new TableHead()
];

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})

export class BooksTableComponent implements OnInit {

  constructor() { }

  public allBooks: Book[] = BOOKS;
  public headElements: TableHead[] = DEFAULT_BOOKS_HEADER;
  public allLabels: Label[] = LABELS;

  ngOnInit() {}

  public getBookLabels(book: Book): Label[] {
    return this.allLabels.filter(label => book.labelIds.some(id => id === label.id));
  }

}
