import { Card } from "src/model/cards/cards.entity";
import { User } from "src/model/users/users.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    text: string;

    @ManyToOne(type => Card, card => card.id) cardId: number;

    @ManyToOne(type => User, user => user.id) userId: number;
}