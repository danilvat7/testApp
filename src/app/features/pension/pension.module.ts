import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { PensionRoutingModule } from './pension-routing.module';

// containers
import { PensionComponent } from './containers/pension.component';

// components
import { PensionCheckerComponent, PensionDescriptionComponent, GraphComponent } from './components';

@NgModule({
  imports: [CommonModule, PensionRoutingModule],
  declarations: [
    PensionComponent,
    PensionCheckerComponent,
    PensionDescriptionComponent,
    GraphComponent
  ]
})
export class PensionModule {}
