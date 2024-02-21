import { Component, Input } from '@angular/core';

import { IblogCard } from '../../interfaces/iblog-card';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  // @ts-ignore
  @Input('cardData') card: IblogCard;
}
