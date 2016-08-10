import { Component } from 'angular2/core';
import { Review } from './review.model';

@Component({
  selector: 'review-display',
  inputs: ['review'],
  template: `
      <h3>{{ review.name }} </h3>
  `
})
export class ReviewComponent {
  public review: Review;
}
