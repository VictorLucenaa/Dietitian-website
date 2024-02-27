import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogSectionComponent } from './blog-section.component';
import { BlogCardService } from '../services/blog-card.service';

@NgModule({
  declarations: [BlogCardComponent, BlogSectionComponent],
  imports: [CommonModule],
  exports: [BlogCardComponent, BlogSectionComponent],
  providers: [BlogCardService],
})
export class BlogSectionModule {
  static factory() {
    throw new Error('Method not implemented.');
  }
}
