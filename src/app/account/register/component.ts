import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class RegisterComponent {
  public step = 1;
  constructor(private router: Router) { }

  public back() {
    this.step--;
  }

  public next() {
    this.step++;
  }

  public close() {
    this.router.navigate(['/']);
  }

}
