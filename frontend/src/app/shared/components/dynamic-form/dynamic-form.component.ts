import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { DynamicField } from 'src/app/core/models/dynamic-field.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() dynamicFormFields: DynamicField[] = [];
  @Output() submitEvent = new EventEmitter<boolean>();
  @Output() dynamicFormCreatedEvent = new EventEmitter<FormGroup>();
  @ContentChild('buttonGroup') buttonGroup!: TemplateRef<unknown>;

  dynamicFormGroup: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.dynamicFormFields.forEach((element) => {
      this.dynamicFormGroup.addControl(
        element.key,
        new FormControl(
          element.value,
          this.processValidators(element.validators)
        )
      );
    });

    this.dynamicFormCreatedEvent.emit(this.dynamicFormGroup);
  }

  onSubmit() {
    return this.submitEvent.emit(true);
  }

  private processValidators(
    dynamicFormValidators: string[]
  ): ValidationErrors | null {
    const validators: ValidationErrors | null = {
      required: Validators.required,
      email: Validators.email,
    };
    return dynamicFormValidators.map((validator) => validators[validator]);
  }
}
