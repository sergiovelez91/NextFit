import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { RutineService } from '../../services/rutine.service';
import { ExerciseService } from '../../services/exercise.service';
@Component({
  selector: 'app-new-rutine',
  templateUrl: './new-rutine.component.html',
  styleUrls: ['./new-rutine.component.css']
})
export class NewRutineComponent implements OnInit {
name: String;
repetition: Number;
weight: Number;
series: Array<Number>;
rutinas: Array<Object>;
exercise: Array<Object>;



constructor(
  public rutinasService: RutineService,
  public session: SessionService,
  private router: Router,
  public exercicioServcio: ExerciseService) { }

  ngOnInit() {
    this.rutinasService.add(this.rutinas).subscribe(rutinas => {
      this.rutinas = rutinas;
    });
    this.exercicioServcio.add(this.rutinas).subscribe(rutinas => {
      this.rutinas = rutinas;
    });
  }
}


// add(rutine) {
//   return this.http.post(`${this.BASE_URL}/new`, rutine)
//     .map((res) => res.json());
// }
