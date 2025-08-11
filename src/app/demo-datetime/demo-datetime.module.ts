import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDatetimeComponent } from './demo-datetime.component';

const routes: Routes = [
  { path: '', component: DemoDatetimeComponent }
];

// Deprecated: This module is deprecated in favor of standalone components
// Use the standalone DemoDatetimeComponent directly instead
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DemoDatetimeComponent
  ]
})
export class DemoDatetimeModule { }
