import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusCalculatorOverviewComponent } from './bonus-calculator-overview/bonus-calculator-overview.component';

const routes: Routes = [
  {
    path:"",
    component: BonusCalculatorOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusCalculatorRoutingModule { }
