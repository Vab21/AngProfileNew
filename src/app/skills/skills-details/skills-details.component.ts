import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../dashboard/dashboard-data.service';

@Component({
  selector: 'app-skills-details',
  templateUrl: './skills-details.component.html',
  styleUrls: ['./skills-details.component.css']
})
export class SkillsDetailsComponent implements OnInit {

  constructor(private dashboardService:DashboardDataService) {  }
  data: any;
  skills: any;
  columnsToDisplayHeader = ['Name', 'Version', 'Experience'];
  columnsToDisplayData = ['name', 'version', 'experience'];
  expandedElement: any | null;
  ngOnInit() {
    if (this.dashboardService.getSkills()) {
      this.data = this.dashboardService.getSkills();
      this.skills = this.data.skillDetails;
      console.log(this.skills);
    } else {
      this.dashboardService.getSkillsFromUrl(sessionStorage.getItem('username')).subscribe((data: any) => {
        this.data = data;
        this.skills = this.data.skillDetails;
        console.log(this.skills);
      });
    }
  }
}
