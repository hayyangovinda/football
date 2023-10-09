import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StandingResponse } from 'src/app/models/interfaces';
import { FootballApiService } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent implements OnInit {
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
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.countryId = params['id'];
      this.fetchStandings(params['id']);
    });
  }

  goToLastFixtures(id: number) {
    this.router.navigate(['home/team-history', id, this.countryId]);
  }
}
