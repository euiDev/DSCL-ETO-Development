import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormElementComponent } from './components/dynamic-form-element/dynamic-form-element.component';
import {
  MatDatepickerModule,
  MatDateSelectionModel,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {
  ErrorStateMatcher,
  MatNativeDateModule,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormElementComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  exports: [
    DynamicFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class SharedModule {}
