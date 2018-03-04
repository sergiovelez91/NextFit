import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const routing: Routes = [
  { path: '',  component: HomeComponent  },
  { path: 'login',  component: LoginFormComponent  },
  { path: 'signup', component: SignupFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];


