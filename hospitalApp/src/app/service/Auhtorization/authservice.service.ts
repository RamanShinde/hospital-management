import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
 

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private baseUrl= `${environment.AuthUrl}/User`;

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
    return this.http.post(`${this.baseUrl}/login`, request, { responseType: 'text' });
  }
}
