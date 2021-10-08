import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto, GetUserDto } from './users.dto';
import { User } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private users: Repository<User>
  ) {}

  async getUserById(id : number): Promise<User> {
    const user = await this.users.findOne(id);
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async createUser(params: CreateUserDto): Promise<User> {
    const newUser = await this.users.create(params);
      await this.users.save(newUser);
    return newUser;
  }

  async deleteUser(id:number): Promise<DeleteResult> {
    const newRepo = await this.users.delete(id);
    return newRepo;
  }

  getAllUsers(): Promise<User[]> {
    return this.users.find();
  }
}