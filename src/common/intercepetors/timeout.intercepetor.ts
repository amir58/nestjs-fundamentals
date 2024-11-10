import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import { Request } from 'express';
import { catchError, Observable, timeout, TimeoutError } from 'rxjs';

@Injectable()
export class TimeoutIntercepetor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Logic on current request, before method execution
    // console.log('Before, Request intercepting...');

    // const ctx = context.switchToHttp();
    // const request = ctx.getRequest<Request>();

    // request.body = {
    //   ...request.body,
    //   timeout: 30000,
    // };

    return next.handle().pipe(
      timeout(30000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          throw new RequestTimeoutException();
        }
        return err;
      }),
    );
  }
}
