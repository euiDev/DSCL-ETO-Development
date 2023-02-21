import { Validators } from '@angular/forms';

interface DynamicFieldInterface {
  key: string;
  element: string;
  type: string;
  value?: string | Date;
  placeholder?: string;
  validators: string[];
}

class DynamicField implements DynamicFieldInterface {
  constructor(
    public key: string,
    public element: string,
    public type: string,
    public value: string | Date,
    public placeholder: string,
    public validators: string[]
  ) {}
}

export { DynamicFieldInterface, DynamicField };
