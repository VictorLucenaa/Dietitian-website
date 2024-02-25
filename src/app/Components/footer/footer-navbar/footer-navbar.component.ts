import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-navbar',
  templateUrl: './footer-navbar.component.html',
  styleUrl: './footer-navbar.component.scss',
})
export class FooterNavbarComponent {
  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
