import { Injectable } from '@angular/core';
import { ItestimonialCard } from '../interfaces/Itestimonial-card';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  testimonialsData: ItestimonialCard[] = [
    {
      textContent: `I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!`,
      clientImage: 'assets/images/home/testimonials/card-1-image.jpeg',
      clientName: 'Jennifer Anderson',
    },
    {
      textContent: `Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!`,
      clientImage: 'assets/images/home/testimonials/card-2-image.jpeg',
      clientName: 'Robert Johson',
    },
    {
      textContent: `I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!`,
      clientImage: 'assets/images/home/testimonials/card-3-image.jpeg',
      clientName: 'Emily Davis',
    },
  ];

  constructor() {}

  getTestimonialsData() {
    return this.testimonialsData;
  }
}
