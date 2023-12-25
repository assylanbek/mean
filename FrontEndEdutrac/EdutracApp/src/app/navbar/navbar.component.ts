import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  OnInit {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isStudentLoggedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}
    logout() {
    // Perform any necessary logout logic (e.g., clearing session, local storage, etc.)
    this.isStudentLoggedIn = false; // Update the login state
    // Redirect to the home page or any other desired page
  }
}
