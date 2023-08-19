import { Component } from '@angular/core';
import { ISlide } from 'src/app/carousel/carousel.component';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent {
  carouselSlides!: ISlide[];

  ngOnInit(): void {
    this.setupCarouselSlides();
  }

  setupCarouselSlides() {
    this.carouselSlides = [
      {
        imageUrl: '../../../assets/minecraft.jpg',
        altText: 'Carousel slide 1',
        logoUrl: '',
        title: 'Quality Medicines for Your Health',
        description:
          'Discover our wide range of high-quality medicines and supplements that will help you take care of your health.',
      },
      {
        imageUrl: '../../../assets/gta.png',
        altText: 'Random second slide',
        logoUrl: '',
        title: 'Relief and Wellness Solutions',
        description:
          'With our extensive selection of medications, you can alleviate pain, improve your well-being, and restore your health.',
      },
    ];
  }

}
