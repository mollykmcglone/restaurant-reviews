import { Component } from 'angular2/core';
import { Review } from './review.model';

@Component({
  selector: 'edit-review-details',
  inputs: ['review'],
  template: `
    <div class="details col-sm-6">
      <h3> {{ review.name }} </h3>
      <p>Specialty: {{review.specialty}}</p>
      <p>Address:  {{review.address}}</p>
      <p>Price: {{review.price}}</p>
    </div>
    <div class="review-form col-sm-6">
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
