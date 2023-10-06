import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LeaderboardComponent } from '../../lazy-load/leaderboard/leaderboard.component';
import { MaterialModule } from '../../material/material.module';
import { LeaderboardModule } from '../../lazy-load/leaderboard/leaderboard.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [MaterialModule, CommonModule, LeaderboardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
