"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotIn = NotIn;
const class_validator_1 = require("class-validator");
function NotIn(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'NotIn',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: {
                validate(value, args) {
                    const [relatedPropetyName] = args.constraints;
                    const relatedValue = args.object[relatedPropetyName];
                    return (typeof value === 'string' &&
                        typeof relatedValue === 'string' &&
                        !relatedValue.includes(value));
                },
            },
        });
    };
}
//# sourceMappingURL=not-in.js.map