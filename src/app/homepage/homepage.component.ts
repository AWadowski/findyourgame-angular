import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {GamesService} from "./gamesservice";


export interface Game {
  id: number;
  gameName: string;
  gameType: string;
  multiplayer: string;
  platform: string;
  age: number;
  wydawca: string;
  dateOfOut: Date;
  motyw: string;
  transactions: string;
  description: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent {
  games: Game[] = [];
  gameForm: any;

  constructor(private readonly fb: FormBuilder, private http: HttpClient, private router: Router, private gameService: GamesService) {
  }

  ngOnInit(): void {
    this.gameForm = this.fb.group({
      transactions: [""],
      gameType: [""],
      multiplayer: [""],
      platform: [""],
      age: [""],
      wydawca: [""],
      dateOfOut: [""],
      motyw: [""],
    })
  }

  submitGameForm():void {
    console.log(this.gameForm.value)
    const formData = this.gameForm.value;

    this.http.post<Game[]>('http://localhost:8080/api/games/findByCriteria', formData).subscribe(
      (response) => {
        this.games = response;
        this.gameService.setGames(this.games);
        console.log(this.games);
        this.router.navigate(['/secondpage']);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}



