import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CommentTypes } from '../../models/Comment';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {

  public commentText = new FormControl('');
  public commentTypes = CommentTypes;
  private type: CommentTypes = null;

  constructor(public dialogRef: MatDialogRef<FeedbackDialogComponent>) {
  }

  public ngOnInit() {
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick(): void {
    this.dialogRef.close({ type: this.type, text: this.commentText });
  }

  public setRating(type: CommentTypes): void {
    this.type = type;
  }
}
