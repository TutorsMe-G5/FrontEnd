import {Component, OnInit} from '@angular/core';
import {UserTeacher} from "./perfil/model/user-teacher.entity";
import {UserService} from "./perfil/service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tutorme-teacher-front';
  currentUser: UserTeacher | null | undefined;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.setCurrentUser(new UserTeacher(1, 'Rut', 'Jara', '123', 'rut@mail.com', 'no hay pipipi', true));
    this.currentUser = this.userService.getCurrentUser();
  }
}
