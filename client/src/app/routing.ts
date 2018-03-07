import { RouterModule } from "@angular/router";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { Routes } from "@angular/router";
import { RutineComponent } from "./rutine/rutine.component";
import { TrainingComponent } from "./training/training.component";
import { ExerciseComponent } from "./exercise/exercise.component";
import { NewRutineComponent } from "./new-rutine/new-rutine.component";

export const routing: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginFormComponent },
  { path: "signup", component: SignupFormComponent },
  { path: "profile", component: ProfileComponent },
  { path: "rutine", component: RutineComponent },
  { path: "training", component: TrainingComponent },
  { path: "exercise", component: ExerciseComponent },
  { path: "new-rutine", component: NewRutineComponent },
  { path: "**", redirectTo: "", pathMatch: 'full' }
];
