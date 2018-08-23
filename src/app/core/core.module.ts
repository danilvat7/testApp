import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent, FooterComponent, HomeComponent } from './components';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {}
