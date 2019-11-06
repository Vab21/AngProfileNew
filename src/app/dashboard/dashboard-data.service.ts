import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  constructor(private http: HttpClient) { }
  achievementsUrl = '../../assets/achievements.json';
  contactUrl = '../../assets/contact.json';
  educationUrl = '../../assets/education.json';
  skillsUrl = '../../assets/skills.json';
  languagesUrl = '../../assets/languages.json';
  hobbiesUrl = '../../assets/hobbies.json';
  workExpUrl = '../../assets/workExp.json';
  workExp: any;
  hobbies: any;
  contact: any;
  achievements: any;
  education: any;
  skills: any;
  languages: any;
  getWorkExp() {
    return this.workExp;
  }
  setWorkExp(workExp) {
    this.workExp = workExp;
  }
  getHobbies() {
    return this.hobbies;
  }
  setHobbies(hobbies) {
    this.hobbies = hobbies;
  }
  getLanguages() {
    return this.languages;
  }
  setLanguages(languages) {
    this.languages = languages;
  }
  getSkills() {
    return this.skills;
  }
  setSkills(skills) {
    this.skills = skills;
  }
  getEducation() {
    return this.education;
  }
  setEducation(education: any) {
    this.education = education;
  }
  getAchievements() {
    return this.achievements;
  }
  setAchievements(achievements: any) {
    this.achievements = achievements;
  }
  getContact() {
    return this.contact;
  }
  setContact(contact: any) {
    this.contact = contact;
  }
  getAchievementsFromUrl(): Observable<any> {
    if (this.getAchievements() != null) {
      return of(this.getAchievements());
    } else {
      return this.http.get<any>(this.achievementsUrl)
    .pipe(map(
        (response: any) => {
        this.setAchievements(response);
        return this.getAchievements();
      })
    );
    }
  }
  getSkillsFromUrl(username: string): Observable<any> {
    if (this.getSkills() != null) {
      return of(this.getSkills());
    } else {
      return this.http.get<any>(this.skillsUrl)
    .pipe(map(
        (response: any) => {
        const skills = response;
        // tslint:disable-next-line:prefer-const
        for (let skill of skills) {
          if (skill.username === username) {
            this.skills = skill;
            break;
          }
        }
        return this.skills;
      })
    );
    }
  }
  getContactFromUrl(username: string): Observable<any> {
    if (this.getContact() != null) {
      return of(this.getContact());
    }
    return this.http.get<any>(this.contactUrl)
    .pipe(map(
      (response: any) => {
        const contacts = response;
        // tslint:disable-next-line:prefer-const
        for (let contact of contacts) {
          if (contact.username === username) {
            this.contact = contact;
            break;
          }
        }
        return this.contact;
      })
    );
  }

  getEducationFromUrl(username: string): Observable<any> {
    if (this.getEducation() != null) {
      return of(this.getEducation());
    } else {
      return this.http.get<any>(this.educationUrl)
      .pipe(map(
        (response: any) => {
          const educations = response;
          // tslint:disable-next-line:prefer-const
          for (let education of educations) {
            if (education.username === username) {
              this.education = education;
              break;
            }
          }
          return this.education;
        })
      );
    }
  }
  getLanguagesFromUrl(username: string): Observable<any> {
    if (this.getLanguages() != null) {
      return of(this.getLanguages());
    } else {
      return this.http.get<any>(this.languagesUrl)
      .pipe(map(
        (response: any) => {
          const languages = response;
          // tslint:disable-next-line:prefer-const
          for (let language of languages) {
            if (language.username === username) {
              this.languages = language;
              break;
            }
          }
          return this.languages;
        })
      );
    }
  }
  getHobbiesFromUrl(username: string): Observable<any> {
    if (this.getHobbies() != null) {
      return of(this.getHobbies());
    } else {
      return this.http.get<any>(this.hobbiesUrl)
      .pipe(map(
        (response: any) => {
          const hobbies = response;
          // tslint:disable-next-line:prefer-const
          for (let hobby of hobbies) {
            if (hobby.username === username) {
              this.hobbies = hobby;
              break;
            }
          }
          return this.hobbies;
        })
      );
    }
  }
  getWorkExpFromUrl(username: string): Observable<any> {
    if (this.getWorkExp() != null) {
      return of(this.getWorkExp());
    } else {
      return this.http.get<any>(this.workExpUrl)
      .pipe(map(
        (response: any) => {
          const workExps = response;
          // tslint:disable-next-line:prefer-const
          for (let workExp of workExps) {
            if (workExp.username === username) {
              this.workExp = workExp;
              break;
            }
          }
          return this.workExp;
        })
      );
    }
  }
}
