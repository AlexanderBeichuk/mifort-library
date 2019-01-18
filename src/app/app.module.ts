import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule, TableModule, WavesModule, InputsModule } from 'angular-bootstrap-md';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import {AuthServiceConfig, SocialLoginModule} from 'angular5-social-login';
import {CommonModule} from '@angular/common';
import {AuthorizationComponent} from './partials/header/authorization/authorization.component';
import {GET_AUTHORIZATION_SERVICE_CONFIG} from './partials/header/authorization/config';
import { LoginComponent } from './pages/login/login.component';
import { BooksTableComponent } from './partials/books-table/books-table.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EventBoardComponent } from './partials/event-board/event-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthorizationComponent,
    LoginComponent,
    BooksTableComponent,
    HomeComponent,
    NotFoundComponent,
    EventBoardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    InputsModule,
    TableModule,
    SnotifyModule,
    SocialLoginModule,
  ],
  providers: [
    { provide: AuthServiceConfig, useFactory: GET_AUTHORIZATION_SERVICE_CONFIG },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
