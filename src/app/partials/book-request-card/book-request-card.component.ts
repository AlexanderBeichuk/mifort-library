import { Component, Input, OnInit } from '@angular/core';
import { BookRequest } from '../../typing/book.request';
import { MatDialog } from '@angular/material';
import { ProcessRequestDialogComponent } from '../process-request-dialog/process-request-dialog.component';

@Component({
  selector: 'app-book-request-card',
  templateUrl: './book-request-card.component.html',
  styleUrls: ['./book-request-card.component.scss']
})
export class BookRequestCardComponent implements OnInit {

  @Input()
  public bookRequest: BookRequest;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public rejectBookRequest(): void {

  }

  public initAddBook(): void {
    this.dialog.open(ProcessRequestDialogComponent, {
      width: '700px',
      position: {
        top: '100px'
      }
    });
  }
}
