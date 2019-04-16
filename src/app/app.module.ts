import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'angular-bootstrap-md';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AuthServiceConfig, SocialLoginModule } from 'angular5-social-login';
import { CommonModule, registerLocaleData } from '@angular/common';
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
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { PeriodSheetComponent } from './partials/book-card/components/period-sheet';
import { UsersQueueTimelineComponent } from './partials/users-queue-timeline/users-queue-timeline.component';
import { TimePeriodsMenuComponent } from './partials/time-periods-menu/time-periods-menu.component';
import { VotingBlockComponent } from './partials/voting-block/voting-block.component';
import { MyTakenStatusComponent } from './partials/my-taken-status/my-taken-status.component';
import localeRu from '@angular/common/locales/ru';
import { FeedbackDialogComponent } from './partials/feedback-dialog/feedback-dialog.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BooksFilterPipe } from './pipes/search-filter.pipe';
import { AskForBookDialogComponent } from './partials/ask-for-book-dialog/ask-for-book-dialog.component';
import { MatListModule } from '@angular/material/list';
import { ImageUploaderComponent } from './partials/image-uploader/image-uploader.component';
import { BookSearchComponent } from './partials/book-search/book-search.component';
import { MessageDialogComponent } from './partials/mesage-dialog/message-dialog.component';
import { BookRequestCardComponent } from './partials/book-request-card/book-request-card.component';
import { BookFormComponent } from './partials/book-form/book-form.component';
import { EditBookDialogComponent } from './partials/edit-book-dialog/edit-book-dialog.component';
import { ProcessRequestDialogComponent } from './partials/process-request-dialog/process-request-dialog.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';


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
    MyTakenStatusComponent,
    FeedbackDialogComponent,
    BooksFilterPipe,
    AskForBookDialogComponent,
    BookFormComponent,
    ImageUploaderComponent,
    BookSearchComponent,
    MessageDialogComponent,
    BookRequestCardComponent,
    EditBookDialogComponent,
    ProcessRequestDialogComponent
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
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
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
  entryComponents: [
    PeriodSheetComponent,
    FeedbackDialogComponent,
    AskForBookDialogComponent,
    MessageDialogComponent,
    EditBookDialogComponent,
    ProcessRequestDialogComponent,
  ]
})
export class AppModule {
}
