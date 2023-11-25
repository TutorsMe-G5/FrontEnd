import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../shared/services/http.service";
import {UserTeacher} from "../model/user-teacher.entity";

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends HttpService<UserTeacher>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/teachers'
  }

}
