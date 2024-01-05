import { FormControl } from '@angular/forms';
export interface SignupAdminForm {
  userName: FormControl<string>;
  login: FormControl<string>;
  password: FormControl<string>;
}
