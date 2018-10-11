import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:2598/';

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient.post<{ token: string }>(this.baseUrl + 'user/auth', {email, password})
      .pipe(map(result => {
        this.cookieService.set('token', result.token);
        return true;
      }));
  }

  logout() {
    this.cookieService.delete('token');
  }

  public loggedIn(): boolean {
    return this.cookieService.check('token');
  }

}
