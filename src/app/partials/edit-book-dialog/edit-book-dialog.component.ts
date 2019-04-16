import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-edit-book-dialog',
  templateUrl: './edit-book-dialog.component.html',
  styleUrls: ['./edit-book-dialog.component.scss']
})
export class EditBookDialogComponent implements OnInit {

  public book: Book;

  constructor(public dialogRef: MatDialogRef<EditBookDialogComponent>,
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
