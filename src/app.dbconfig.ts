import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export function createTypeOrmProdConfig(): TypeOrmModuleOptions{
    return({
       type: "postgres",
       port: Number(process.env.PORT),
       host: process.env.POSTGRES_HOST,
       username: process.env.POSTGRES_USER,
       password: process.env.POSTGRES_PASSWORD,
       database: process.env.POSTGRES_DATABASE,
   });
   }