import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PensionComponent } from './containers/pension.component';
import { PensionCheckerComponent } from './components';

const pensionRoutes: Routes = [
  {
    path: '',
    component: PensionComponent,
    children: [
      { path: '', redirectTo: 'checker', pathMatch: 'full' },
      { path: 'checker', component: PensionCheckerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pensionRoutes)],
  exports: [RouterModule]
})
export class PensionRoutingModule {}
