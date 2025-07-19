import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {

  private baseurl="http://localhost:8080/Department";

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
