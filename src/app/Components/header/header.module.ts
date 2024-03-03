import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { NavbarButtonsComponent } from './navbar/navbar-buttons/navbar-buttons.component';
import { LeftIconComponent } from './top-banner/left-icon/left-icon.component';
import { RightIconComponent } from './top-banner/right-icon/right-icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    TopBannerComponent,
    NavbarButtonsComponent,
    LeftIconComponent,
    RightIconComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    TopBannerComponent,
    NavbarButtonsComponent,
    LeftIconComponent,
    RightIconComponent,
  ],
})
export class HeaderModule {}
