import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {


  public searchText = new FormControl('');

  @Output()
  public onSearchChanges = new EventEmitter<string>();

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchText
      .valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500)
      )
      .subscribe(text => {
          this.searchService.changeSearchText(text);
        }
      );
  }
}
