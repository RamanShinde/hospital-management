import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {

  
  private baseurl='https://hospital-management-3y59.onrender.com/Department';
 

  constructor(
    private http:HttpClient
  ) {}

  departments:any[]=[];

  public addDepartment(department:any):Observable<any>{
     return this.http.post(`${this.baseurl}/add-department`,department, { responseType: 'text' })
  }

  public getDepartment(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/get-department`);
  }
} 
