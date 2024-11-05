import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any) {
    console.log(value);
    // Write your custom validation logic here
    return value;
  }
}
