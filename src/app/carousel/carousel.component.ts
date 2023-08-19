import { Component, Input } from '@angular/core';

export interface ISlide {
  imageUrl: string;
  altText: string;
  logoUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() slides: ISlide[] = [];
}
