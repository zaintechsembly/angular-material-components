import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'datetimepicker',
    loadComponent: () => import('./demo-datetime/demo-datetime.component').then(m => m.DemoDatetimeComponent)
  },
  {
    path: 'timepicker',
    loadComponent: () => import('./demo-time/demo-time.component').then(m => m.DemoTimeComponent)
  },
  { path: '', redirectTo: '/datetimepicker', pathMatch: 'full' },
  { path: '**', redirectTo: '/datetimepicker', pathMatch: 'full' }
];
