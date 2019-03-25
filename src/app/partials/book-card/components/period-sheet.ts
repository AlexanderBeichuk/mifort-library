import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-period-sheet',
  templateUrl: 'period-sheet.html',
  styleUrls: ['period-sheet.scss'],
})
export class PeriodSheetComponent {
  public listOptions = [
    {
      name: 'На 1 неделю',
      value: 1
    },
    {
      name: 'На 2 недели',
      value: 2
    },
    {
      name: 'На 3 недели',
      value: 3
    },
    {
      name: 'На 4 недели',
      value: 4
    }
  ];

  private daysInWeek = 7;

  constructor(private bottomSheetRef: MatBottomSheetRef<PeriodSheetComponent>) {}

  public choose(weeks: number): void {
    this.bottomSheetRef.dismiss(weeks);
    event.preventDefault();
  }

  public tillDate(weeks): Date {
    const date = new Date();
    date.setDate(date.getDate() + this.daysInWeek * weeks);
    return date;
  }

}
