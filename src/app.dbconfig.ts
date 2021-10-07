import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require('dotenv').config()

export function createTypeOrmProdConfig(): TypeOrmModuleOptions{
    return({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
       entities: [
        __dirname + '/../**/*.entity.ts',
      ],
      synchronize: true,
   });
}