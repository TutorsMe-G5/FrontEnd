import {Component, OnInit} from '@angular/core';
import {UserTeacher} from "../../model/user-teacher.entity";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit{

  currentUser: UserTeacher | null | undefined;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.setCurrentUser(new UserTeacher(2, 'Rut', 'Jara', '123', 'mail@', 'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', true));
    this.currentUser = this.userService.getCurrentUser();
  }

}
