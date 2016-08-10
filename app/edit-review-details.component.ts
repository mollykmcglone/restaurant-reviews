import { Component } from 'angular2/core';
import { Review } from './review.model';

@Component({
  selector: 'edit-review-details',
  inputs: ['review'],
  template: `
    <div class="review-form">
      <h3>Edit {{ review.name}}:</h3>
      <input [(ngModel)]="review.name" class="col-sm-8 input-lg task-form"/>
      <input [(ngModel)]="review.specialty" class="col-sm-8 input-lg task-form"/>
      <input [(ngModel)]="review.address" class="col-sm-8 input-lg task-form"/>
      <input [(ngModel)]="review.price" class="col-sm-8 input-lg task-form"/>

    </div>
  `
})
export class EditReviewDetailsComponent {
  public review: Review;
}
