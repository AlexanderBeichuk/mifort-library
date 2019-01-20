export class DateHelper {

  constructor() { }

  public convertStringToDate(date: Date | string): Date {
    return date instanceof Date ? date : new Date(date);
  }
}
