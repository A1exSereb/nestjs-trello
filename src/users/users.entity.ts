import { ApiExtraModels } from "@nestjs/swagger";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as dayjs from 'dayjs';

@ApiExtraModels()
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    email: string;

    @Column('varchar')
    password: string;

    @Column('varchar')
    full_name: string;

    @Column('timestamptz', {default: () => 'CURRENT_TIMESTAMP'} )
    createdAt: string;

    @BeforeInsert()
    updateCreatedAt() {
    const date = dayjs()
    this.createdAt = String(date);
    }
    
}