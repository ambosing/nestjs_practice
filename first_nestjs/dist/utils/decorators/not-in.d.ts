import { ValidationOptions } from 'class-validator';
export declare function NotIn(property: string, validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
