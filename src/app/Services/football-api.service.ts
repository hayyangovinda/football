import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StandingResponse } from '../models/standing-response';

@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  private apiUrl =
    'https://v3.football.api-sports.io/standings?league=39&season=2023';
  private apiKey = '2da8a644f3d5df28aa622e1eb868445f';

  constructor(private http: HttpClient) {}

  getStandings(): Observable<StandingResponse | Object> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': this.apiKey,
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
