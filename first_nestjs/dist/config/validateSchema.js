"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = require("joi");
exports.validationSchema = Joi.object({
    EMAIL_SERVICE: Joi.string().required(),
    EMAIL_AUTH_USER: Joi.string().required(),
    EMAIL_AUTH_PASSWORD: Joi.string().required(),
    EMAIL_BASE_URL: Joi.string().required().uri(),
    JWT_SECRET: Joi.string().required(),
});
//# sourceMappingURL=validateSchema.js.map