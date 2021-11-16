import { getCustomRepository } from "typeorm";
import { BooksRepository } from "../repositories/BooksRepository";

class DeleteBookService {
  async execute(id: string) {
    const booksRepository = getCustomRepository(BooksRepository)
    const book = await booksRepository.delete(id)
    return book
  }
}

export { DeleteBookService }