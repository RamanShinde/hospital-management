import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceeService {
   
    private baseurl=`${environment.apiUrl}/Patient`;

  constructor(
    private http:HttpClient
  ) { }

  patients:any[]=[];

  public addPatient(patient:any):Observable<any>{
     return this.http.post<any>(`${this.baseurl}/add-patient`,patient, )
  }
  public getAllPatient():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/get-patient`);
  }
  public updatePatient(pid:number,newpatient:any) :Observable<string>{
    return this.http.put<any>(`${this.baseurl}/update-${pid}`,newpatient,)
  }
public deletePatient(pid: number): Observable<string> {
  return this.http.delete(`${this.baseurl}/delete-${pid}`, { responseType: 'text' as 'text' });
}
}
