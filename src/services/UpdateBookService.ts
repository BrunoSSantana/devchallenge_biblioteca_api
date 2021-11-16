import { Repository } from "typeorm"
import { Book } from "../entities/Book"

class UpdateBookService {
  constructor(private repository: Repository<Book>) {}
  async execute(id: string, autores: string[], editora: string, foto: string, titulo: string) {

    const query = this.repository.createQueryBuilder()
      .where('id = :id')
      .setParameters({ id })
      .update()

    if (autores) {
      await query.set({ autores })
      .execute()
    }
    if (editora) {
      await query.set({ editora })
      .execute()
    }
    if (editora) {
      await query.set({ editora })
      .execute()
    }
    if (titulo) {
      await query.set({ titulo })
      .execute()
    }

    const book = await this.repository.findOne(id)
    
    return book
  }
}

export { UpdateBookService }