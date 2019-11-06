import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements/achievements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EducationDetailsComponent } from './education/education-details/education-details.component';
import { SkillsDetailsComponent } from './skills/skills-details/skills-details.component';
import { WorkExpDetailsComponent } from './workExp/work-exp-details/work-exp-details.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'education', component: EducationDetailsComponent },
  { path: 'skills', component: SkillsDetailsComponent },
  { path: 'workExp', component: WorkExpDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
