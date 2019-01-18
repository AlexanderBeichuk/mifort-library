import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../../partials/header/authorization/authorization.service';
import {AUTHORIZED_USER} from '../../models/mock';
import {UserRole} from '../../models/config';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly router: Router
  ) { }

  private authorizedUser = AUTHORIZED_USER;

  canActivate(): boolean {
    if (this.authorizedUser.role === UserRole.admin) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
