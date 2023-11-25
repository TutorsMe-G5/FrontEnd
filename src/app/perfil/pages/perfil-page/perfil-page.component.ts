import {Component, OnInit} from '@angular/core';
import {UserTeacher} from "../../model/user-teacher.entity";
import {UserService} from "../../service/user.service";
import {TeacherService} from "../../service/teacher.service";

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit{

  currentUser: UserTeacher | null | undefined;


  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  }

}
