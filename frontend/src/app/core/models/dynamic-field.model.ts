import { Validators } from '@angular/forms';

interface DynamicField {
  key: string;
  element: string;
  type: string;
  value?: string;
  placeholder?: string;
  validators: string[];
}

export { DynamicField };
