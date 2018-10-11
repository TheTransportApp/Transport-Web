import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {AuthService} from './AuthService';

@Injectable()
export class TicketService {

  private baseUrl = 'http://localhost:2598/';

  constructor(private httpClient: HttpClient, private cookieService: CookieService, private authService: AuthService) {

  }

  /**
   * method gets all tickets of a user via his JWT (GET Request to HTTP Service)
   */

  getAllTickets(): Observable<Array<any>> {
    if (!this.authService.loggedIn()) {
      return Observable.create(observer => {
        observer.next([]);
        observer.onComplete();
      });
    }
    this.httpClient.get(this.baseUrl + 'ticket/all', {headers: {'Authorization': this.cookieService.get('token')}}).subscribe(value => {
      console.log(value);
      return Observable.create(observer => {
        observer.next([]);
        observer.onComplete();
      });
    });
  }

}
