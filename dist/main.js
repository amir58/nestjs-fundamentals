"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const timeout_intercepetor_1 = require("./common/intercepetors/timeout.intercepetor");
const wrap_data_intercepetor_1 = require("./common/intercepetors/wrap-data.intercepetor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.useGlobalInterceptors(new wrap_data_intercepetor_1.WrapDataInterceptor());
    app.useGlobalInterceptors(new timeout_intercepetor_1.TimeoutIntercepetor());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map