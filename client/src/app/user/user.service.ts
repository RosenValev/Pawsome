import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private API = 'http://localhost:3000/users'

  onRegister(payload: { username: string, email: string, password: string, repeatPassword: string }) {
    return this.http.post<User>(`${this.API}/register`, payload);
  }

  onLogin(payload: { email: string, password: string }) {
    return this.http.post<User>(`${this.API}/login`, payload)
  }

}
