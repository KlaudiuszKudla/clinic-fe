import { FormControl } from '@angular/forms';

export interface DoctorForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  specialization: FormControl<string>;
}
