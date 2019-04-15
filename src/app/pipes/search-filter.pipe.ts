import { Pipe, PipeTransform } from '@angular/core';
import { BookFilter } from '../partials/books-table/books-table.component';
import { Book } from '../models/Book';
import { BOOK_ENDING_PERIOD, POPULAR_QUEUE_LENGTH } from '../app.config';
import uniqBy from 'lodash/uniqBy';

@Pipe({
  name: 'booksFilter'
})
export class BooksFilterPipe implements PipeTransform {
  private items: Book[];
  private filters: BookFilter;
  private fields: string[];

  public transform(items: Book[], filters: BookFilter, fields: string[]): any[] {
    if (!items) {
      return [];
    }

    this.items = items;
    this.filters = filters;
    this.fields = fields;
    const searchResult = this.searchByText();

    if (!filters.overdue && !filters.ending && !filters.popular) {
      return searchResult;
    }

    const filterResults = [
      ...this.filterEnding(searchResult),
      ...this.filterOverdue(searchResult),
      ...this.filterPopular(searchResult),
    ];

    return uniqBy(filterResults, 'id');
  }

  private itemHasText(item: any, searchText: string, fields: string[]): boolean {
    return fields.some(fieldName => item[fieldName].toLowerCase().includes(searchText));
  }

  private searchByText(): Book[] {
    if (!this.filters.searchText) {
      return this.items;
    }

    const text = this.filters.searchText.toLowerCase();

    return this.items.filter(item => {
      return this.itemHasText(item, text, this.fields);
    });
  }

  private filterEnding(items: Book[]): Book[] {
    if (!this.filters.ending) {
      return [];
    }

    return items.filter(({ daysLeft, isOverdue }) => !isOverdue && daysLeft <= BOOK_ENDING_PERIOD);
  }

  private filterOverdue(items: Book[]): Book[] {
    if (!this.filters.overdue) {
      return [];
    }

    return items.filter(({ isOverdue }) => isOverdue);
  }

  private filterPopular(items: Book[]): Book[] {
    if (!this.filters.popular) {
      return [];
    }

    return items.filter(({ usersQueue }) => usersQueue && usersQueue.length >= POPULAR_QUEUE_LENGTH);
  }
}
