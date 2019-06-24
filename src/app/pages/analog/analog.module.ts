import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '@lib/atoms/atoms.module';

import { AnalogRoutingModule } from './analog-routing.module';
import { AnalogComponent } from './analog.component';

@NgModule({
  declarations: [AnalogComponent],
  imports: [
    AtomsModule,
    CommonModule,
    AnalogRoutingModule
  ]
})
export class AnalogModule { }
