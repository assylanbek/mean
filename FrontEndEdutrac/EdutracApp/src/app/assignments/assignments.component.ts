
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  constructor(private http: HttpClient,private datePipe: DatePipe) {
    
  }
  assignments : any[] = [];
  selectedAssignment: any = null;
  ngOnInit() {
    // Fetch the list of courses when the component initializes
   this.fetchAssignments()
    
  }
  toggleAssignmentDetails(assignment: any) {
    if (this.selectedAssignment === assignment) {
      // Clicked on the same assignment, close it
      this.selectedAssignment = null;
    } else {
      // Clicked on a different assignment, expand it
      this.selectedAssignment = assignment;
    }
  }

  fetchAssignments() {
    this.http.get<any[]>('https://brainy-gray-fashion.cyclic.app/assignment/')
      .subscribe((assignments) => {
        // Manually format the date for each assignment
        this.assignments = assignments
         
      }, (error) => {
        console.error('Error fetching assignments', error);
      });
  }

 
}

