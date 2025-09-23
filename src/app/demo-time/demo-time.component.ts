import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "../../../projects/datetime-picker/src/lib/material/button/public-api";
import { MatDatepickerModule } from "../../../projects/datetime-picker/src/lib/material/datepicker/public-api";
import { MatIconModule } from "../../../projects/datetime-picker/src/lib/material/icon/public-api";
import { MatInputModule } from "../../../projects/datetime-picker/src/lib/material/input/public-api";
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from 'projects/datetime-picker/src/public-api';
import { NgxMatHighlightDirective } from '../shared/NgxMatHighlightDirective';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-demo-time',
  templateUrl: './demo-time.component.html',
  styleUrls: ['./demo-time.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatButtonModule,
    NgxMatNativeDateModule,
    MatIconModule,
    NgxMatHighlightDirective,
    MatTabsModule
  ]
})
export class DemoTimeComponent implements OnInit {

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public disableMinute = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  public codeTimePicker = `<ngx-mat-timepicker 
              [(ngModel)]="date" [disabled]="disabled" 
              [showSpinners]="showSpinners"
              [stepHour]="stepHour" [stepMinute]="stepMinute" 
              [stepSecond]="stepSecond" 
              [showSeconds]="showSeconds">
  </ngx-mat-timepicker>`;


  public date: Date;

  public options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ];

  public listColors = ['primary', 'accent', 'warn'];

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];

  constructor() { }

  ngOnInit() { }

}
