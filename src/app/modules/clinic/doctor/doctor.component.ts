import { Component } from '@angular/core';
import { FormService } from '../../core/services/form.service';
import { FormControl } from '@angular/forms';
import { ClinicService } from '../../core/services/clinic.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent {
  doctorForm = this.formService.initDoctorForm();
  constructor(
    private formService: FormService,
    private clinicService: ClinicService,
  ) {}

  get controls() {
    return this.doctorForm.controls;
  }

  getErrorMessage(control: FormControl) {
    return this.formService.getErrorMessage(control);
  }

  createDoctor() {
    // console.log(this.doctorForm.getRawValue());
    this.clinicService
      .addDoctor(this.doctorForm.getRawValue())
      .subscribe((data) => {
        console.log(data);
      });
  }
}
