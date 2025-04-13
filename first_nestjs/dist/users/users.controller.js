"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_login_dto_1 = require("./dto/user-login.dto");
const verify_email_dto_1 = require("./dto/verify-email.dto");
const users_service_1 = require("./users.service");
const auth_service_1 = require("../auth/auth.service");
const winston_1 = require("winston");
const exception_filter_1 = require("../exception/exception.filter");
let UsersController = class UsersController {
    constructor(logger, usersService, authService) {
        this.logger = logger;
        this.usersService = usersService;
        this.authService = authService;
    }
    async createUser(dto) {
        this.printWinstonLog(dto);
        const { name, email, password } = dto;
        await this.usersService.createUser(name, email, password);
    }
    async verifyEmail(dto) {
        const { signupVerifyToken } = dto;
        return await this.usersService.verifyEmail(signupVerifyToken);
    }
    async login(dto) {
        const { email, password } = dto;
        return await this.usersService.login(email, password);
    }
    async getUserInfo(headers, userId) {
        this.logger.log('여기까지는 왓따', userId);
        if (+userId < 1) {
            throw new common_1.BadRequestException('id는 0보다 큰 정수여야 합니다');
        }
        return await this.usersService.getUserInfo(userId);
    }
    printWinstonLog(dto) {
        console.log(this.logger.profilers);
        this.logger.error('error: ', dto);
        this.logger.warn('warn: ', dto);
        this.logger.log('info: ', dto);
        this.logger.verbose('verbose: ', dto);
        this.logger.debug('debug: ', dto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.UseFilters)(exception_filter_1.HttpExceptionFilter),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/email-verify'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_email_dto_1.VerifyEmailDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserInfo", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.UseFilters)(exception_filter_1.HttpExceptionFilter),
    (0, common_1.Controller)('users'),
    __param(0, (0, common_1.Inject)(common_1.Logger)),
    __metadata("design:paramtypes", [winston_1.Logger,
        users_service_1.UsersService,
        auth_service_1.AuthService])
], UsersController);
//# sourceMappingURL=users.controller.js.map