import { NgModule } from '@angular/core';
import { NgxMatHighlightDirective } from './NgxMatHighlightDirective';
import { MatTabsModule } from '@angular/material/tabs';

// Deprecated: Use standalone components instead
@NgModule({
  imports: [MatTabsModule, NgxMatHighlightDirective],
  exports: [NgxMatHighlightDirective, MatTabsModule]
})
export class SharedModule { }
