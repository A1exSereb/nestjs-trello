import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'src/cards/cards.entity';
import { Columns } from 'src/columns/columns.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/users/users.entity';
require('dotenv').config()
console.log('DB POST USERNAME', process.env.PORTGRES_USERNAME)
console.log('DB POST PASS', process.env.PORTGRES_PASS)
@Module({
    imports:[TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [User, Card, Columns, Comment],
      synchronize: true,
    })]
})
export class DatabaseModule {}
