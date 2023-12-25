import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  constructor(private http: HttpClient,private datePipe: DatePipe) {
    
  }
announcements: any[] = [];

ngOnInit() {
  // Fetch the list of courses when the component initializes
 
  this.fetchAnnouncements()
}
  selectedAnnouncement: any = null;

  toggleAnnouncementDetails(announcement: any) {
    if (this.selectedAnnouncement === announcement) {
      // Clicked on the same announcement, close it
      this.selectedAnnouncement = null;
    } else {
      // Clicked on a different announcement, expand it
      this.selectedAnnouncement = announcement;
    }
  }
  fetchAnnouncements() {
    this.http.get<any[]>('https://brainy-gray-fashion.cyclic.app/announcement/')
      .subscribe((announcements) => {
        // Manually format the date
        this.announcements = announcements.map((announcement) => ({
          ...announcement,
          announcementDate: this.formatDate(announcement.announcementDate).toString(),
        }));
      }, (error) => {
        console.error('Error fetching announcements', error);
      });
  }

  formatDate(date: string): string {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    return formattedDate || '';
  }
}
