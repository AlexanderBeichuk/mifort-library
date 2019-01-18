import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../../partials/header/authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationGuard implements CanActivate {

  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly router: Router
  ) { }

  canActivate(): boolean {
    if (this.authorizationService.getSessionToken()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
