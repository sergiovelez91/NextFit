import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";
import { RutineService } from "../../services/rutine.service";
import { ExerciseService } from "../../services/exercise.service";
import { TrainingComponent } from "../training/training.component";
import { TrainingService } from "../../services/training.service";

@Component({
  selector: "app-rutine",
  templateUrl: "./rutine.component.html",
  styleUrls: ["./rutine.component.css"]
})
export class RutineComponent implements OnInit {
  name: String;
  training: Array<Object> = [];
  weight: Number;
  repetition: Number;
  series: Number;
  newTraining: Object = {};
  exercises: Array<Object> = [];
  exid: any;
  traintoPush:any;
  i:any=0;
  trainingID: Array<any> = [];
  flama:any;

  constructor(
    public rutineService: RutineService,
    public session: SessionService,
    public exerciseService: ExerciseService,
    private router: Router,
    public trainingService: TrainingService
  ) {}

  ngOnInit() {
    this.exerciseService.getList().subscribe(ex => {
      this.exercises = ex;
    });
  }

  addTraining(ej) {
    this.traintoPush = {
      weight: this.weight,
      series: this.series,
      repetition: this.repetition,
      exercise: ej
    };
console.log(this.traintoPush)
    this.training.push(this.traintoPush);
    console.log(this.training)
    // CLEAN INPUTS
    this.weight=0;
    this.series=0;
    this.repetition=0;

    this.trainingService.add(this.training[this.i]).subscribe(training => {
      this.trainingID.push(training._id)
      this.i++;
    });
  }

  saveRutine() {
    this.flama = {name: this.name, training: this.trainingID}
    this.rutineService.add(this.flama).subscribe(training => {
      console.log(training);
    });
  }
}
