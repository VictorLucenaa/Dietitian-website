import { NgModule } from '@angular/core';
import { HeroSectionComponent } from './hero-section.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { HeroButtonsComponent } from './hero-content/hero-buttons/hero-buttons.component';
import { HeroCustomersComponent } from './hero-content/hero-customers/hero-customers.component';
import { TextHeaderComponent } from './hero-content/text-header/text-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroSectionComponent,
    HeroContentComponent,
    HeroButtonsComponent,
    HeroCustomersComponent,
    TextHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeroSectionComponent,
    HeroContentComponent,
    HeroButtonsComponent,
    HeroCustomersComponent,
    TextHeaderComponent,
  ],
})
export class HeroSectionModule {}
