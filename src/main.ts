import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes = [
  { path: "home", component: HomeComponent },
  {
    path: "datetimepicker",
    loadComponent: () => import('./app/demo-datetime/demo-datetime.component').then(m => m.DemoDatetimeComponent),
  },
  {
    path: "timepicker",
    loadComponent: () => import('./app/demo-time/demo-time.component').then(m => m.DemoTimeComponent),
  },
  { path: "", redirectTo: "/datetimepicker", pathMatch: "full" as const },
  { path: "**", redirectTo: "/datetimepicker", pathMatch: "full" as const },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule)
  ]
})
.catch(err => console.error(err));
