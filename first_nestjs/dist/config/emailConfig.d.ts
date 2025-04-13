declare const _default: (() => {
    service: string | undefined;
    auth: {
        user: string | undefined;
        pass: string | undefined;
    };
    baseUrl: string | undefined;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    service: string | undefined;
    auth: {
        user: string | undefined;
        pass: string | undefined;
    };
    baseUrl: string | undefined;
}>;
export default _default;
