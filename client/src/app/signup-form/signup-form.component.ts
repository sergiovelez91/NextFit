import { Component, OnInit } from '@angular/core';
import {SessionService } from '../../services/session.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  username: string;
  password: string;
  error: string;

  constructor(public session: SessionService) { }

  ngOnInit() {
  }

  signup() {
    this.session.signup(this.username, this.password)
    .catch(e => this.error = e)
    .subscribe();
}
}
