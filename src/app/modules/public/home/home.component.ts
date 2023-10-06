import { Component } from '@angular/core';
import { FootballApiService } from 'src/app/Services/football-api.service';
import { StandingResponse } from 'src/app/models/standing-response';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  countryList = ['England', 'Spain', 'Germany', 'France', 'Italy'];

  teamList!: [];

  apiResp!: StandingResponse | any;

  constructor(private footballapi: FootballApiService) {}

  fetchStandings() {
    this.footballapi.getStandings().subscribe((resp) => {
      this.apiResp = resp;
      console.log(this.apiResp.response[0].league.standings);

      this.teamList = this.apiResp.response[0].league.standings[0];
    });
  }
}
