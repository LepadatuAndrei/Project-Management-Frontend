import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faSignOut = faSignOut;

  showLogin: boolean = true;
  userDisplayName: string|undefined = undefined;

  navbarBrandLink: string = "";

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    UserService.userUpdated.subscribe(()=>{
      this.refresh();
    });

    this.refresh();
  }

  refresh(){
    const tokenObj = UserService.tokenObject;
    if(tokenObj == null){
      this.showLogin = true;
    }
    else{
      this.showLogin = false;
      this.userDisplayName = tokenObj["displayName"];
    }
  }

  signOut(){
    this.userService.update(null);
  }

}
