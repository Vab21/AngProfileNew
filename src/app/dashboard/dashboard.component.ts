import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardDataService } from './dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardDataService: DashboardDataService) { }
  name = 'Vaibhav Jain';
  achievementsTitle = 'Achievements';
  personalProfileTitle = 'Personal Profile';
  contactTitle = 'Contact';
  languagesTitle = 'Languages';
  educationTitle = 'Education';
  workExTitle = 'Work Experience';
  skillsTitle = 'Skills'; // skills, version, last used, years of exp.
  hobbiesTitle = 'Hobbies';
  achievements: Observable<any>;
  contact: Observable<any>;
  education: Observable<any>;
  skills: Observable<any>;
  languages: Observable<any>;
  hobbies: Observable<any>;
  workExp: Observable<any>;
  ngOnInit() {
    this.dashboardDataService.getAchievementsFromUrl().subscribe((data: any) => {
      this.achievements = data;
    });
    this.dashboardDataService.getContactFromUrl(sessionStorage.getItem('username')).subscribe((data: any) => {
      this.contact = data;
      console.log(this.contact);
    });
    this.dashboardDataService.getEducationFromUrl(sessionStorage.getItem('username')).subscribe((data: any) => {
      this.education = data.edu;
      console.log(this.education);
    });
    this.dashboardDataService.getSkillsFromUrl(sessionStorage.getItem('username')).subscribe((data: any) => {
      this.skills = data.skills;
      console.log(this.skills);
    });
    this.dashboardDataService.getLanguagesFromUrl(sessionStorage.getItem('username')).subscribe((data: any) => {
      this.languages = data.languages;
      console.log(this.languages);
    });
    this.dashboardDataService.getHobbiesFromUrl(sessionStorage.getItem('username')).subscribe((data: any) => {
      this.hobbies = data.hobbies;
      console.log(this.hobbies);
    });
    this.dashboardDataService.getWorkExpFromUrl(sessionStorage.getItem('username')).subscribe((data: any) => {
      this.workExp = data.workExp;
      console.log(this.workExp);
    });

  }
}
