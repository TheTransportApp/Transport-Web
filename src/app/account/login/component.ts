import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../_services/AuthService';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  public error;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  login() {
    const value = this.form.value;
    if (value.email && value.password) {
      this.authService.login(value.email, value.password)
        .pipe(first())
        .subscribe(
          result => this.router.navigate(['/dashboard']),
          error => {
            this.error = 'Ungültige Anmeldedaten!';
            console.log(error);
          }
        );
    }
  }
}
