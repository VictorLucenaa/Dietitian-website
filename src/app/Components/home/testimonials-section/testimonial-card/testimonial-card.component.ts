import { Component, Input } from '@angular/core';
import { ItestimonialCard } from '../../interfaces/ItestimonialCard.interce';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  //@ts-ignore
  @Input('testimonialsCard') card: ItestimonialCard;
}
