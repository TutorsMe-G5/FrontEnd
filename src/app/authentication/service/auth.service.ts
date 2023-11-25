import {Injectable, OnInit} from '@angular/core';
import {UserTeacher} from "../../perfil/model/user-teacher.entity";
import {TeacherService} from "../../perfil/service/teacher.service";
import {UserService} from "../../perfil/service/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  private isAuthenticated: boolean = false;
  public teachers: UserTeacher[];
  constructor(public teacherService: TeacherService, private userService: UserService) {
    this.teachers = [];
  }

  public logIn(obj:any): boolean {
    for (let i = 0; i < this.teachers.length; i++) {
      if (obj.email === this.teachers[i].mail && obj.password === this.teachers[i].password) {
        this.isAuthenticated = true;
        this.userService.setCurrentUser(this.teachers[i]);
        return true;
      }
    }
    return false;
  }

  logOut(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  private getAllTeachers(){
    this.teacherService.getAll().subscribe((response: any)=>{
        this.teachers = response;
        console.log(this.teachers);
      },
      (error) => {
        console.error('Error fetching teachers:', error);
      }
    )
  }

  ngOnInit(): void {
    this.getAllTeachers();
  }
}
