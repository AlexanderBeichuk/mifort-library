import { Component } from '@angular/core';
import {Router} from '@angular/router';

const LOGIN_PAGE_URL = '/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private router: Router) { }

  public get isLoginPage(): boolean {
    return this.router.url === LOGIN_PAGE_URL;
  }
}
