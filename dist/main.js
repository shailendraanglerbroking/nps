"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NPS Swagger')
        .setDescription('The NPS API description')
        .setVersion('1.0')
        .addTag('nps')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors({
        origin: [
            'http://172.31.25.78:3000',
            'http://localhost:3000',
        ],
        credentials: true,
        methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
    });
    await app.listen(3000, () => {
        console.log(`server started listening on ${3000}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map