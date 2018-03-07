import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";
import { ExerciseService } from "../../services/exercise.service";

@Component({
  selector: "app-exercise",
  templateUrl: "./exercise.component.html",
  styleUrls: ["./exercise.component.css"]
})
export class ExerciseComponent implements OnInit {
  id: String;
  exercise: Array<Object>;
  name: String;
  description: String;
  muscle: String;
  image: String;
  material: {
    enum: [
      "Cuerda",
      "Mancuernas",
      "Goma",
      "Esterilla",
      "Balón",
      "Medicinal",
      "Fitball"
    ];
  };

  constructor(
    public exerciseService: ExerciseService,
    public session: SessionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.exerciseService.add(this.exercise).subscribe(exercise => {
      this.exercise = exercise;
    });
    this.exerciseService.edit(this.id, this.exercise).subscribe(exercise => {
      this.exercise = exercise;
    });
    this.exerciseService.get(this.id).subscribe(exercise => {
      this.exercise = exercise;
    });
    this.exerciseService.remove(this.id).subscribe(exercise => {
      this.exercise = exercise;
    });
    this.exerciseService.getList().subscribe(exercise => {
      this.exercise = exercise;
    });
  }
}
