import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../dashboard/dashboard-data.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor(private dashboardService: DashboardDataService) { }
  achievements = null;
  ngOnInit() {
    this.achievements = this.dashboardService.achievements;
    if (this.dashboardService.getAchievements()) {
      this.achievements = this.dashboardService.getAchievements();
      console.log(this.achievements);
    } else {
      this.dashboardService.getAchievementsFromUrl().subscribe((data: any) => {
        this.achievements = data;
        console.log(this.achievements);
      });
    }
  }
}
