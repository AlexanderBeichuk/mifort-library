import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchText = new BehaviorSubject('');

  constructor() {
  }

  public changeSearchText(value: string): void {
    this.searchText.next(value);
  }
}
