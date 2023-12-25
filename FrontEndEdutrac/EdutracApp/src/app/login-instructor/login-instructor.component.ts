import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login-instructor',
  templateUrl: './login-instructor.component.html',
  styleUrls: ['./login-instructor.component.css']
})

export class LoginInstructorComponent {
  isLoginForm: boolean = true;
  loginEmail: string = '';
  loginPassword: string = '';
  instructor: any = {};

  // Define a variable to store error messages
  errorMessage: string = '';

  constructor(private http: HttpClient ,  private router: Router ,private authService: AuthService) {}

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }
  

  login() {
    const loginData = {
      email: this.loginEmail,
      password: this.loginPassword
    };
  
    console.log('loginData', loginData);
  
    this.http.post(`https://brainy-gray-fashion.cyclic.app/instructors/login`, loginData).subscribe(
      (response: any) => {
        console.log('Login response:', response);
  
        if (response.token) {
          // Store the token in local storage or a cookie for future authenticated requests
          localStorage.setItem('token', response.token);
          this.loginEmail = '';
          this.loginPassword = '';
          this.authService.login();
          alert('Login successful');
          // Navigate to the home page or any other route after successful login
          this.router.navigate(['instructor-dashboard']); // Change this to the desired route
        } else {
          // Handle login error, display an error message
          alert('Invalid credentials please swap to signup');
        }
      },
      (error) => {
        console.error('Login error:', error);
        // Handle HTTP error, display an error message
        this.errorMessage = 'Server error';
        alert('Invalid credentials please swap to signup');
      }
    );
  }
  

  signup() {
    const signupData = {
      name: this.instructor.name,
      gender: this.instructor.gender,
      dateOfBirth: this.instructor.dateOfBirth,
      department: this.instructor.department,
      email: this.instructor.email,
      contactNumber: this.instructor.contactNumber,
      password: this.instructor.password,
    };

    console.log("signupData",signupData)

    this.http.post(`https://brainy-gray-fashion.cyclic.app/instructors/signup`, signupData).subscribe(
      (response: any) => {
        // Check if the signup was successful
        alert('Signup successful');
        this.clearInputFields();
        if (response.success) {
          // Handle successful signup, e.g., navigate to a different page
          console.log('Signup successful');
      
        alert('Signup successful');
        } else {
          // Handle signup error, display an error message
          this.errorMessage = 'Signup failed';
        }
      },
      (error) => {
        // Handle HTTP error, display an error message
        this.errorMessage = 'Server error';
      console.error('Server error', error);
      }
    );
  }

  clearInputFields() {
    this.instructor.name = '';
    this.instructor.gender = '';
    this.instructor.dateOfBirth = '';
    this.instructor.department = '';
    this.instructor.email = '';
    this.instructor.contactNumber = '';
    this.instructor.password = '';
  }
}
