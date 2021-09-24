import { Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { User } from './users.entity';
import { UserService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UserService
  ) {}
  @Get()
  getUserById(@Param('id') id:number): User {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Param() param: CreateUserDto): User {
    return this.userService.createUser(param);
  }

  @Delete()
  deleteUserById(@Param('id') id:number): User[] {
    return this.userService.deleteUser(id);
  }
}