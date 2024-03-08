import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private API = 'http://localhost:3000/users'

  onRegister(username: string, email: string, password: string, repeatPassword: string) {
    const payload = { username, email, password, repeatPassword };
    return this.http.post<User>(`${this.API}/register`, payload);
  }

}
