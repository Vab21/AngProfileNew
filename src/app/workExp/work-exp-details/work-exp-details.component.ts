import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../dashboard/dashboard-data.service';

@Component({
  selector: 'app-work-exp-details',
  templateUrl: './work-exp-details.component.html',
  styleUrls: ['./work-exp-details.component.css']
})
export class WorkExpDetailsComponent implements OnInit {

  constructor(private dashboardService: DashboardDataService) { }
  data: any;
  workExp: any;
  ngOnInit() {
    if (this.dashboardService.getWorkExp()) {
      this.data = this.dashboardService.getWorkExp();
      this.workExp = this.data.workExp;
      console.log(this.workExp);
    } else {
      this.dashboardService.getWorkExpFromUrl(sessionStorage.getItem('username')).subscribe((data: any) => {
        this.data = data;
        this.workExp = this.data.workExp;
        console.log(this.workExp);
      });
    }
  }

}
