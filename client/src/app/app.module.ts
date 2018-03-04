import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { RutineComponent } from './rutine/rutine.component';
import { TrainingComponent } from './training/training.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { routing } from './routing';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RutineComponent,
    TrainingComponent,
    ExerciseComponent,
    SignupFormComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routing)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
