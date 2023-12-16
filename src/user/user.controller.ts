import { Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { UseRoles } from 'nest-access-control';
import { UserService } from './user.service';
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators';
import { AtGuard } from 'src/common/guards';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('all')
    @UseGuards(AtGuard)
    @HttpCode(HttpStatus.OK)
    getAllUsers(
        @GetCurrentUserId() userId: string,
    ) {
        return this.userService.getAllUsers(userId);
    }
}
