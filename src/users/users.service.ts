import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { CreateUserDto, GetUserDto } from './users.dto';
import { User } from './users.entity';

@Injectable()
export class UserService {
  private lastUserId = 0;
  private users: User[] = [];

  getUserById(id : number) {
    const user = this.users.filter(user => user.id == id ? user : null);
    if (user !== [null]) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  createUser(params: CreateUserDto) {
    const date = new Date();
    const newUser = {...params,id: ++this.lastUserId ,createdAt: String(date)}
    this.users.push(newUser);
    return newUser;
  }

  deleteUser(id:number) {
    this.users = this.users.filter(user => user.id == id ? null : user);
    return this.users;
  }

  getAllUsers() {
    return this.users;
  }
}