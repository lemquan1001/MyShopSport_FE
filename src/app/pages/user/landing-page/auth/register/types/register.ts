import { FormControl } from '@angular/forms';
export interface RegisterForm {
  user: FormControl<string>;
  pass: FormControl<string>;
  name: FormControl<string>;
  phoneNumber: FormControl<string>;
  email: FormControl<string>;
  address: FormControl<string>;
}
