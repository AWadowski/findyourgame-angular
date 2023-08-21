import {Component, Input} from '@angular/core';
import { ISlide } from 'src/app/carousel/carousel.component';
import {Game} from "../homepage.component";
import {GamesService} from "../gamesservice";
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent {
  carouselSlides!: ISlide[];
  @Input() games!: Game[];

  constructor(private gamesService: GamesService) {
  }
  ngOnInit(): void {
    this.games=this.gamesService.getGames();
    this.setupCarouselSlides(this.games);
  }

  setupCarouselSlides(games: Game[]) {
    this.carouselSlides = games.map(game => ({
      imageUrl: `../../../assets/img/${game.id}.jpg`,
      altText: `Carousel slide for ${game.gameName}`,
      logoUrl: '',
      title: game.gameName || 'Default Title',
      description: game.description || 'Default Description',
      ranking: game.ranking || 0,
      id: game.id || 0,
    }));
  }

}
