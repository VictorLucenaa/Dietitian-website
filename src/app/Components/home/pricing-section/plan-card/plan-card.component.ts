import { Component, Input } from '@angular/core';
import { ICardPlan } from '../../interfaces/IcardPlan.interface';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.scss',
})
export class PlanCardComponent {
  // @ts-ignore
  @Input('cardPlanData') cardPlan: ICardPlan;
}
