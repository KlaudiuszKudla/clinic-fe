import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorForm } from '../models/forms.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  initDoctorForm(): FormGroup<DoctorForm> {
    return new FormGroup({
      firstName: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        nonNullable: true,
      }),
      lastName: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        nonNullable: true,
      }),
      specialization: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
        nonNullable: true,
      }),
    });
  }

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'To pole jest wymagane';
    }
    if (control.hasError('minlength')) {
      return `Minimalna ilość znaków: ${control.errors?.['minlength']?.requiredLength}.`;
    }
    if (control.hasError('maxlength')) {
      return `Maksymalna ilość znaków: ${control.errors?.['maxlength']?.requiredLength}.`;
    }
    return '';
  }
}
