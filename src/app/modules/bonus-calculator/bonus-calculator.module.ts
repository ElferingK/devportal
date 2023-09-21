import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BonusCalculatorRoutingModule } from './bonus-calculator-routing.module';
import { BonusCalculatorOverviewComponent } from './bonus-calculator-overview/bonus-calculator-overview.component';


@NgModule({
  declarations: [
    BonusCalculatorOverviewComponent
  ],
  imports: [
    CommonModule,
    BonusCalculatorRoutingModule,
    ReactiveFormsModule
  ]
})
export class BonusCalculatorModule { }
