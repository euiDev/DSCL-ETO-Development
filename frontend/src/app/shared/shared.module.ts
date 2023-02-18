import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormElementComponent } from './components/dynamic-form-element/dynamic-form-element.component';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormElementComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent],
})
export class SharedModule {}
