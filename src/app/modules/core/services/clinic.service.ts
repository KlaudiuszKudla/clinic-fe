import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorForm } from '../models/forms.model';
import { Doctor } from '../models/clinic.model';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addDoctor(doctor: Doctor): Observable<any> {
    return this.http.post<DoctorForm>(`${this.apiUrl}/doctor`, doctor);
  }
}
