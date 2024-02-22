import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from './home.component';
import { TopBannerComponent } from '../header/top-banner/top-banner.component';
import { LeftIconComponent } from '../header/top-banner/left-icon/left-icon.component';
import { RightIconComponent } from '../header/top-banner/right-icon/right-icon.component';
import { NavbarComponent } from '../header/navbar/navbar.component';
import { NavbarButtonsComponent } from '../header/navbar/navbar-buttons/navbar-buttons.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeroContentComponent } from './hero-section/hero-content/hero-content.component';
import { TextHeaderComponent } from './hero-section/hero-content/text-header/text-header.component';
import { HeroButtonsComponent } from './hero-section/hero-content/hero-buttons/hero-buttons.component';
import { HeroCustomersComponent } from './hero-section/hero-content/hero-customers/hero-customers.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { CardsFeaturesComponent } from './features-section/cards-features/cards-features.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogCardComponent } from './blog-section/blog-card/blog-card.component';
import { CardsInfoService } from './services/cards-info.service';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { TestimonialCardComponent } from './testimonials-section/testimonial-card/testimonial-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    TopBannerComponent,
    LeftIconComponent,
    RightIconComponent,
    NavbarComponent,
    NavbarButtonsComponent,
    HeroSectionComponent,
    HeroContentComponent,
    TextHeaderComponent,
    HeroButtonsComponent,
    HeroCustomersComponent,
    FeaturesSectionComponent,
    CardsFeaturesComponent,
    BlogSectionComponent,
    BlogCardComponent,
    TestimonialsSectionComponent,
    TestimonialCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    HomeComponent,
    TopBannerComponent,
    LeftIconComponent,
    RightIconComponent,
    NavbarComponent,
    NavbarButtonsComponent,
    HeroSectionComponent,
    HeroContentComponent,
    TextHeaderComponent,
    HeroButtonsComponent,
    HeroCustomersComponent,
    FeaturesSectionComponent,
  ],
  providers: [CardsInfoService],
})
export class HomeModule {}
