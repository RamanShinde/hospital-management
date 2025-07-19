import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppoitmetService {

constructor(private http:HttpClient) { }
private baseurl="http://localhost:8081/Appoitment";
 private appoitments:any[]=[];

  addApoitment(appointment:any,doctorId:any):Observable<any>{
     return this.http.post(`${this.baseurl}/AddAppoitment/${doctorId}`,appointment,{responseType:"text"});
  }
  getAppoitment(){
    return this.http.get<any[]>(`${this.baseurl}/GetAllAppoitment`);
  }
  updateAppoitment(newappointment:any,id:number):Observable<any>{
    return this.http.put(`${this.baseurl}/Update/${id}`,newappointment,{responseType:"text"});
  }
  deleteAppointment(id:number):Observable<any>{
    return this.http.delete(`${this.baseurl}/Delete/${id}`,{responseType:"text"});
  }

  getappoitmentbyDoctorId(id:number){
    return this.http.get<any>(`${this.baseurl}/getAppotmentByDoctorId/${id}`)
  }
  
}
