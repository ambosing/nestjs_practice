import { ConfigType } from '@nestjs/config';
import emailConfig from 'src/config/emailConfig';
export declare class EmailService {
    private config;
    private transporter;
    constructor(config: ConfigType<typeof emailConfig>);
    sendMemberJoinEmailVerification(emailAddress: string, signupVerifyToken: string): Promise<any>;
}
