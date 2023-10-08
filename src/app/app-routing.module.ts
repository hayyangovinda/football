import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home/leaderboard',
    loadChildren: () =>
      import('./modules/lazy-load/leaderboard/leaderboard.module').then(
        (m) => m.LeaderboardModule
      ),
  },
  {
    path: 'home/team-history/:id/:id2',
    loadChildren: () =>
      import('./modules/lazy-load/team-history/team-history.module').then(
        (m) => m.TeamHistoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
