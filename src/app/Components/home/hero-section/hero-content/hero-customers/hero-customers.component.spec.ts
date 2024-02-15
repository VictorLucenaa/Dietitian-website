import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCustomersComponent } from './hero-customers.component';

describe('HeroCustomersComponent', () => {
  let component: HeroCustomersComponent;
  let fixture: ComponentFixture<HeroCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
