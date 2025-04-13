import { EmailService } from 'src/email/email.service';
import { UserInfo } from './UserInfo';
import { UserEntity } from './user.entity';
import { DataSource, Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
export declare class UsersService {
    private readonly authService;
    private readonly emailService;
    private usersRepository;
    private dataSource;
    constructor(authService: AuthService, emailService: EmailService, usersRepository: Repository<UserEntity>, dataSource: DataSource);
    createUser(name: string, email: string, password: string): Promise<void>;
    verifyEmail(signupVerifyToken: string): Promise<string>;
    login(email: string, password: string): Promise<string>;
    getUserInfo(userId: string): Promise<UserInfo>;
    private checkUserExists;
    private saveUser;
    private sendMemberJoinEmail;
}
