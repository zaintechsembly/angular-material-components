import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from './material/button/public-api';
import { MatIconModule } from './material/icon/public-api';
import { MatInputModule } from './material/input/public-api';
import { NgxMatTimepickerComponent } from './timepicker.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    NgxMatTimepickerComponent
  ],
  exports: [
    NgxMatTimepickerComponent
  ]
})
export class NgxMatTimepickerModule { }
