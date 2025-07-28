import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({ providedIn: 'root' })
export class AppoitmetService {
  private baseurl = 'https://appoitment-management.onrender.com/Appoitment';

  constructor(private http: HttpClient) { }

  addApoitment(appointment: any, doctorId: any): Observable<any> {
    return this.http.post(
      `${this.baseurl}/AddAppoitment/${doctorId}`,
      appointment,
      { responseType: 'text' });
  }
  getAppoitment(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseurl}/GetAllAppoitment`);
  }
  updateAppoitment(newappointment: any, id: number): Observable<any> {
    return this.http.put(
      `${this.baseurl}/Update/${id}`,
      newappointment,
      { responseType: 'text' });
  }
  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(
      `${this.baseurl}/Delete/${id}`,
      { responseType: 'text' });
  }
  getappoitmentbyDoctorId(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseurl}/getAppotmentByDoctorId/${id}`);
  }
}
