import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent  implements OnInit {

  isStudentLoggedIn: boolean = false; // Initially, the student is not logged in
  constructor(private router: Router) {}
  
  ngOnInit(): void {}
  logout() {
    // Perform any necessary logout logic (e.g., clearing session, local storage, etc.)
  
    // Redirect to the home page
    this.isStudentLoggedIn = false; // Update the login state
    this.router.navigate(['/']); // Redirect to the home page
  }
}
