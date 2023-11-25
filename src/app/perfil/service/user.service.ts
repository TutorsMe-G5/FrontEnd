import { Injectable } from '@angular/core';
import {UserTeacher} from "../model/user-teacher.entity";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: UserTeacher | null = null;

  getCurrentUser(): UserTeacher | null {
    return this.currentUser;
  }

  setCurrentUser(user: UserTeacher): void {
    this.currentUser = user;
  }
}
