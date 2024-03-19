import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private API = 'http://localhost:3000/users'

  register(payload: { username: string, email: string, password: string, repeatPassword: string }) {
    return this.http.post<User>(`${this.API}/register`, payload, { observe: 'response', responseType: 'json' });
  }

  login(payload: { email: string, password: string }) {
    return this.http.post<User>(`${this.API}/login`, payload, { observe: 'response', responseType: 'json' })
  }

  getJwtToken(): string | null {
    return sessionStorage.getItem('auth');
  }

  setJwtToken(token: string): void {
    return sessionStorage.setItem('auth', token);
  }

  clearJwtToken(): void {
    return sessionStorage.removeItem('auth');
  }
}