import { Injectable } from '@angular/core';
import {Game} from "./homepage.component";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private games: Game[] = [];

  setGames(games: Game[]) {
    this.games = games;
  }

  getGames(): Game[] {
    return this.games;
  }
}
