import { Component } from '@angular/core';
import { StandingResponse } from 'src/app/models/standing-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  countryList = ['England', 'Spain', 'Germany', 'France', 'Italy'];
  selectedCountryId!: number;
  teamIds: { [key: string]: number } = {
    England: 39,
    Spain: 140,
    Germany: 78,
    France: 61,
    Italy: 135,
  };
  teamList!: [];

  apiResp!: StandingResponse;

  constructor(private router: Router) {}

  goToLeaderboard(country: string) {
    this.selectedCountryId = this.teamIds[country];

    this.router.navigate(['/leaderboard', this.selectedCountryId]);
  }
}
