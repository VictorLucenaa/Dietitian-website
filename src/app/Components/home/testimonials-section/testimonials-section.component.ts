import { Component } from '@angular/core';
import { TestimonialsService } from '../services/testimonials.service';
import { ItestimonialCard } from '../interfaces/ItestimonialCard.interce';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss',
})
export class TestimonialsSectionComponent {
  testimonialsData: ItestimonialCard[] = [];

  constructor(private _testimonialsService: TestimonialsService) {
    this.testimonialsData = _testimonialsService.getTestimonialsData();
  }
}
