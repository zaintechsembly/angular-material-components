import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';

const appRoutes: Routes = [
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

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes)
   ]
})
export class AppModule { }