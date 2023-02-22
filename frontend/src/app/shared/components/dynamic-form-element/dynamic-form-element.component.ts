import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicField } from 'src/app/core/models/dynamic-field.model';

@Component({
  selector: 'app-dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html',
  styleUrls: ['./dynamic-form-element.component.scss'],
})
export class DynamicFormElementComponent {
  @Input() element!: DynamicField;
  @Input() formGroup!: FormGroup;
}
