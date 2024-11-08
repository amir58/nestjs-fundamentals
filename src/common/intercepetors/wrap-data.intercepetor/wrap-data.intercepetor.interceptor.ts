import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WrapDataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before, Request intercepting...');

    return next.handle().pipe(
      map((data) => {
        console.log('After, Response intercepting...');
        return {
          message: 'Request successful',
          status: 'success',
          data,
        };
      }),
    );
  }
}
