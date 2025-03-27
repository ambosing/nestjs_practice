import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Headers,
  Inject,
  Logger,
  Param,
  Post,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserInfo } from './UserInfo';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/auth.guard';
import { Logger as WinstonLogger } from 'winston';
import { HttpExceptionFilter } from 'src/exception/exception.filter';

@UseFilters(HttpExceptionFilter)
@Controller('users')
export class UsersController {
  constructor(
    @Inject(Logger) private readonly logger: WinstonLogger,
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @UseFilters(HttpExceptionFilter)
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    this.printWinstonLog(dto);
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;
    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;
    return await this.usersService.login(email, password);
  }

  // @UseGuards(AuthGuard)
  @Get(':id')
  async getUserInfo(
    @Headers() headers: any,
    @Param('id') userId: string,
  ): Promise<UserInfo> {
    this.logger.log('여기까지는 왓따', userId);
    if (+userId < 1) {
      throw new BadRequestException('id는 0보다 큰 정수여야 합니다');
    }

    return await this.usersService.getUserInfo(userId);
  }

  private printWinstonLog(dto) {
    console.log(this.logger.profilers);

    this.logger.error('error: ', dto);
    this.logger.warn('warn: ', dto);
    this.logger.log('info: ', dto);
    // this.logger.http('http: ', dto);
    this.logger.verbose('verbose: ', dto);
    this.logger.debug('debug: ', dto);
    // this.logger.silly('silly: ', dto);
  }
}
