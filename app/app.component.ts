import { Component, EventEmitter } from 'angular2/core';
import { ReviewListComponent } from './review-list.component';
import { Review } from './review.model';

@Component({
  selector: 'my-app',
  directives: [ReviewListComponent],
  template: `
    <div class="container">
      <h1>Cameron's *ngEat List!</h1>
        <review-list
          [reviewList]="reviews"
          (onReviewSelect)="reviewWasSelected($event)">
        </review-list>
    </div>
  `
})

export class AppComponent {
  public reviews: Review[];
  constructor(){
    this.reviews = [
      new Review("Cibo", "Italian", "3539 SE Division Street, Portland, OR 97202", "moderate", 0),
      new Review("Mi Mero Mole", "Mexican", "32 NW 5th Avenue, Portland, OR, 97209", "cheap", 1),
      new Review("Nicholas", "Lebanese", "318 SE Grand Avenue, Portland, OR, 97214", "cheap", 2),
      new Review("Farm Spirit", "American", "1414 SE Morrison Street, Portland, OR, 97214", "expensive", 3),
      new Review("Langbaan", "Thai", "6 SE 28th Avenue, Portland, OR, 97214", "expensive", 4)
    ];
  }
  reviewWasSelected(clickedReview: Review): void {
    console.log('parent', clickedReview);
  }
}
