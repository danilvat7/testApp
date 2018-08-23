import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// shared module
import { SharedModule } from '../shared/shared.module';

// components
import { HeaderComponent, FooterComponent, HomeComponent } from './components';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {}
