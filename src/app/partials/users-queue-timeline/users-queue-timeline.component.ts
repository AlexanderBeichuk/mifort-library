import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersQueueItem } from '../../models/Book';
import { UserDTO } from '../../models/User';

@Component({
  selector: 'app-users-queue-timeline',
  templateUrl: './users-queue-timeline.component.html',
  styleUrls: ['./users-queue-timeline.component.scss']
})
export class UsersQueueTimelineComponent implements OnInit {

  @Input()
  queue: UsersQueueItem[];

  @Input()
  currentUser: UserDTO;

  @Input()
  takenBy: UserDTO;

  @Input()
  public takenTill: string;

  @Output()
  public onGetInQueue = new EventEmitter<{from: string, to: string}>();

  constructor() { }

  ngOnInit() {
  }

  public isCurrentUser(id: string): boolean {
    return id === this.currentUser.id;
  }

  public get isInQueue(): boolean {
    return !!this.queue.some(({ user: { id } }) => id === this.currentUser.id);
  }

  public get lastDate(): string {
    const lastQueueIndex = this.queue.length - 1;
    return this.queue[lastQueueIndex].to;
  }

  public getInQueue(timeTo: string) {
    this.onGetInQueue.emit({from: this.lastDate, to: timeTo});
  }

}
