import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoTimeComponent } from './demo-time.component';

const routes: Routes = [
  { path: '', component: DemoTimeComponent }
];

// Deprecated: This module is deprecated in favor of standalone components
// Use the standalone DemoTimeComponent directly instead
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DemoTimeComponent
  ]
})
export class DemoTimeModule { }
