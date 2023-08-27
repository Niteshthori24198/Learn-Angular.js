import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {
    console.log('Authentication Service Initialized...');
  }
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user, httpOptions);
  }
  loginUser = (user: any): Observable<any> => {
    return this.http.get<any>(`${this.apiUrl}?email=${user.email}&password=${user.password}`);
  }
}
