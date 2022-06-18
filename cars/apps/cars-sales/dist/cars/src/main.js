"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cars_module_1 = require("./cars.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(cars_module_1.CarsModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map