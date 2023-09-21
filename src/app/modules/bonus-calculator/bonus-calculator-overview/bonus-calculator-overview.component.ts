import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

export interface IRiskProfile {
  title: string,
  salaryGross: number,
  salaryNet: number,
  tresholdValue: number
}

@Component({
  selector: 'app-bonus-calculator-overview',
  templateUrl: './bonus-calculator-overview.component.html',
  styleUrls: ['./bonus-calculator-overview.component.scss']
})

export class BonusCalculatorOverviewComponent {

  riskProfiles: IRiskProfile[] = [
    {
      title: 'Medium',
      salaryGross: 3000,
      salaryNet: 2495,
      tresholdValue: 8000,
    },
    {
      title: 'High',
      salaryGross: 2400,
      salaryNet: 2195,
      tresholdValue: 6000,
    }
  ];

  bonusCalculatorForm: FormGroup = this.fb.group({
    bonusPercentage: 57,
    hourlyRate: 87.5,
    hours: 160,
    costsCar: 268,
    riskProfile: this.riskProfiles[0]
  });

  constructor(
    private fb: FormBuilder
  ) {}

  get bonusGross(): number {
    return (this.revenue - this.getFormControlValue('riskProfile').tresholdValue) * (this.getFormControlValue('bonusPercentage')/100);
  }

  get bonusNet(): number {
    return this.bonusGross/2;
  }

  get totalBruto(): number {
    return this.getFormControlValue('riskProfile').salaryGross + this.bonusGross - this.getFormControlValue('costsCar');
  }

  get totalNet(): number {
    return (this.bonusGross/2) + this.getFormControlValue('riskProfile').salaryNet - this.getFormControlValue('costsCar');
  }

  get revenue(): number {
    return this.getFormControlValue('hourlyRate') * this.getFormControlValue('hours');
  }

  getFormControlValue(controlName: string) {
    return this.bonusCalculatorForm.get(controlName)?.value;
  }
}
