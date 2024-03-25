import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  private API = 'http://localhost:3000/users';
  JSW_TOKEN_KEY = 'auth'
  USER_KEY = 'auth-user'

  private isAuthenticated$$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticated$$.asObservable();

  setIsAuthenticated(state: boolean) {
    this.isAuthenticated$$.next(state);
  }

  register(payload: {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
  }) {
    return this.http.post<User>(`${this.API}/register`, payload, {
      observe: 'response',
      responseType: 'json',
    });
  }

  login(payload: { email: string; password: string }) {
    return this.http
      .post<User>(`${this.API}/login`, payload, {
        observe: 'response',
        responseType: 'json',
      })
      .pipe(
        tap((res) => {
          this.setIsAuthenticated(true);
          this.saveUser(res.body as User);
        })
      );
  }

  logout() {
    return this.http.post(`${this.API}/logout`, '').pipe(
      tap((res) => {
        this.setIsAuthenticated(false);
        this.cleanUser();
      })
    );
  }

  getJwtToken(): string | null {
    return sessionStorage.getItem(this.JSW_TOKEN_KEY);
  }

  setJwtToken(token: string): void {
    return sessionStorage.setItem(this.JSW_TOKEN_KEY, token);
  }

  clearJwtToken(): void {
    return sessionStorage.removeItem(this.JSW_TOKEN_KEY);
  }

  // LOCAL STORAGE STATE FOR CURRENT LOGGED USER
  saveUser(user: User) {
    localStorage.removeItem(this.USER_KEY);
    return localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  getUser() {
    const user = localStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }

  cleanUser(): void {
    return localStorage.clear();
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem(this.USER_KEY);
    if (user) {
      return true;
    } else {
      return false;
    }
  }

}
