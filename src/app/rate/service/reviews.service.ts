import { Injectable } from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {Review} from "../model/review.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService extends HttpService<Review>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/reviews'
  }
}
