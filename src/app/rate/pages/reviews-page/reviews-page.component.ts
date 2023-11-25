import {Component, OnInit} from '@angular/core';
import {Review} from "../../model/review.entity";
import {ReviewsService} from "../../service/reviews.service";

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent implements OnInit{

  public reviews: Review[];
  currentRating: number = 1;

  constructor(public reviewService: ReviewsService) {
    this.reviews = [];
  }

  private getAllReviews(){
    this.reviewService.getAll().subscribe((response: any)=>{
      this.reviews = response;
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
      )
  }

  ngOnInit(): void {
    this.getAllReviews();
  }

}
