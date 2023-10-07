import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/public/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'leaderboard',
    loadChildren: () =>
      import('./modules/lazy-load/leaderboard/leaderboard.module').then(
        (m) => m.LeaderboardModule
      ),
  },
  {
    path: 'team-history',
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
