import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { TrainingService } from '../../services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  repetition: Number;
  weight: Number;
  series: Number;
  exercise: Array<Object>;

  constructor(public trainingService: TrainingService, public session: SessionService, private router: Router) { }

  ngOnInit() {
  }

}
