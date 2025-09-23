import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from './material/button/public-api';
import { MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from './material/datepicker/public-api';
import { MatDialogModule } from './material/dialog/public-api';
import { MatIconModule } from './material/icon/public-api';
import { MatInputModule } from './material/input/public-api';
import { NgxMatCalendar, NgxMatCalendarHeader } from './calendar';
import { NgxMatDatetimeInput } from './datetime-input';
import { NgxMatDatetimeContent, NgxMatDatetimePicker } from './datetime-picker.component';
import { NgxMatMonthView } from './month-view';
import { NgxMatMultiYearView } from './multi-year-view';
import { NgxMatTimepickerModule } from './timepicker.module';
import { NgxMatYearView } from './year-view';

@NgModule({
   imports: [
      CommonModule,
      MatDatepickerModule,
      MatDialogModule,
      PortalModule,
      FormsModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      NgxMatTimepickerModule
   ],
   exports: [
      NgxMatDatetimePicker,
      NgxMatDatetimeInput,
      NgxMatCalendar,
      NgxMatMonthView,
      NgxMatYearView,
      NgxMatMultiYearView,
      NgxMatCalendarHeader
   ],
   declarations: [
      NgxMatDatetimePicker,
      NgxMatDatetimeContent,
      NgxMatDatetimeInput,
      NgxMatCalendar,
      NgxMatMonthView,
      NgxMatYearView,
      NgxMatMultiYearView,
      NgxMatCalendarHeader
   ],
   entryComponents: [
      NgxMatDatetimeContent,
      NgxMatCalendarHeader
   ],
   providers: [
      MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
   ]
})
export class NgxMatDatetimePickerModule { }
