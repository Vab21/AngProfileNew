import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../userLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginSuccess: boolean;
  title = 'Profile Login';
  constructor(private router: Router, private userLogin: UserLoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log('submitted');
    console.log(this.loginForm);
    console.log(this.loginForm.value.username);
    this.userLogin.getUserAuthenticate(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe((bool) => {
      this.loginSuccess = bool;
      if (this.loginSuccess === true) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('username or password is wrong.');
      }
    });
  }

  onReset() {
    console.log('reset');
    this.loginForm.setValue({
      username: '',
      password: ''
    });
  }

}
