import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
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