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

  declare user: User | undefined;

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
          this.user = res.body as User;
        })
      );
  }

  logout() {
    return this.http.post(`${this.API}/logout`, '').pipe(
      tap((res) => {
        this.setIsAuthenticated(false);
        this.user = undefined;
      })
    );
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
