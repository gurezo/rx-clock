import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockCardComponent } from './clock-card/clock-card.component';

@NgModule({
  declarations: [ClockCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClockCardComponent
  ]
})
export class AtomsModule { }
