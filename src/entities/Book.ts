import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('books')
export class Book {
  @PrimaryColumn()
  id: string

  @Column()
  editora: string

  @Column()
  foto: string

  @Column()
  autores: string[]
}
