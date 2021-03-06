import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: any;
  constructor(public router: Router, public session: SessionService) { }

  logout() {
    this.session.logout().subscribe();
    this.router.navigate(['/']);
}
}

