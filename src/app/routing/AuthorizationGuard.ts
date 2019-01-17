import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../partials/header/authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private readonly authorizationService: AuthorizationService,
              private router: Router) {
  }

  canActivate() {
    if (this.authorizationService.getSessionToken()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
