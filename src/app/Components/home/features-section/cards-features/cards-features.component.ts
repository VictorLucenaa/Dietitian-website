import { Component, Input } from '@angular/core';
import { ICard } from '../Icards.interface';
import { CardsInfoService } from '../cards-info.service';

@Component({
  selector: 'app-cards-features',
  templateUrl: './cards-features.component.html',
  styleUrl: './cards-features.component.scss',
})
export class CardsFeaturesComponent {
  @Input('cardLogo') cardLogo: string = '';
  @Input('cardMainText') cardMainText: string = '';
  @Input('cardSecondaryText') cardSecondaryText: string = '';

  cardsData: ICard[] = [];

  constructor(private _cardsInfoService: CardsInfoService) {
    this.cardsData = _cardsInfoService.getCardsInfo();
  }
}
