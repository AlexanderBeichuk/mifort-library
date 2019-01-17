import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule, TableModule } from 'angular-bootstrap-md';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import {AuthorizationModule} from './authorization/authorization.module';
import { BooksTableComponent } from './partials/books-table/books-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    TableModule,
    SnotifyModule,
    AuthorizationModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
