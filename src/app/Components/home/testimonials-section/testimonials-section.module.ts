import { NgModule } from '@angular/core';

import { TestimonialsSectionComponent } from './testimonials-section.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { CommonModule } from '@angular/common';
import { TestimonialsService } from '../services/testimonials.service';

@NgModule({
  declarations: [TestimonialsSectionComponent, TestimonialCardComponent],
  imports: [CommonModule],
  exports: [TestimonialsSectionComponent, TestimonialCardComponent],
  providers: [TestimonialsService],
})
export class TestimonialsSectionModule {}
