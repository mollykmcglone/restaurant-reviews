import { Component, EventEmitter } from 'angular2/core';
import { ReviewComponent } from './review.component';
import { Review } from './review.model';
import { EditReviewDetailsComponent } from './edit-review-details.component';

@Component({
  selector: 'review-list',
  inputs: ['reviewList'],
  outputs: ['onReviewSelect'],
  directives: [ReviewComponent, EditReviewDetailsComponent],
  template: `
    <review-display *ngFor="#currentReview of reviewList"
       (click)="reviewClicked(currentReview)" [class.selected]="currentReview === selectedReview"
       [review]="currentReview">
    </review-display>
    <edit-review-details *ngIf="selectedReview" [review]="selectedReview">
    </edit-review-details>
  `
})

export class ReviewListComponent {
  public reviewList: Review[];
  public onReviewSelect: EventEmitter<Review>;
  public selectedReview: Review;
  constructor(){
    this.onReviewSelect = new EventEmitter();
  }
  reviewClicked(clickedReview: Review): void {
    console.log('child', clickedReview);
    this.selectedReview = clickedReview;
    this.onReviewSelect.emit(clickedReview);
  }
}
