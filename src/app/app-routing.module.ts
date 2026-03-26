import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProjectCreationComponent } from './components/projects/project-creation/project-creation.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: "", component: WelcomePageComponent},
  {path: "Login", component: LoginPageComponent},
  {path: "ResearchProjects", component: ProjectListComponent, canActivate: [AuthGuardService]},
  {path: "CreateProject", component: ProjectCreationComponent, canActivate: [AuthGuardService]},
  {path: "ResearchProjects/Details", component: ProjectDetailsComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
