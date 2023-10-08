import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FixtureResponse,
  StandingResponse,
} from 'src/app/models/standing-response';
import { FootballApiService } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-team-history',
  templateUrl: './team-history.component.html',
  styleUrls: ['./team-history.component.css'],
})
export class TeamHistoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private footballApiService: FootballApiService,
    private router: Router
  ) {}
  apiResponse!: StandingResponse;
  last10Fixtures!: FixtureResponse;
  countryId!: number;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const teamId = params['id'];
      this.countryId = params['id2'];
      this.footballApiService.getLastFixtures(teamId).subscribe((resp) => {
        this.last10Fixtures = resp;
      });
    });
  }

  navigateBack() {
    this.router.navigate(['/leaderboard', this.countryId], {
      relativeTo: this.route,
    });
  }
}
