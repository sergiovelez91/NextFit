import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  error: string;
  constructor(public session: SessionService,private router:Router,public route:ActivatedRoute) { }

  ngOnInit() {
  }

  login(){
    this.session.login(this.username,this.password)
    .catch(e => this.error = e)
    .subscribe(user => {
      console.log(`Welcome ${user.username}`);
      this.router.navigate(['/profile']);
    }, err => (this.error = err));
  }
  errorCb(err) {
    this.error = err;
    this.username = null;
  }

  successCb(user) {
    this.username = user;
    this.error = null;
  }
  

  logout() {
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}
