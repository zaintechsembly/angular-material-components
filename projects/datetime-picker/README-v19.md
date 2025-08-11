# Angular Material Datetime Picker - Standalone Components

[![npm version](https://badge.fury.io/js/%40angular-material-components%2Fdatetime-picker.svg)](https://www.npmjs.com/package/@angular-material-components/datetime-picker)

Angular 19 Material Datetime Picker built with standalone components. No modules required!

## Features

- 🚀 **Angular 19 Standalone Components** - Modern, module-free architecture
- 📅 **Datetime Picker** - Full date and time selection
- ⏰ **Time Picker** - Standalone time selection component
- 🎨 **Material Design** - Consistent with Angular Material
- 📱 **Responsive** - Works on desktop and mobile
- ♿ **Accessible** - Screen reader and keyboard navigation support
- 🌐 **i18n Ready** - Internationalization support

## Installation

```bash
npm install @angular-material-components/datetime-picker
```

## Basic Usage

### Import Standalone Components

```typescript
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { 
  NgxMatDatetimePicker, 
  NgxMatDatetimeInput,
  NgxMatTimepickerComponent 
} from '@angular-material-components/datetime-picker';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgxMatDatetimePicker,
    NgxMatDatetimeInput,
    NgxMatTimepickerComponent
  ],
  template: `
    <mat-form-field>
      <mat-label>Choose a date & time</mat-label>
      <input matInput [ngxMatDatetimePicker]="picker" [formControl]="dateControl">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <ngx-mat-datetime-picker #picker></ngx-mat-datetime-picker>
    </mat-form-field>
  `
})
export class ExampleComponent {
  dateControl = new FormControl(new Date());
}
```

### Time Picker Only

```typescript
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMatTimepickerComponent } from '@angular-material-components/datetime-picker';

@Component({
  selector: 'app-time-example',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMatTimepickerComponent
  ],
  template: `
    <ngx-mat-timepicker 
      [formControl]="timeControl"
      [showSeconds]="true"
      [stepMinute]="15">
    </ngx-mat-timepicker>
  `
})
export class TimeExampleComponent {
  timeControl = new FormControl();
}
```

## Migration from Modules

If you're migrating from the module-based version:

### Before (Angular ≤18 with modules)
```typescript
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';

@NgModule({
  imports: [NgxMatDatetimePickerModule]
})
```

### After (Angular 19 with standalone)
```typescript
import { 
  NgxMatDatetimePicker, 
  NgxMatDatetimeInput 
} from '@angular-material-components/datetime-picker';

@Component({
  standalone: true,
  imports: [NgxMatDatetimePicker, NgxMatDatetimeInput]
})
```

## Requirements

- Angular ≥19.0.0
- Angular Material ≥19.0.0
- RxJS ≥7.5.0

## License

MIT
