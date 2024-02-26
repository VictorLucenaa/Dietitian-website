import { Component, Input } from '@angular/core';
import { ICard } from '../../interfaces/Icards.interface';
import { CardsInfoService } from '../../services/cards-info.service';

@Component({
  selector: 'app-cards-features',
  templateUrl: './cards-features.component.html',
  styleUrl: './cards-features.component.scss',
})
export class CardsFeaturesComponent {
  cards: ICard[] = [];

  constructor(private _cardsInfoService: CardsInfoService) {
    this.cards = _cardsInfoService.getCardsInfo();
  }
}
