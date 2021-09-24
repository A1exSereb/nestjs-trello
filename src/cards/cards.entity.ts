import { Columns } from "src/columns/columns.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar',{nullable: true})
    description: string | null;

    @ManyToOne(type => Columns, column => column.id) columnId: Columns;
}