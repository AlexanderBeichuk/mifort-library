import { Component, OnInit } from '@angular/core';
import {Book} from '../models/Book';
import {BOOKS} from '../models/mock';

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public previewBooks: Book[] = BOOKS;

  ngOnInit() {
  }

}
