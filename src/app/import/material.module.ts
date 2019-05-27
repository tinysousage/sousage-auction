import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
} from '@angular/material';

const MaterialImports = [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCheckboxModule,
  MatSelectModule,
];

@NgModule({
  imports: MaterialImports,
  exports: MaterialImports,
})
export class MaterialModule { }
