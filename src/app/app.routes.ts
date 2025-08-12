import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoDatetimeComponent } from './demo-datetime/demo-datetime.component';
import { DemoTimeComponent } from './demo-time/demo-time.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'datetimepicker',
    component: DemoDatetimeComponent
  },
  {
    path: 'timepicker',
    component: DemoTimeComponent
  },
  { path: '', redirectTo: '/datetimepicker', pathMatch: 'full' },
  { path: '**', redirectTo: '/datetimepicker', pathMatch: 'full' }
];
