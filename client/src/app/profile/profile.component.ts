import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { RutineService } from '../../services/rutine.service';
import { ExerciseService } from '../../services/exercise.service';

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
  userPopulate: any;
  rut: any;

  constructor(
    private router: Router,
    private session: SessionService,
    public rutinasService: RutineService,
    public exSer: ExerciseService
  ) {}

  ngOnInit() {
    this.session.isLoggedIn().subscribe(user => {
      this.user = user;
      this.session.getPopulate(this.user).subscribe(usr => {
        this.userPopulate = usr;
        console.log(usr);
        // this.userPopulate.rutine.forEach(r => {
        //   this.rut = r;
        //   //console.log(this.rut.training)
        //   this.rut.training.forEach(e => {
        //     console.log(e);
        //     e.exercise.forEach(element => {
        //       console.log(element);
        //       this.exSer.get(element).subscribe(x => {
        //         console.log(x);
        //       });
        //     });
        //   });
        // });
      });
    });

    this.rutinasService.getList().subscribe(rutinas => {
      this.rutinas = rutinas;
      console.log(this.rutinas);
    });
  }
}
