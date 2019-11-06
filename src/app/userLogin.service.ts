import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }
  loginUrl = '../../assets/loginUserData.json';
  bool = false;
  getUserAuthenticate(userName, password): Observable<boolean> {
    return this.http.get(this.loginUrl).pipe(map(
      (response: any) => {
        const users = response;
        // tslint:disable-next-line:prefer-const
        for (let user of users) {
          if (user.username === userName && user.password === password) {
            this.bool = true;
            sessionStorage.setItem('username', userName);
            break;
          }
        }
        return this.bool;
      })
    );
  }
}


// .subscribe((res: Response)=> {
//   const users = res.json();
//   users.filter((user) => {
//     if(user["userName"] == userName && user["password"] == password){
//       this.manualAuth.setUserAuthenticate(true);
//     } else {
//       this.manualAuth.setUserAuthenticate(false);
//     }
//   })
// });
