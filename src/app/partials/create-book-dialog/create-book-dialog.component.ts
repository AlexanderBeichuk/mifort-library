import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-create-book-dialog',
  templateUrl: './create-book-dialog.component.html',
  styleUrls: ['./create-book-dialog.component.scss']
})
export class CreateBookDialogComponent implements OnInit {

  public book: Book;

  constructor(public dialogRef: MatDialogRef<CreateBookDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {book: Book}) { }

  ngOnInit() {
    this.book = this.data.book;
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public save(): void {
    this.dialogRef.close();
  }

}
