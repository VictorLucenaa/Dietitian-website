import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesSectionComponent } from './features-section.component';
import { CardsFeaturesComponent } from './cards-features/cards-features.component';
import { CardsInfoService } from '../services/cards-info.service';

@NgModule({
  declarations: [FeaturesSectionComponent, CardsFeaturesComponent],
  imports: [CommonModule],
  exports: [FeaturesSectionComponent, CardsFeaturesComponent],
  providers: [CardsInfoService],
})
export class FeaturesSectionModule {}
