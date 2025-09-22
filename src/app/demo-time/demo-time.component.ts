import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemePalette } from '../../../core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '../../../form-field';
import { MatInputModule } from '../../../input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '../../../button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMatTimepickerComponent } from '../../../projects/datetime-picker/src/lib/timepicker.component';
import { NgxMatHighlightDirective } from '../shared/NgxMatHighlightDirective';
import { NgxMatNativeDateModule } from '../../../projects/datetime-picker/src/lib/core/native-date.module';

@Component({
  selector: 'app-demo-time',
  templateUrl: './demo-time.component.html',
  styleUrls: ['./demo-time.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    NgxMatTimepickerComponent,
    NgxMatHighlightDirective,
    NgxMatNativeDateModule
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


  public date: Date = new Date(new Date().setHours(0, 0, 0, 0));

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
