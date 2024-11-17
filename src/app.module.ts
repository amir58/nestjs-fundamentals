import {
  ClassSerializerInterceptor,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CommonModule } from './common/common.module';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import ormConfing from './config/orm.confing';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // ignoreEnvFile: true - When set to true, NestJS will ignore .env files and only use environment variables
      // isGlobal: true - Makes the ConfigModule available globally without needing to import it in other modules
      isGlobal: true,
      // When set to true, NestJS will cache environment variables for better performance
      cache: true,
      // Load custom configuration factory functions that return configuration objects
      load: [ormConfing],
      // Expand variables in .env file (e.g. ${API_URL})
      expandVariables: true,
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : process.env.NODE_ENV === 'staging'
            ? '.staging.env'
            : '.development.env'
    }),

    // TypeOrmModule.forRootAsync({
    // useFactory: ormConfing,
    // }),

    UserModule,
    CommonModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
