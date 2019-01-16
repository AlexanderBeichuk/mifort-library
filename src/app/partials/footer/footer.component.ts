import { Component, OnInit } from '@angular/core';
import {BOOKS} from '../../models/mock';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public previewBooks = BOOKS;

  constructor() { }

  ngOnInit() {
  }

}
