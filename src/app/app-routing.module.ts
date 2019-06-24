import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/digital/digital.module').then(m => m.DigitalModule)
  },
  {
    path: 'digital',
    loadChildren: () => import('./pages/digital/digital.module').then(m => m.DigitalModule)
  },
  {
    path: 'analog',
    loadChildren: () => import('./pages/analog/analog.module').then(m => m.AnalogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
