import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { CreateUserDto, DeleteUserDto, GetUserDto } from './users.dto';
import { User } from './users.entity';
import { UserService } from './users.service';

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UserService
  ) {}
  @Get(':id')
  getUserById(@Param('id') id : number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  createUser(@Body() param: CreateUserDto): Promise<User> {
    return this.userService.createUser(param);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id : number): Promise<DeleteResult> {
    return this.userService.deleteUser(id);
  }

  @Get()
  getAllUsers(): Promise<User[]>{
    return this.userService.getAllUsers();
  }
}