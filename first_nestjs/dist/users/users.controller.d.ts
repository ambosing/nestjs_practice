import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserInfo } from './UserInfo';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { Logger as WinstonLogger } from 'winston';
export declare class UsersController {
    private readonly logger;
    private usersService;
    private authService;
    constructor(logger: WinstonLogger, usersService: UsersService, authService: AuthService);
    createUser(dto: CreateUserDto): Promise<void>;
    verifyEmail(dto: VerifyEmailDto): Promise<string>;
    login(dto: UserLoginDto): Promise<string>;
    getUserInfo(headers: any, userId: string): Promise<UserInfo>;
    private printWinstonLog;
}
