import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicRoutingModule } from './clinic-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DoctorComponent],
  imports: [CommonModule, ClinicRoutingModule, ReactiveFormsModule],
})
export class ClinicModule {}
