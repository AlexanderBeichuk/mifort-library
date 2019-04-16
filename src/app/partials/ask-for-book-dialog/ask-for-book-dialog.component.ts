import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ask-for-book-dialog',
  templateUrl: './ask-for-book-dialog.component.html',
  styleUrls: ['./ask-for-book-dialog.component.scss']
})
export class AskForBookDialogComponent implements OnInit {
  public description = new FormControl('');
  public url = new FormControl('');

  constructor(public dialogRef: MatDialogRef<AskForBookDialogComponent>) {
  }

  public ngOnInit() {
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public onSaveClick(): void {
    this.dialogRef.close({description: this.description, url: this.url});
  }
}
