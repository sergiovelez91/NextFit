import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { RutineService } from '../../services/rutine.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
title = 'app';
user: object;
users: object;
rutinas: Array<Object>;



  constructor(private router: Router, private session: SessionService, public rutinasService: RutineService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( user => {
      this.user = user;
    });
    this.rutinasService.getList().subscribe(rutinas => {
      this.rutinas = rutinas;
    });

}


}
