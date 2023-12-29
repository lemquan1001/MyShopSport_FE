import { FormControl } from '@angular/forms';
export interface LoginAdminForm {
  login: FormControl<string>;
  password: FormControl<string>;
}
