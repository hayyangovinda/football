import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-history',
  templateUrl: './team-history.component.html',
  styleUrls: ['./team-history.component.css'],
})
export class TeamHistoryComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.queryParams);
  }
  queryParams = this.route.snapshot.queryParams;
}
