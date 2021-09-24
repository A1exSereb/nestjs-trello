import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require('dotenv').config()

export function createTypeOrmProdConfig(): TypeOrmModuleOptions{
    return({
       type: "postgres",
       port: Number(process.env.PORT),
       host: process.env.POSTGRES_HOST,
       username: process.env.POSTGRES_USER,
       password: process.env.POSTGRES_PASSWORD,
       database: process.env.POSTGRES_DATABASE,
       entities: [
        __dirname + '/../**/*.entity.ts',
      ],
      synchronize: true,
   });
   }