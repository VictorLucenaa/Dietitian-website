import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-footer-navbar',
  templateUrl: './footer-navbar.component.html',
  styleUrl: './footer-navbar.component.scss',
})
export class FooterNavbarComponent implements OnInit {
  isSmallScreen: boolean = false;
  isBigScreen: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        '(min-width: 1280px)',
        '(min-width: 768px)',
        '(min-width: 300px) and (max-width: 766px)',
      ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (
          this.breakpointObserver.isMatched(
            '(min-width: 300px) and (max-width: 766px)'
          )
        ) {
          this.isSmallScreen = true;
          this.isBigScreen = false;
        }
        if (this.breakpointObserver.isMatched('(min-width: 768px)')) {
          this.isSmallScreen = false;
          this.isBigScreen = true;
        }
        if (this.breakpointObserver.isMatched('(min-width: 1280px)')) {
          this.isSmallScreen = false;
          this.isBigScreen = true;
        }
      });
  }

  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
