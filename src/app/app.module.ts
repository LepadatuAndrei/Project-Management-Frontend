import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/backend-services/login.service';
import { ProjectsService } from './services/backend-services/projects.service';
import { UserService } from './services/user.service';
import { ProjectCreationComponent } from './components/projects/project-creation/project-creation.component';
import { ProjectCreationFormComponent } from './components/projects/project-creation/project-creation-form/project-creation-form.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { DetailsOverviewComponent } from './components/projects/project-details/details-overview/details-overview.component';
import { DetailsStagesComponent } from './components/projects/project-details/details-stages/details-stages.component';
import { StagesService } from './services/backend-services/stages.service';
import { StageListComponent } from './components/projects/project-details/details-stages/stage-list/stage-list.component';
import { StageInfoComponent } from './components/projects/project-details/details-stages/stage-info/stage-info.component';
import { StageCreationFormComponent } from './components/projects/project-details/details-stages/stage-creation-form/stage-creation-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsSettingsComponent } from './components/projects/project-details/details-settings/details-settings.component';

export function getToken(){
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectListComponent,
    WelcomePageComponent,
    LoginPageComponent,
    LoginFormComponent,
    ProjectCreationComponent,
    ProjectCreationFormComponent,
    ProjectDetailsComponent,
    DetailsOverviewComponent,
    DetailsStagesComponent,
    StageListComponent,
    StageInfoComponent,
    StageCreationFormComponent,
    DetailsSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: getToken,
        allowedDomains: ["localhost:4200"],
        disallowedRoutes: []
      }
    }),
    FontAwesomeModule
  ],
  providers: [AuthGuardService, LoginService, ProjectsService, UserService, StagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
