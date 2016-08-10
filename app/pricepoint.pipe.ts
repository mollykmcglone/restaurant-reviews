import { Pipe, PipeTransform } from 'angular2/core';
import { Review } from './review.model';

@Pipe({
  name: "pricepoint",
  pure: false
})
export class PricepointPipe implements PipeTransform {
  transform(input: Review[], info) {
    var desiredPricepoint = info[0];
    var output: Review[] = [];
      if (desiredPricepoint === "cheap") {
        for (var i = 0; i < input.length; i ++) {
          if (input[i].price === "cheap") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPricepoint === "moderate") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].price === "moderate") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredPricepoint === "expensive") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].price === "expensive") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input; // "all"
      }
  }
}
