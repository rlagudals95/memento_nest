import { LoginedUser } from '@modules/auth/auth.interface';
import { Public } from '@modules/auth/jwt-auth.guard';
import { GetLoginedUser } from '@modules/auth/jwt.strategy';
import { TEMP_TOKEN_NAME } from '@modules/user/temp-user.constant';
import { TempUserDto, UpdateTempUser } from '@modules/user/temp-user.model';
import { TempUserService } from '@modules/user/temp-user.service';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { UpdateUser, UserDto } from './user.model';
import { UserService } from './user.service';

@ApiTags('users')
@Controller({
  path: 'users',
  version: '1',
})
export class UserController {
  constructor(
    private userService: UserService,
    private tempUserService: TempUserService,
  ) {}

  @ApiOperation({ summary: '유저 정보 조회' })
  @Get('me')
  async getMe(@GetLoginedUser() loginedUser: LoginedUser): Promise<UserDto> {
    return this.userService.getUser(loginedUser.id);
  }

  @ApiOperation({ summary: '유저 정보 업데이트' })
  @Post('me')
  async postMe(
    @GetLoginedUser() loginedUser: LoginedUser,
    @Body() updateUser: UpdateUser,
  ): Promise<UserDto> {
    return this.userService.updateUser(loginedUser.id, updateUser);
  }

  @Public()
  @ApiOperation({ summary: '임시 유저 정보 조회' })
  @Get('temp')
  async getTemp(@Req() request: Request): Promise<TempUserDto> {
    const token = request?.cookies[TEMP_TOKEN_NAME];
    if (!token) {
      throw new BadRequestException('empty tempToken');
    }
    const tempUser = await this.tempUserService.getUser(token);
    if (!tempUser) {
      throw new NotFoundException('User Not Found');
    }
    return tempUser;
  }

  @Public()
  @ApiOperation({ summary: '임시 유저 정보 업데이트' })
  @Post('temp')
  async postTemp(
    @Req() request: Request,
    @Body() updateUser: UpdateTempUser,
  ): Promise<any> {
    const token = request?.cookies[TEMP_TOKEN_NAME];
    if (!token) {
      throw new BadRequestException('empty tempToken');
    }
    this.tempUserService.updateUser(token, updateUser);
  }
}
