import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent  implements OnInit {

  courseCode: string = '';
  courseName: string = '';
  department: string = '';
  credits: number = 0;
  description: string = '';
  instructor: string = '';
  showAssignment = true;
  showCourse = false;
  showAnnouncement = false;
  assignmentTitle:string=""
  assignmentDescription:string=""
  assignmentDueDate: Date = new Date('YYYY-MM-DD')
courseDescription: string=""
announcementTitle: string=""
announcementDescription: string=""
  
assignmentCourse:string=""

assignments: any[] = [];


announcements: any[] = [];
  
announcementDate: Date = new Date('YYYY-MM-DD')



 
showCourseList: boolean = true; // Set this to true to initially display the course list
showAssignmentList: boolean = false;
  showCreateAssignment() {
    this.showAssignment = true;
    this.showCourse = false;
    this.showAnnouncement= false;
  }

  showCreateCourse() {
    this.showAssignment = false;
    this.showCourse = true;
    this.showAnnouncement= false;
  }

  showCreateAnnouncement() {
    this.showAssignment = false;
    this.showCourse = false;
    this.showAnnouncement = true;
  }
  courses: any[] = [];


  constructor(private http: HttpClient) {}
  ngOnInit() {
    // Fetch the list of courses when the component initializes
    this.fetchCourses();
    this.fetchAssignments()
    this.fetchAnnouncements()
  }



  createCourse() {
    const newCourse = {
      courseCode: this.courseCode,
      courseName: this.courseName,
      department: this.department,
      credits: this.credits,
      description: this.description,
      instructor: this.instructor
    };

    // Send a POST request to create the course
    this.http.post('https://brainy-gray-fashion.cyclic.app/course/create', newCourse)
      .subscribe((response) => {
        // Handle the response, e.g., show a success message
        alert("Course has been added")
        console.log('Course created successfully', response);
      this.fetchCourses()
        // You can also reset the form fields if needed
        this.resetForm();
      }, (error) => {
        // Handle any errors
        console.error('Error creating course', error);
      });
  }

  resetForm() {
    // Reset form fields to their initial values
    this.courseCode = '';
    this.courseName = '';
    this.department = '';
    this.credits = 0;
    this.description = '';
    this.instructor = '';
  }

  
 


  editCourse(courseId: string) {
    // Implement your edit course logic here
  }
  
 

  fetchCourses() {
    // Fetch the list of courses from your API
    this.http.get<any[]>('https://brainy-gray-fashion.cyclic.app/course/')
      .subscribe((courses) => {
        // Update the courses property with the fetched data
        this.courses = courses;
      }, (error) => {
        // Handle any errors
        console.error('Error fetching courses', error);
      });
  }

  deleteCourse(courseId: string) {
    // Send a DELETE request to delete the course
    this.http.delete(`https://brainy-gray-fashion.cyclic.app/course/delete/${courseId}`)
      .subscribe(() => {
        console.log(courseId)
        // Handle the successful deletion, e.g., show a success message
        alert('Course has been deleted');
        console.log('Course deleted successfully');
        
        // Update the UI by fetching the updated list of courses
        this.fetchCourses();
      }, (error) => {
        // Handle any errors
        console.error('Error deleting course', error);
      });
  }

  createAssignment() {
    const newAssignment = {
      assignmentTitle: this.assignmentTitle,
      assignmentDescription: this.assignmentDescription,
      assignmentDueDate: this.assignmentDueDate,
      assignmentCourse: this.assignmentCourse
    };

    // Send a POST request to create the assignment
    this.http.post('https://brainy-gray-fashion.cyclic.app/assignment/create', newAssignment)
      .subscribe((response) => {
        alert('Assignment has been added');
       
        console.log('Assignment created successfully', response);
        this.fetchAssignments(); // Refresh the assignment list
        this.resetAssignmentForm(); // Reset the assignment form
      }, (error) => {
        console.error('Error creating assignment', error);
      });
  }

  // Function to fetch assignments
  fetchAssignments() {
    this.http.get<any[]>('https://brainy-gray-fashion.cyclic.app/assignment/')
      .subscribe((assignments) => {
        this.assignments = assignments;
      }, (error) => {
        console.error('Error fetching assignments', error);
      });
  }

  // Function to delete an assignment by ID
  deleteAssignment(assignmentId: string) {
    this.http.delete(`https://brainy-gray-fashion.cyclic.app/assignment/delete/${assignmentId}`)
      .subscribe((response) => {
        alert('Assignment has been deleted');
        console.log('Assignment deleted successfully', response);
        this.fetchAssignments(); // Refresh the assignment list after deletion
      }, (error) => {
        console.error('Error deleting assignment', error);
      });
  }

  // Function to reset the assignment form
  resetAssignmentForm() {
    this.assignmentTitle = '';
    this.assignmentDescription = '';
    this.assignmentDueDate = new Date();
    this.assignmentCourse = '';
  }

  // Create Announcement
  createAnnouncement() {
    const newAnnouncement = {
      announcementTitle: this.announcementTitle,
      announcementDescription: this.announcementDescription,
      announcementDate: this.announcementDate // Include the date field in the request
    };

    this.http.post('https://brainy-gray-fashion.cyclic.app/announcement/create', newAnnouncement)
      .subscribe((response) => {
        alert('Announcement has been added');
        console.log('Announcement created successfully', response);
        this.fetchAnnouncements(); // Update the list of announcements
        this.resetAnnouncementForm();
      }, (error) => {
        console.error('Error creating announcement', error);
      });
  }



  resetAnnouncementForm() {
    this.announcementTitle = '';
    this. announcementDescription = '';
    this. announcementDate = new Date();
  
  }
  // Fetch Announcements
  fetchAnnouncements() {
    this.http.get<any[]>('https://brainy-gray-fashion.cyclic.app/announcement/')
      .subscribe((announcements) => {
        this.announcements = announcements;
      }, (error) => {
        console.error('Error fetching announcements', error);
      });
  }

  // Delete Announcement
  deleteAnnouncement(announcementId: string) {
    this.http.delete(`https://brainy-gray-fashion.cyclic.app/announcement/delete/${announcementId}`)
      .subscribe(() => {
        alert('Announcement has been deleted');
        this.fetchAnnouncements(); // Update the list of announcements
      }, (error) => {
        console.error('Error deleting announcement', error);
      });
  }

}