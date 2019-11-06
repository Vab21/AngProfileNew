import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatCardModule,
          MatToolbarModule,
          MatGridListModule,
          MatButtonModule,
          MatListModule,
          MatIconModule,
          MatFormFieldModule,
          MatInputModule,
          MatTableModule,
          MatChipsModule, 
          MatTabsModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchievementsComponent } from './achievements/achievements/achievements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginService } from './userLogin.service';
import { DashboardDataService } from './dashboard/dashboard-data.service';
import { EducationDetailsComponent } from './education/education-details/education-details.component';
import { SkillsDetailsComponent } from './skills/skills-details/skills-details.component';
import { WorkExpDetailsComponent } from './workExp/work-exp-details/work-exp-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AchievementsComponent,
    DashboardComponent,
    LoginComponent,
    EducationDetailsComponent,
    SkillsDetailsComponent,
    WorkExpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatChipsModule,
    MatTabsModule
  ],
  providers: [
    UserLoginService,
    DashboardDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
