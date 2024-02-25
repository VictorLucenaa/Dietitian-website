import { Component } from '@angular/core';
import { PlanCardService } from '../services/plan-card.service';
import { ICardPlan } from '../interfaces/IcardPlan.interface';

@Component({
  selector: 'app-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrl: './pricing-section.component.scss',
})
export class PricingSectionComponent {
  planCardData: ICardPlan[] = [];

  constructor(private _planCardService: PlanCardService) {
    this.planCardData = this._planCardService.getPlanData();
  }
}
