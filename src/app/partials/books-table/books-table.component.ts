import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/Book';
import {BOOKS, LABELS} from '../../models/mock';
import {Label} from '../../models/Item';

const DEFAULT_BOOKS_HEADER: string[] = ['', 'Title', 'Author', 'Description', 'Count', 'Labels', ''];

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})

export class BooksTableComponent implements OnInit {

  constructor() { }

  public allBooks: Book[] = BOOKS;
  public headElements: string[] = DEFAULT_BOOKS_HEADER;
  public allLabels: Label[] = LABELS;

  ngOnInit() {}

  public getBookLabels(book: Book): Label[] {
    return this.allLabels.filter(label => book.labelIds.some(id => id === label.id));
  }

}
