import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { EmailService } from 'src/email/email.service';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, EmailService],
})
export class UsersModule {}
