import { Component, Input, OnInit } from '@angular/core';
import { BookRequest } from '../../typing/book.request';

@Component({
  selector: 'app-book-request-card',
  templateUrl: './book-request-card.component.html',
  styleUrls: ['./book-request-card.component.scss']
})
export class BookRequestCardComponent implements OnInit {

  @Input()
  public bookRequest: BookRequest;

  constructor() { }

  ngOnInit() {
  }

  public rejectBookRequest(): void {

  }

  public initAddBook(): void {

  }
}
