import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamHistoryRoutingModule } from './team-history-routing.module';
import { TeamHistoryComponent } from './team-history.component';
import { LeaderboardModule } from '../leaderboard/leaderboard.module';

@NgModule({
  declarations: [TeamHistoryComponent],
  imports: [CommonModule, TeamHistoryRoutingModule, LeaderboardModule],
  exports: [TeamHistoryComponent],
})
export class TeamHistoryModule {}
