import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { FooterNavbarComponent } from './footer-navbar/footer-navbar.component';
import { BottomBannerComponent } from './bottom-banner/bottom-banner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent, FooterNavbarComponent, BottomBannerComponent],
  imports: [CommonModule],
  exports: [FooterComponent, FooterNavbarComponent, BottomBannerComponent],
})
export class FooterModule {}
