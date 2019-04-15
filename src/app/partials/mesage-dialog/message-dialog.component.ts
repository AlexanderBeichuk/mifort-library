import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../models/User';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {
  public message = new FormControl('');
  public user: User;

  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {user: User}) {
  }

  public ngOnInit() {
    this.user = this.data.user;
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public onSaveClick(): void {
    this.dialogRef.close(this.message);
  }
}
