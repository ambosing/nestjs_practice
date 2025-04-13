"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const path = require("path");
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
dotenv.config({
    path: path.resolve(process.env.NODE_ENV == 'production'
        ? '.production.env'
        : process.env.NODE_ENV == 'stage'
            ? '.stage.env'
            : '.development.env'),
});
async function bootstrap() {
    const logger = nest_winston_1.WinstonModule.createLogger({
        transports: [
            new winston.transports.Console({
                level: process.env.NODE_ENV === 'production' ? 'info' : 'silly',
                format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike('MyApp', {
                    prettyPrint: true,
                })),
            }),
        ],
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map