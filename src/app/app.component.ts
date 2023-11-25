import {Component, OnInit} from '@angular/core';
import {UserTeacher} from "./perfil/model/user-teacher.entity";
import {UserService} from "./perfil/service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'tutorme-teacher-front';

}
