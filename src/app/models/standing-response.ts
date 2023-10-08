export interface StandingResponse {
  errors: [];
  get: string;
  paging: { current: string; season: string };
  response: [{ league: { standings: [{ team: { id: number } }][] } }];
  results: number;
}

export interface FixtureResponse {
  response: {
    league: { standings: [{ team: { id: number } }][] };
    teams: { home: { name: string }; away: { name: string } };
    goals: { home: number; away: number };
  }[];
}

export type TeamData = {
  team: { id: number; logo: string; name: string };

  all: { win: number; draw: number; lose: number; played: number };
  rank: number;
  goalsDiff: number;
  points: number;
}[];
