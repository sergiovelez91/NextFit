import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// COMPONENTES
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { RutineComponent } from './rutine/rutine.component';
import { TrainingComponent } from './training/training.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppComponent } from './app.component';
import { NewRutineComponent } from './new-rutine/new-rutine.component';

// SERVICIOS
import { ExerciseService } from '../services/exercise.service';
import { SessionService } from '../services/session.service';
import { RutineService } from '../services/rutine.service';
import { TrainingService } from '../services/training.service';

// RUTAS
import { RouterModule } from '@angular/router';
import { routing } from './routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RutineComponent,
    TrainingComponent,
    ExerciseComponent,
    SignupFormComponent,
    HomeComponent,
    ProfileComponent,
    NewRutineComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routing)
  ],
  providers: [SessionService, RutineService, ExerciseService, TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
