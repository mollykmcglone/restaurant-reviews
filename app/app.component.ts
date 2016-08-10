import { Component } from 'angular2/core';
import { ReviewListComponent } from './review-list.component';
import { Review } from './review.model';

@Component({
  selector: 'my-app',
  directives: [ReviewListComponent],
  template: `
    <div class="container">
      <h1>*ngEat!</h1>
      <h3 *ngFor="#review of reviews">{{ review.name}}, Specialty: {{review.specialty}}, {{review.address}}, Price: {{review.price}}.</h3>
    </div>
  `
})

export class AppComponent {
  public reviews: Review[];
  constructor(){
    this.reviews = [
      new Review("Cibo", "Italian", "3539 SE Division Street, Portland, OR 97202", "moderate"),
      new Review("Mi Mero Mole", "Mexican", "32 NW 5th Avenue, Portland, OR, 97209", "cheap"),
      new Review("Nicholas", "Lebanese", "318 SE Grand Avenue, Portland, OR, 97214", "cheap"),
      new Review("Farm Spirit", "American", "1414 SE Morrison Street, Portland, OR, 97214", "expensive")
    ];
  }
}
