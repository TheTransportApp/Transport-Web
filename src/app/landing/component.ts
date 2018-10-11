import {Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class LandingComponent {
  public testModal = false;
  constructor() { }

  public showTestModal() {
    this.testModal = true;
  }

  public closeTestModal() {
    this.testModal = false;
  }

}
