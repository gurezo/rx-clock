import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '@lib/atoms/atoms.module';

import { DigitalRoutingModule } from './digital-routing.module';
import { DigitalComponent } from './digital.component';

@NgModule({
  declarations: [
    DigitalComponent
  ],
  imports: [
    AtomsModule,
    CommonModule,
    DigitalRoutingModule
  ]
})
export class DigitalModule { }
