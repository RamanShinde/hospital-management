import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
   
  private baseurl='https://hospital-management-3y59.onrender.com/Doctor';


  constructor(
    private http:HttpClient,
  ) { }

  private docotrs:any[]=[];

  public addDoctor(doctor:any):Observable<any>{
      return this.http.post(`${this.baseurl}/add-doctor`,doctor, { responseType: 'text' })
  }
 
  public getDoctor():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/get-doctor`);
  }

  public updateDoctor(id:number,newdoctor:any):Observable<any>{
    return this.http.put(`${this.baseurl}/update-${id}`,newdoctor,{responseType:'text'});
  }

  public deleteDoctor(id:number):Observable<any>{
    return this.http.delete(`${this.baseurl}/delete-${id}`,{responseType:'text'})
  }
  public setAvailability(id:number,available:boolean):Observable<any>{
    return this.http.put(`${this.baseurl}/${id}/${available}`,null,{responseType:'text'})
  }
} 
