import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.table([
      {
        url: req.originalUrl.split('?')[0],
        method: req.method,
        body: req.body,
        query: req.query,
        headers: req.headers,
      },
    ]);
    next();
  }
}

// export const loggerMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   console.table([{ url: req.url, method: req.method }]);
//   next();
// };
