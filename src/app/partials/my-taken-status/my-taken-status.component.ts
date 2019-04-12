import { Component, Input, OnInit } from '@angular/core';
import { UsersQueueItem } from '../../models/Book';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-my-taken-status',
  templateUrl: './my-taken-status.component.html',
  styleUrls: ['./my-taken-status.component.scss']
})
export class MyTakenStatusComponent implements OnInit {

  public usersCount = 0;
  public usersList = '';
  public timeLeftOffset: number;
  public takenFrom: Date;
  public takenTo: Date;
  public circleRadius = 50;
  public circuit = Math.PI * (this.circleRadius * 2);
  private maxPercent = 100;

  @Input()
  public daysLeft: number;

  @Input()
  public overdue: boolean;

  @Input()
  public set timeRange({ from, to }: { from: Date, to: Date }) {
    this.timeLeftOffset = this.calculateTimeLeftOffset(this.timeLeftPercent(from, to));
    this.takenFrom = from;
    this.takenTo = to;
  }

  @Input()
  public set usersQueue(queue: UsersQueueItem[]) {
    if (!queue) {
      return;
    }
    this.usersCount = queue.length;
    this.usersList = queue.map(({ user: { nickName } }) => nickName).join(', ');
  }

  constructor(public dialog: MatDialog) {

  }
  public ngOnInit(): void {

    console.log(this);
  }

  public returnBook(): void {
    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      width: '500px',
      height: '310px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
    });
  }

  private timeLeftPercent(from: Date, to: Date): number {
    if (this.overdue) {
      return 0;
    }
    const startDate = moment(from).endOf('day');
    const endDate = moment(to).endOf('day');
    const totalDays = endDate.diff(startDate, 'days');
    return (this.daysLeft / totalDays) * this.maxPercent;
  }

  private calculateTimeLeftOffset(leftPercent: number): number {
    return (leftPercent / this.maxPercent) * this.circuit;
  }

}

