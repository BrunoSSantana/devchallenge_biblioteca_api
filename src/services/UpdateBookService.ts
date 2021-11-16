import { getCustomRepository } from "typeorm"
import { BooksRepository } from "../repositories/BooksRepository"

class UpdateBookService {
  async execute(id: string, autores: string[], editora: string, foto: string) {
    const booksRepository = getCustomRepository(BooksRepository)

    const query = booksRepository.createQueryBuilder()
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

    // await query.execute()

    const book = await booksRepository.findOne(id)
    return book
  }
}

export { UpdateBookService }