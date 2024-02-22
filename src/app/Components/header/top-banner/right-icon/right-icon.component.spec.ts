import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightIconComponent } from './right-icon.component';

describe('RightIconComponent', () => {
  let component: RightIconComponent;
  let fixture: ComponentFixture<RightIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
