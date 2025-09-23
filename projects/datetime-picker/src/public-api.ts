/*
 * Public API Surface of ngx-mat-datetime-picker
 */

export * from './lib/datetime-picker.component';
export * from './lib/datetime-input';
export * from './lib/datetime-picker.module';
export * from './lib/timepicker.component';
export * from './lib/timepicker.module';
export * from './lib/calendar';
export * from './lib/month-view';
export * from './lib/year-view';
export * from './lib/multi-year-view';
export * from './lib/core/date-adapter';
export * from './lib/core/native-date-adapter';
export * from './lib/core/native-date-formats';
export * from './lib/core/date-formats';
export * from './lib/core/native-date.module';

// Material modules re-exports
export { MatButtonModule } from './lib/material/button/public-api';
export { MatDatepickerModule } from './lib/material/datepicker/public-api';
export { MatIconModule } from './lib/material/icon/public-api';
export { MatInputModule } from './lib/material/input/public-api';
export { MatDialogModule } from './lib/material/dialog/public-api';

// Material Button components
export { MatButton, MatAnchor } from './lib/material/button/button';
export { MatCommonModule } from './lib/material/core/common-behaviors/common-module';

// Material Datepicker components
export { MatCalendarBody } from './lib/material/datepicker/calendar-body';
export { MatMonthView } from './lib/material/datepicker/month-view';
export { MatMultiYearView } from './lib/material/datepicker/multi-year-view';
export { MatYearView } from './lib/material/datepicker/year-view';
export { MatCalendar, MatCalendarHeader } from './lib/material/datepicker/calendar';
export { MatDatepickerInput } from './lib/material/datepicker/datepicker-input';
export { MatDatepicker, MatDatepickerContent } from './lib/material/datepicker/datepicker';
export { MatDatepickerToggle, MatDatepickerToggleIcon } from './lib/material/datepicker/datepicker-toggle';
export { MatDatepickerIntl } from './lib/material/datepicker/datepicker-intl';

// Material Form Field components
export { MatError } from './lib/material/form-field/error';
export { MatHint } from './lib/material/form-field/hint';
export { MatLabel } from './lib/material/form-field/label';
export { MatPlaceholder } from './lib/material/form-field/placeholder';
export { MatPrefix } from './lib/material/form-field/prefix';
export { MatSuffix } from './lib/material/form-field/suffix';
export { MatFormField } from './lib/material/form-field/form-field';
export { MatFormFieldModule } from './lib/material/form-field/form-field-module';

// Material Input components
export { MatTextareaAutosize } from './lib/material/input/autosize';
export { MatInput } from './lib/material/input/input';

// Material Icon components
export { MatIcon } from './lib/material/icon/icon';

// Material Dialog components
export { MatDialog } from './lib/material/dialog/dialog';
export { MatDialogContainer } from './lib/material/dialog/dialog-container';
export { MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions } from './lib/material/dialog/dialog-content-directives';
