import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { CreateUserDto } from './users.dto';
import { User } from './users.entity';

@Injectable()
export class UserService {
  private lastUserId = 0;
  private readonly user: User[] = [];

  getUserById(id:number) {
    const user = this.user.find(user => user.id === id);
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  createUser(params: CreateUserDto) {
    const date = Date.now();
    const newUser = {...params,id: ++this.lastUserId ,createdAt: String(date)}
    this.user.push(newUser);
    return newUser;
  }

  deleteUser(id:number) {
    const users = this.user.filter(user => user.id === id? null : user);
    return users;
  }
}