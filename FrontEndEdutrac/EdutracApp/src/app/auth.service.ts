import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {}

  // Define the login method to set the authentication state
  login() {
    this.isAuthenticated = true;
  }

  // Define a method to check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Define a method to log out the user
  logout() {
    this.isAuthenticated = false;
    // You can also clear the authentication token or perform other logout operations here
  }
}
