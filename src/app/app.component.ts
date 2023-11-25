import {Component, OnInit} from '@angular/core';
import {AuthService} from "./authentication/service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'tutorme-teacher-front';

  constructor(private loginProv: AuthService) {
  }

  public visualizarMenu():boolean{
    return this.loginProv.isAuthenticatedUser();
  }

}
