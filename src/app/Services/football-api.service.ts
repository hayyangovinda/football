import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FixtureResponse, StandingResponse } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  private apiStandingsUrl =
    'https://v3.football.api-sports.io/standings?season=2023&league=';

  private apiKey = '052195bd4bf62526bedeb9fae44621ea';

  private apiFixturesUrl =
    'https://v3.football.api-sports.io/fixtures?season=2023&last=10';

  private headers = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': this.apiKey,
    }),
  };

  constructor(private http: HttpClient) {}

  getStandings(teamId: string): Observable<StandingResponse> {
    return this.http.get<StandingResponse>(
      this.apiStandingsUrl + teamId,
      this.headers
    );
  }

  getLastFixtures(teamId: string): Observable<FixtureResponse> {
    return this.http.get<FixtureResponse>(
      this.apiFixturesUrl + `&team=${teamId}`,
      this.headers
    );
  }
}
