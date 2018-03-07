import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { RutineService } from '../../services/rutine.service';



@Component({
  selector: 'app-rutine',
  templateUrl: './rutine.component.html',
  styleUrls: ['./rutine.component.css']
})
export class RutineComponent implements OnInit {

  name: String;
  training: Array<Object>;


  constructor(public rutineService: RutineService, public session: SessionService, private router: Router) { }

  ngOnInit() {

  }
}
