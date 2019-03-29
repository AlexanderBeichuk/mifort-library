import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'angular-bootstrap-md';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AuthServiceConfig, SocialLoginModule } from 'angular5-social-login';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './partials/header/authorization/authorization.component';
import { GET_AUTHORIZATION_SERVICE_CONFIG } from './partials/header/authorization/config';
import { LoginComponent } from './pages/login/login.component';
import { BooksTableComponent } from './partials/books-table/books-table.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminBooksComponent } from './pages/admin/admin.books/admin.books.component';
import { AdminUsersComponent } from './pages/admin/admin.users/admin.users.component';
import { BookCardComponent } from './partials/book-card/book-card.component';
import { BooksService } from './services/books.service';
import { CommentComponent } from './partials/comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatDialog,
  MatExpansionModule, MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { PeriodSheetComponent } from './partials/book-card/components/period-sheet';
import { UsersQueueTimelineComponent } from './partials/users-queue-timeline/users-queue-timeline.component';
import { TimePeriodsMenuComponent } from './partials/time-periods-menu/time-periods-menu.component';
import { VotingBlockComponent } from './partials/voting-block/voting-block.component';
import { MyTakenStatusComponent } from './partials/my-taken-status/my-taken-status.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {LOCALE_ID} from '@angular/core';

registerLocaleData(localeRu, 'ru');

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
    AdminComponent,
    AdminBooksComponent,
    AdminUsersComponent,
    BookCardComponent,
    CommentComponent,
    PeriodSheetComponent,
    UsersQueueTimelineComponent,
    TimePeriodsMenuComponent,
    VotingBlockComponent,
    MyTakenStatusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    SnotifyModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [
    { provide: AuthServiceConfig, useFactory: GET_AUTHORIZATION_SERVICE_CONFIG },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    { provide: LOCALE_ID, useValue: 'ru' },
    SnotifyService,
    BooksService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [PeriodSheetComponent]
})
export class AppModule { }
