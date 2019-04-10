import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  public transform(items: any[], searchText: string, fields: string[]): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return this.itemHasText(item, searchText, fields);
    });
  }

  private itemHasText(item: any, searchText: string, fields: string[]): boolean {
    return fields.some(fieldName => item[fieldName].toLowerCase().includes(searchText));
  }
}
