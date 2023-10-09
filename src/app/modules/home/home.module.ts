import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LeaderboardModule } from '../pages/leaderboard/leaderboard.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, LeaderboardModule, RouterModule],
  exports: [HomeComponent],
})
export class HomeModule {}
