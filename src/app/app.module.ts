import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { TopBannerComponent } from './header/top-banner/top-banner.component';
import { LeftIconComponent } from './header/top-banner/left-icon/left-icon.component';
import { RightIconComponent } from './header/top-banner/right-icon/right-icon.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { NavbarButtonsComponent } from './header/navbar/navbar-buttons/navbar-buttons.component';
import { HeroSectionComponent } from './Components/home/hero-section/hero-section.component';
import { HeroContentComponent } from './Components/home/hero-section/hero-content/hero-content.component';
import { TextHeaderComponent } from './Components/home/hero-section/hero-content/text-header/text-header.component';
import { HeroButtonsComponent } from './Components/home/hero-section/hero-content/hero-buttons/hero-buttons.component';
import { HeroCustomersComponent } from './Components/home/hero-section/hero-content/hero-customers/hero-customers.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
