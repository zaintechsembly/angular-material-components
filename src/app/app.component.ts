import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from "../../projects/datetime-picker/src/lib/material/button/public-api";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "../../projects/datetime-picker/src/lib/material/icon/public-api";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ]
})
export class AppComponent implements OnInit {

  public nameApp = 'angular-material-components';

  constructor() {
  }

  ngOnInit() {
  }

}
