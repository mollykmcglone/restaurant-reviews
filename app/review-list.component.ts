import { Component, EventEmitter } from 'angular2/core';
import { ReviewComponent } from './review.component';
import { Review } from './review.model';
import { EditReviewDetailsComponent } from './edit-review-details.component';
import { NewReviewComponent } from './new-review.component';
import { PricepointPipe } from './pricepoint.pipe';

@Component({
  selector: 'review-list',
  inputs: ['reviewList'],
  outputs: ['onReviewSelect'],
  pipes: [PricepointPipe],
  directives: [ReviewComponent, EditReviewDetailsComponent, NewReviewComponent],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="cheap">Cheap</option>
      <option value="moderate">Moderate</option>
      <option value="expensive">Expensive</option>
    </select>
    <review-display *ngFor="#currentReview of reviewList | pricepoint:selectedPricepoint"
       (click)="reviewClicked(currentReview)" [class.selected]="currentReview === selectedReview"
       [review]="currentReview">
    </review-display>
    <edit-review-details *ngIf="selectedReview" [review]="selectedReview">
    </edit-review-details>
    <new-review (onSubmitNewReview)="createReview($event)"></new-review>
  `
})

export class ReviewListComponent {
  public reviewList: Review[];
  public onReviewSelect: EventEmitter<Review>;
  public selectedReview: Review;
  public selectedPricepoint: string = "all";
  constructor(){
    this.onReviewSelect = new EventEmitter();
  }
  reviewClicked(clickedReview: Review): void {
    console.log('child', clickedReview);
    this.selectedReview = clickedReview;
    this.onReviewSelect.emit(clickedReview);
  }
  createReview(params: string[]): void {
    this.reviewList.push(
      new Review(params[0], params[1], params[2], params[3], this.reviewList.length)
    );
  }
  onChange(optionFromMenu) {
    this.selectedPricepoint = optionFromMenu;
    console.log(this.selectedPricepoint);
  }
}
