import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.cookieService.get('token'));
    if (this.cookieService.get('token') !== undefined) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}