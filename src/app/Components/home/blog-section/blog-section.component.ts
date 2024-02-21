import { Component } from '@angular/core';
import { BlogCardService } from '../services/blog-card.service';
import { IblogCard } from '../interfaces/iblog-card';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss',
})
export class BlogSectionComponent {
  leftCardData: IblogCard[];
  rightCardData: IblogCard[];

  constructor(private _blogCardService: BlogCardService) {
    this.leftCardData = _blogCardService.getLeftCardsContent();
    this.rightCardData = _blogCardService.getRightCardsContent();
  }
}
