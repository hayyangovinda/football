import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StandingResponse } from 'src/app/models/standing-response';
import { FootballApiService } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
  teams!: any[];
  teamId = 1;
  leagueId = 2;
  apiResponse!: StandingResponse;

  constructor(
    private footballApiService: FootballApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  fetchStandings(id: number) {
    this.footballApiService.getStandings(id.toString()).subscribe((resp) => {
      this.apiResponse = resp;
      console.log(this.apiResponse.response[0].league.standings);

      this.teams = this.apiResponse.response[0].league.standings[0];
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.fetchStandings(params['id']));
  }

  goToLastFixtures() {
    const queryParams = { teamId: this.teamId, leagueId: this.leagueId };
    this.router.navigate(['/team-history'], { queryParams: queryParams });
  }
}
