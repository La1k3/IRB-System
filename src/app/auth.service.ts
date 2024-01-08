import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private userRole: 'user' | 'admin' | null = null;

  constructor() {
  }

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'user') {
      this.isLoggedIn = true;
      this.userRole = 'user';
      return true;
    } else if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      this.userRole = 'admin';
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userRole = null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserRole(): "user" | "admin" | null {
    return this.userRole;
  }

}
