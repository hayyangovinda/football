export interface StandingResponse {
  errors: [];
  get: string;
  paging: { current: string; season: string };
  response: [{ league: { standings: [][] } }];
  results: number;
}
