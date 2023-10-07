import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StandingResponse } from '../models/standing-response';

@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  private apiStandingsUrl =
    'https://v3.football.api-sports.io/standings?season=2023&league=';
  private apiKey = '2da8a644f3d5df28aa622e1eb868445f';

  private apiFixturesUrl =
    'https://v3.football.api-sports.io/standings?season=2023&last=10';
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

  getLastFixtures(
    leagueId: string,
    teamId: string
  ): Observable<StandingResponse> {
    return this.http.get<StandingResponse>(
      this.apiFixturesUrl + `league=${leagueId}&team=${teamId} `
    );
  }
}
