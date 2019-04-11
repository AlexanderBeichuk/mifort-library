import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../pages/login/login.component';
import {HomeComponent} from '../pages/home/home.component';
import {NotFoundComponent} from '../pages/not-found/not-found.component';
import {AdminComponent} from '../pages/admin/admin.component';
import {AdminGuard} from './guards/admin.guard';
import {AdminBooksComponent} from '../pages/admin/admin.books/admin.books.component';
import {AdminUsersComponent} from '../pages/admin/admin.users/admin.users.component';
import { BookPageComponent } from '../pages/book-page/book-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'book/:id',
    component: BookPageComponent,
  },
  {
    path: 'create-book',
    component: BookPageComponent,
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'books',
        component: AdminBooksComponent
      },
      {
        path: 'users',
        component: AdminUsersComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
