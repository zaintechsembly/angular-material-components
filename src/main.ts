import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';

if (environment.production) {
  // Enable production mode if needed
}

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'datetimepicker',
    loadComponent: () => import('./app/demo-datetime/demo-datetime.component').then(m => m.DemoDatetimeComponent)
  },
  {
    path: 'timepicker',
    loadComponent: () => import('./app/demo-time/demo-time.component').then(m => m.DemoTimeComponent)
  },
  { path: '', redirectTo: '/datetimepicker', pathMatch: 'full' as const },
  { path: '**', redirectTo: '/datetimepicker', pathMatch: 'full' as const }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
    )
  ]
}).catch(err => console.error(err));
