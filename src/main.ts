import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './common/filters/custom-exception/custom-exception.filter';
import { TimeoutIntercepetor } from './common/intercepetors/timeout.intercepetor';
import { WrapDataInterceptor } from './common/intercepetors/wrap-data.intercepetor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalInterceptors(new WrapDataInterceptor());
  app.useGlobalInterceptors(new TimeoutIntercepetor());
  app.useGlobalFilters(new CustomExceptionFilter());
  // app.useGlobalGuards(new AuthGuard());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
