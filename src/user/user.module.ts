import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy, RtStrategy } from 'src/auth/strategies';

@Module({
  imports: [JwtModule.register({})],
  providers: [UserService, AtStrategy, RtStrategy],
  controllers: [UserController]
})
export class UserModule { }
