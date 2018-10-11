import { Component } from '@angular/core';
import {AuthService} from '../_services/AuthService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class InterfaceComponent {

  constructor(private router: Router, private authService: AuthService) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
