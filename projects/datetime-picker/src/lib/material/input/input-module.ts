/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {TextFieldModule} from '@angular/cdk/text-field';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ErrorStateMatcher} from '../core/public-api';
import {MatFormFieldModule} from '../form-field/public-api';
import {MatTextareaAutosize} from './autosize';
import {MatInput} from './input';


@NgModule({
  imports: [
    CommonModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInput,
    MatTextareaAutosize,
  ],
  exports: [
    TextFieldModule,
    // We re-export the `MatFormFieldModule` since `MatInput` will almost always
    // be used together with `MatFormField`.
    MatFormFieldModule,
    MatInput,
    MatTextareaAutosize,
  ],
  providers: [ErrorStateMatcher],
})
export class MatInputModule {}
