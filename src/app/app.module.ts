import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "../../projects/datetime-picker/src/lib/material/button/public-api";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "../../projects/datetime-picker/src/lib/material/icon/public-api";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "datetimepicker",
    loadComponent: () => import("./demo-datetime/demo-datetime.component").then(m => m.DemoDatetimeComponent),
  },
  {
    path: "timepicker", 
    loadComponent: () => import("./demo-time/demo-time.component").then(m => m.DemoTimeComponent),
  },
  { path: "", redirectTo: "/datetimepicker", pathMatch: "full" },
  { path: "**", redirectTo: "/datetimepicker", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
