import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersQueueItem } from '../../models/Book';
import { UserDTO } from '../../models/User';
import * as moment from 'moment';
import { Moment } from 'moment';
import DurationConstructor = moment.unitOfTime.DurationConstructor;

@Component({
  selector: 'app-users-queue-timeline',
  templateUrl: './users-queue-timeline.component.html',
  styleUrls: ['./users-queue-timeline.component.scss']
})
export class UsersQueueTimelineComponent implements OnInit {

  public queue: UsersQueueItem[];

  @Input()
  public set usersQueue (queue: UsersQueueItem[]) {
    this.queue = queue || [];
    this.setQueueDates();
  }

  @Input()
  public currentUser: UserDTO;

  @Input()
  public takenBy: UserDTO;

  @Input()
  public takenTill: string;

  @Output()
  public onGetInQueue = new EventEmitter<number>();

  @Output()
  public onGetOutOfQueue = new EventEmitter<void>();

  public ngOnInit(): void {
    this.setQueueDates();
  }

  public isCurrentUser(id: string): boolean {
    return id === this.currentUser.id;
  }

  public get isInQueue(): boolean {
    return this.queue.some(({ user: { id } }) => id === this.currentUser.id);
  }

  public get lastDate(): Moment {
    if (!this.queue.length) {
      return moment(this.takenTill);
    }

    const lastQueueIndex = this.queue.length - 1;
    return this.queue[lastQueueIndex].to;
  }

  public getInQueue({forWeeks}: {tillDate: string, forWeeks: number}): void {
    this.onGetInQueue.emit(forWeeks);
  }

  public getOutOfQueue(): void {
    this.onGetOutOfQueue.emit();
  }

  private setQueueDates() {
    let periodStart: Moment;
    let periodEnd: Moment = moment(this.takenTill);
    this.queue = this.queue.map(item => {
      periodStart = moment(periodEnd);
      periodEnd = moment(periodStart).add(item.forWeeks, 'w');
      return {
        ...item,
        from: periodStart,
        to: periodEnd,
        fromFormatted: periodStart.format('DD/MM'),
        toFormatted: periodEnd.format('DD/MM')
      };
    });
  }

}
