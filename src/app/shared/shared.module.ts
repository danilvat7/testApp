import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { StepButtonComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [StepButtonComponent],
  exports: [StepButtonComponent]
})
export class SharedModule {}
