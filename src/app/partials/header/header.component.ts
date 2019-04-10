import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
