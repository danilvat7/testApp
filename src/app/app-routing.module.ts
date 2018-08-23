import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/components';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'pension',
        loadChildren: './features/pension/pension.module#PensionModule',
      },
      { path: '', redirectTo: 'pension', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
