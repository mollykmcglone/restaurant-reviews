import { Pipe, PipeTransform } from 'angular2/core';
import { Review } from './review.model';

@Pipe({

})
export class SpecialtyPipe implements PipeTransform {
  transform(input: Review[], args) {
    return input;
  }
}
