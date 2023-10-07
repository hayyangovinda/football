import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamHistoryRoutingModule } from './team-history-routing.module';
import { TeamHistoryComponent } from './team-history.component';

@NgModule({
  declarations: [TeamHistoryComponent],
  imports: [CommonModule, TeamHistoryRoutingModule],
  exports: [TeamHistoryComponent],
})
export class TeamHistoryModule {}
