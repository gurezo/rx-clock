import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalogComponent } from './analog.component';

const routes: Routes = [
  {
    path: '',
    component: AnalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalogRoutingModule { }
