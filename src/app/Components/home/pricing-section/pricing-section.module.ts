import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingSectionComponent } from './pricing-section.component';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { PlanCardService } from '../services/plan-card.service';

@NgModule({
  declarations: [PricingSectionComponent, PlanCardComponent],
  imports: [CommonModule],
  exports: [PricingSectionComponent, PlanCardComponent],
  providers: [PlanCardService],
})
export class PricingSectionModule {}
