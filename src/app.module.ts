import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

require('dotenv').config()

@Module({
  imports: [UsersModule, ConfigModule.forRoot(),DatabaseModule],
  controllers:[],
  providers:[]
})
export class AppModule {}