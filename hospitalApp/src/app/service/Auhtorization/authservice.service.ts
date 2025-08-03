import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private baseUrl= 'https://authservice-1jv1.onrender.com/User';

  constructor(private http: HttpClient) { }

  
  signup(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/SingupUser`, user);
  }

  login(email: string, password: string, role: string): Observable<any> {
    const request = {
      email,
      password,
      role
    };
    return this.http.post(`${this.baseUrl}/login`, request);
  }
}
