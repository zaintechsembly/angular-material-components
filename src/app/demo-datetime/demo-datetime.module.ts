import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '../../../projects/datetime-picker/src/lib/material/button/public-api';
// import { MatCardModule } from '@angular/material/card';
// import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '../../../projects/datetime-picker/src/lib/material/datepicker/public-api';
import { MatIconModule } from '../../../projects/datetime-picker/src/lib/material/icon/public-api';
import { MatInputModule } from '../../../projects/datetime-picker/src/lib/material/input/public-api';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from 'projects/datetime-picker/src/public-api';
import { DemoDatetimeComponent } from './demo-datetime.component';
import { SharedModule } from '../shared';

const routes: Routes = [
  { path: '', component: DemoDatetimeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes,
    ),
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatNativeDateModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatCheckboxModule,
    MatIconModule,
    // MatCardModule,
    SharedModule
  ],
  declarations: [
    DemoDatetimeComponent
  ]
})
export class DemoDatetimeModule { }
