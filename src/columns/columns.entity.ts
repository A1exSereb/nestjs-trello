import { User } from "src/users/users.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Columns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @ManyToOne(type => User, user => user.id) userId: number;
}