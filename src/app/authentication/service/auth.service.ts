import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() { }

  public logIn(obj:any): boolean {
    if (obj.email === 'email' && obj.password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logOut(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
