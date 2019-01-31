import {Component, Input, OnInit} from '@angular/core';
import {TableHead} from '../../models/Table';
import {Book} from '../../models/Book';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  @Input()
  public headElements: TableHead[];

  @Input()
  public tableList: Book[];

  constructor() { }

  ngOnInit() {
    console.log(this.headElements);
    console.log(this.tableList);
  }

}
