import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent {
  @Input() teams!: any[];
  teamId = 1;
  leagueId = 2;

  constructor(private router: Router) {}

  goToLastFixtures() {
    const queryParams = { teamId: this.teamId, leagueId: this.leagueId };
    this.router.navigate(['/team-history'], { queryParams: queryParams });
  }
}
