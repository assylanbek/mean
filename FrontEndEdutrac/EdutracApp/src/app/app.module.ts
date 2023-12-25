import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; // Correct import statement
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { LoginInstructorComponent } from './login-instructor/login-instructor.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { DatePipe } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component'
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CoursesComponent,
    LoginStudentComponent,
    LoginInstructorComponent,
    FooterComponent,
    AssignmentsComponent,
    AnnouncementsComponent,
    InstructorDashboardComponent,
    StudentDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ DatePipe,AuthService],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
