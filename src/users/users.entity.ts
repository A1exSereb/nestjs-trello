import { ApiExtraModels } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
}