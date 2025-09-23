import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ThemePalette } from "@angular/material/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatDatepickerModule, MatIconModule, MatInputModule, NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from 'projects/datetime-picker/src/public-api';
import { NgxMatHighlightDirective } from '../shared/NgxMatHighlightDirective';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: "app-demo-datetime",
  templateUrl: "./demo-datetime.component.html",
  styleUrls: ["./demo-datetime.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
export class DemoDatetimeComponent implements OnInit {
  @ViewChild("picker") picker: any;

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: Date;
  public maxDate: Date;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = "primary";
  public disableMinute = false;
  public hideTime = false;

  public dateControl = new FormControl(null);

  public options = [
    { value: true, label: "True" },
    { value: false, label: "False" },
  ];

  public listColors = ["primary", "accent", "warn"];

  public stepHours = [1, 2, 3, 4, 5];
  public stepMinutes = [1, 5, 10, 15, 20, 25];
  public stepSeconds = [1, 5, 10, 15, 20, 25];

  public code1 =
    "npm install --save angular-material-components/datetime-picker";

  public code3 = ` `;

  public code2 = `import {
           NgxMatDatetimePickerModule, 
           NgxMatNativeDateModule, 
           NgxMatTimepickerModule 
  } from 'angular-material-components/datetime-picker';
  
NgModule({
  imports: [
    ...
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    ...
  ]
})
export class AppModule { }`;
  public code5 = `Injectable()
export class CustomDateAdapter extends NgxMatDateAdapter<D> {...}
// D can be Date, Moment or customized type`;

  public code6 = `NgModule({
  providers: [
    {
      provide: NgxMatDateAdapter,
      useClass: CustomDateAdapter,
      deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }
  ],
})
export class CustomDateModule { }`;

  public code7 = `// If using Moment
const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "l, LTS"
  },
  display: {
    dateInput: "l, LTS",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

//and in the module providers 
providers: [
    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_FORMATS }
  ]`;

  public code8 =
    '<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">';

  constructor() {}

  ngOnInit() {}

  toggleMinDate(evt: any) {
    if (evt.checked) {
      this._setMinDate();
    } else {
      this.minDate = null;
    }
  }

  toggleMaxDate(evt: any) {
    if (evt.checked) {
      this._setMaxDate();
    } else {
      this.maxDate = null;
    }
  }

  closePicker() {
    this.picker.cancel();
  }

  private _setMinDate() {
    const now = new Date();
    this.minDate = new Date();
    this.minDate.setDate(now.getDate() - 1);
  }

  private _setMaxDate() {
    const now = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(now.getDate() + 1);
  }
}
