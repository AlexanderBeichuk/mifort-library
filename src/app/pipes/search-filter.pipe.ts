import { Pipe, PipeTransform } from '@angular/core';
import { BookFilter } from '../partials/books-table/books-table.component';
import { Book } from '../models/Book';
import { BOOK_ENDING_PERIOD, POPULAR_QUEUE_LENGTH } from '../app.config';

@Pipe({
  name: 'booksFilter'
})
export class BooksFilterPipe implements PipeTransform {
  private filteredItems: Book[];
  private filters: BookFilter;
  private fields: string[];

  public transform(items: Book[], filters: BookFilter, fields: string[]): any[] {
    if (!items) {
      return [];
    }

    this.filteredItems = items;
    this.filters = filters;
    this.fields = fields;

    this.filterByText();
    this.filterEnding();
    this.filterOverdue();
    this.filterPopular();

    return this.filteredItems;
  }

  private itemHasText(item: any, searchText: string, fields: string[]): boolean {
    return fields.some(fieldName => item[fieldName].toLowerCase().includes(searchText));
  }

  private filterByText(): void {
    if (!this.filters.searchText) {
      return;
    }

    const text = this.filters.searchText.toLowerCase();

    this.filteredItems = this.filteredItems.filter(item => {
      return this.itemHasText(item, text, this.fields);
    });
  }

  private filterEnding(): void {
    if (this.filters.ending) {
      this.filteredItems =  this.filteredItems.filter(({daysLeft, isOverdue}) => !isOverdue && daysLeft <= BOOK_ENDING_PERIOD);
    }
  }

  private filterOverdue(): void {
    if (this.filters.overdue) {
      this.filteredItems =  this.filteredItems.filter(({isOverdue}) => isOverdue);
    }
  }

  private filterPopular(): void {
    if (this.filters.popular) {
      this.filteredItems =  this.filteredItems.filter(({usersQueue}) => usersQueue && usersQueue.length >= POPULAR_QUEUE_LENGTH);
    }
  }
}
