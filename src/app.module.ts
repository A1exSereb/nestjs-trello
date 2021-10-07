import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UserService } from './users/users.service';

require('dotenv').config()

@Module({
  imports: [UsersModule, DatabaseModule
  ],
  controllers:[UsersController],
  providers:[UserService]
})
export class AppModule {}