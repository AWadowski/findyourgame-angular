import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Game } from "../../app/homepage/homepage.component"; 


export interface ISlide {
  clicked?: boolean;
  imageUrl: string;
  altText: string;
  logoUrl: string;
  title: string;
  description: string;
  id: number;
  ranking: number;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() slides: ISlide[] = [];
  constructor(private http: HttpClient) {}

  likeSlide(index: number) {
    this.slides[index].clicked = true;
    this.slides[index].ranking += 1;
    this.updateBackendRanking(this.slides[index]);
  }
  
  dislikeSlide(index: number) {
    this.slides[index].clicked = true;
    if (this.slides[index].ranking == 0) {
      throwError("Ranking nie może być mniejszy od 0");
    }
    this.slides[index].ranking -= 1;
    this.updateBackendRanking(this.slides[index]);
  }

  updateBackendRanking(slide: ISlide) {
    const apiUrl = `http://localhost:8080/api/games/changeRanking/${slide.id}/${slide.ranking}`;
    
    this.http.put(apiUrl, {}).subscribe(
      () => {
        console.log('Ranking updated successfully');
      },
      error => {
        console.error('Error updating ranking', error);
      }
    );
  }  
}
