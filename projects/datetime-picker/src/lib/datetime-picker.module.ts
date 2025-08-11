import { NgxMatCalendar, NgxMatCalendarHeader } from './calendar';
import { NgxMatDatetimeInput } from './datetime-input';
import { NgxMatDatetimeContent, NgxMatDatetimePicker } from './datetime-picker.component';
import { NgxMatMonthView } from './month-view';
import { NgxMatMultiYearView } from './multi-year-view';
import { NgxMatTimepickerComponent } from './timepicker.component';
import { NgxMatYearView } from './year-view';

// Re-export standalone components for backward compatibility
export {
   NgxMatDatetimePicker,
   NgxMatDatetimeInput,
   NgxMatCalendar,
   NgxMatMonthView,
   NgxMatYearView,
   NgxMatMultiYearView,
   NgxMatCalendarHeader,
   NgxMatTimepickerComponent
}

/**
 * @deprecated All components are now standalone. Import them directly instead of using this module.
 */
export class NgxMatDatetimePickerModule { }
