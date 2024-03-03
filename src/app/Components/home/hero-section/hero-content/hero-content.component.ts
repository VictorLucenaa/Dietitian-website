import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrl: './hero-content.component.scss',
})
export class HeroContentComponent {
  isSmallScreen: boolean = false;
  isBigScreen: boolean = false;

  constructor(
    private breakpointOberserver: BreakpointObserver,
    private destoyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.breakpointOberserver
      .observe([
        '(min-width: 1280px)',
        '(min-width: 768px)',
        '(min-width: 300px) and (max-width: 766px)',
      ])
      .pipe(takeUntilDestroyed(this.destoyRef))
      .subscribe(() => {
        if (
          this.breakpointOberserver.isMatched(
            '(min-width: 300px) and (max-width: 766px)'
          )
        ) {
          this.isSmallScreen = true;
          this.isBigScreen = false;
        }
        if (this.breakpointOberserver.isMatched('(min-width: 768px)')) {
          this.isSmallScreen = false;
          this.isBigScreen = true;
        }
        if (this.breakpointOberserver.isMatched('(min-width: 1280px)')) {
          this.isSmallScreen = false;
          this.isBigScreen = true;
        }
      });
  }
}
