import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from './home.component';
import { TopBannerComponent } from '../header/top-banner/top-banner.component';
import { BlogSectionModule } from './blog-section/blog-section.module';
import { FeaturesSectionModule } from './features-section/features-section.module';
import { HeroSectionModule } from './hero-section/hero-section.module';
import { PricingSectionModule } from './pricing-section/pricing-section.module';
import { TestimonialsSectionModule } from './testimonials-section/testimonials-section.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    BlogSectionModule,
    FeaturesSectionModule,
    HeroSectionModule,
    PricingSectionModule,
    TestimonialsSectionModule,
    FooterModule,
  ],
  exports: [HeaderComponent, HomeComponent, TopBannerComponent],
  providers: [],
})
export class HomeModule {}
