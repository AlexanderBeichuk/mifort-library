import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-periods-menu',
  templateUrl: './time-periods-menu.component.html',
  styleUrls: ['./time-periods-menu.component.scss']
})
export class TimePeriodsMenuComponent {

  @Input()
  public startDate: string = (new Date()).toString();

  @Output()
  public onChoosePeriod = new EventEmitter<{tillDate: string, forWeeks: number}>();

  public listOptions = [
    {
      name: 'на 1 неделю',
      value: 1
    },
    {
      name: 'на 2 недели',
      value: 2
    },
    {
      name: 'на 3 недели',
      value: 3
    },
    {
      name: 'на 4 недели',
      value: 4
    }
  ];

  private daysInWeek = 7;

  constructor() { }

  public tillDate(weeks): Date {
    const date = new Date(this.startDate);
    date.setDate(date.getDate() + this.daysInWeek * weeks);
    return date;
  }

  public choosePeriod(weeks: number) {
    this.onChoosePeriod.emit({tillDate: this.tillDate(weeks).toString(), forWeeks: weeks});
  }

}
