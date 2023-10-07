import { Component } from '@angular/core';
import { FootballApiService } from 'src/app/services/football-api.service';
import { StandingResponse } from 'src/app/models/standing-response';

@Component({
  selector: 'home',
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

  constructor(private footballapi: FootballApiService) {}

  fetchStandings(country: string) {
    this.selectedCountryId = this.teamIds[country];
    this.footballapi
      .getStandings(this.selectedCountryId.toString())
      .subscribe((resp) => {
        this.apiResp = resp;
        console.log(this.apiResp.response[0].league.standings);

        this.teamList = this.apiResp.response[0].league.standings[0];
      });
  }
}
