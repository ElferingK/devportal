import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //TODO: Use separate route when dashboard is done - 'bonus-calculator',
    loadChildren: () => import('./modules/bonus-calculator/bonus-calculator.module').then(m => m.BonusCalculatorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
