import { Component } from 'angular2/core';
import { Review } from './review.model';

@Component({
  selector: 'feedback-review',
  inputs: ['review'],
  template: `
    <div class="col-sm-4">
      <select>
        <option value="1" selected="selected">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    <button (click)="calculateStars(review, )" class="btn btn-lg">
    </button>
    </div>
  `
})
export class FeedbackReviewComponent {
  public review: Review;
  calculateStars(calculateReview: Review): void {
    var input = calculateReview.stars;
    var total = 0;
    for (var i = 0; i < input.length; i ++) {
      total += input[i];
    }
    var rating = total/input.length;
    calculateReview.rating = rating; 
  }
}
