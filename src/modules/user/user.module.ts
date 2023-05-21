import { Module } from '@nestjs/common';
import { TempUserRepository } from './temp-user.repository';
import { TempUserService } from './temp-user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserRepository, UserService, TempUserRepository, TempUserService],
  exports: [UserService, TempUserService],
})
export class UserModule {}
