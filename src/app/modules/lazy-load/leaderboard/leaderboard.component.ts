import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StandingResponse, TeamData } from 'src/app/models/standing-response';
import { FootballApiService } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  teams!: any;
  apiResponse!: StandingResponse;
  teamId!: number;
  countryId!: number;
  constructor(
    private footballApiService: FootballApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  fetchStandings(id: number) {
    this.footballApiService.getStandings(id.toString()).subscribe((resp) => {
      this.apiResponse = resp;
      this.teams = this.apiResponse.response[0].league.standings[0];

      console.log(this.apiResponse.response[0].league.standings[0]);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.countryId = params['id'];
      this.fetchStandings(params['id']);
    });
  }

  goToLastFixtures(id: number) {
    const queryParams = {
      teamid: id,
      countryId: this.countryId,
    };
    this.router.navigate(['home/team-history', id, this.countryId]);
  }
}
