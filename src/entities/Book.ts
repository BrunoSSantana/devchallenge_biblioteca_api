import { v4 as uuid} from 'uuid'
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('books')
export class Book {
  @PrimaryColumn()
  id: string

  @Column()
  titulo: string

  @Column()
  editora: string

  @Column()
  foto: string

  @Column('text', {array: true})
  autores: string[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
