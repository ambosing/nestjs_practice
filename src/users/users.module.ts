import { Logger, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { EmailService } from 'src/email/email.service';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule],
  controllers: [UsersController],
  providers: [UsersService, EmailService, Logger],
})
export class UsersModule {}
