import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@/import';

const Declarations = [];

const Modules = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  CommonModule,
  MaterialModule,
];

@NgModule({
  imports: [
    RouterModule,
    ...Modules,
  ],
  declarations: Declarations,
  exports: [
    ...Declarations,
    ...Modules,
  ],
})
export class SharedModule { }
