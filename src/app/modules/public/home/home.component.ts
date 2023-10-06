import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  countryList = ['England', 'Spain', 'Germany', 'France', 'Italy'];
}
