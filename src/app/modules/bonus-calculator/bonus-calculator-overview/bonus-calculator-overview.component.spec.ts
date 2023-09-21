import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusCalculatorOverviewComponent } from './bonus-calculator-overview.component';

describe('BonusCalculatorOverviewComponent', () => {
  let component: BonusCalculatorOverviewComponent;
  let fixture: ComponentFixture<BonusCalculatorOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonusCalculatorOverviewComponent]
    });
    fixture = TestBed.createComponent(BonusCalculatorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
