import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from 'src/app/dashboard/dashboard-data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EducationDetailsComponent implements OnInit {

  constructor(private dashboardService: DashboardDataService) { }
  data: any;
  education: any;
  columnsToDisplayHeader = ['Name', 'School/College', 'Board/University', 'Percentage', 'Year of Passing'];
  columnsToDisplayData = ['name', 'schoolCollegeName', 'boardUniv', 'marks', 'year'];
  expandedElement: any | null;
  ngOnInit() {
    if (this.dashboardService.getEducation()) {
      this.data = this.dashboardService.getEducation();
      this.education = this.data.edu;
    } else {
      this.dashboardService.getEducationFromUrl(sessionStorage.getItem('username')).subscribe((data: any) => {
        this.data = data;
        this.education = this.data.edu;
        console.log(this.education);
      });
    }
  }

}
