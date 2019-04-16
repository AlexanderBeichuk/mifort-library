import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BookDTO } from '../../services/books.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookStatus } from '../../models/Book';
import * as moment from 'moment';
import { DEFAULT_VOTING_PERIOD } from '../../app.config';

@Component({
  selector: 'app-process-request-dialog',
  templateUrl: './process-request-dialog.component.html',
  styleUrls: ['./process-request-dialog.component.scss']
})
export class ProcessRequestDialogComponent implements OnInit {

  public statusForm: FormGroup;
  public book: BookDTO;
  public statusTypes = BookStatus;
  public minDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<ProcessRequestDialogComponent>,
    private formBuilder: FormBuilder
  ) {
  }

  public ngOnInit() {
    this.statusForm = this.formBuilder.group({
      statusType: '',
      votingEndDate: moment().add(DEFAULT_VOTING_PERIOD, 'd'),
      shippingEndDate: moment(),
    });

  }

  public onSaveClick(): void {
    this.dialogRef.close({ book: this.book });
  }

  public updateBook(book: BookDTO): void {
    this.book = book;
  }

  public isCheckedType(type: BookStatus): boolean {
    return type === this.statusForm.get('statusType').value;
  }
}
