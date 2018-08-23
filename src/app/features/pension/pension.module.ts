import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { PensionRoutingModule } from './pension-routing.module';

// containers
import { PensionComponent } from './containers/pension.component';

// components
import { PensionCheckerComponent } from './components';
import { PensionDescriptionComponent } from "./components/pension-description/pension-description.component";

@NgModule({
  imports: [CommonModule, PensionRoutingModule],
  declarations: [PensionComponent, PensionCheckerComponent, PensionDescriptionComponent]
})
export class PensionModule {}
