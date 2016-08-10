import { Component, EventEmitter } from 'angular2/core';
import { Review } from './review.model';

@Component({
  selector: 'new-review',
  outputs: ['onSubmitNewReview'],
  template: `
  <div class="review-form">
    <h3>Add a New Restaurant:</h3>
      <input placeholder="Name" class="col-sm-6 input-lg" #newName>
      <input placeholder="Specialty" class="col-sm-6 input-lg" #newSpecialty>
      <input placeholder="Address" class="col-sm-6 input-lg" #newAddress>
      <input placeholder="Price" class="col-sm-6 input-lg" #newPrice>
      <button (click)="addReview(newName, newSpecialty, newAddress, newPrice)" class="btn btn-success btn-lg">Add</button>
  </div>
  `
})

export class NewReviewComponent {
  public onSubmitNewReview: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewReview = new EventEmitter();
  }
  addReview(userName: HTMLInputElement, userSpecialty: HTMLInputElement, userAddress: HTMLInputElement, userPrice: HTMLInputElement){
    var params: String[] = [userName.value, userSpecialty.value, userAddress.value, userPrice.value];
    this.onSubmitNewReview.emit(params);
    userName.value = "";
    userSpecialty.value = "";
    userAddress.value = "";
    userPrice.value = "";
  }
}
