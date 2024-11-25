import 'reflect-metadata'
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    name: string

    @Column("varchar")
    description: string

}