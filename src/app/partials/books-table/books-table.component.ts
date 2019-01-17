import { Component, OnInit } from '@angular/core';
import {Book} from '../../models/Book';
import {BOOKS} from '../../models/mock';

const DEFAULT_BOOKS_HEADER: string[] = ['', 'Title', 'Author', 'Description', 'Count', 'Labels', ''];

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})

export class BooksTableComponent implements OnInit {

  constructor() { }

  public previewBooks: Book[] = BOOKS;
  public headElements: string[] = DEFAULT_BOOKS_HEADER;

  ngOnInit() {
  }

}
