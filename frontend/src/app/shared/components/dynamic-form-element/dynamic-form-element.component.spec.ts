import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicField } from 'src/app/core/models/dynamic-field.model';

import { DynamicFormElementComponent } from './dynamic-form-element.component';

describe('DynamicFormElementComponent', () => {
  let component: DynamicFormElementComponent;
  let fixture: ComponentFixture<DynamicFormElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormElementComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormElementComponent);
    component = fixture.componentInstance;
    component.element = new DynamicField(
      'email',
      'input',
      'email',
      '',
      'Email',
      ['required', 'email']
    );
    component.formGroup = new FormGroup({
      email: new FormControl(''),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
