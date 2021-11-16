import { getCustomRepository } from "typeorm"
import { BooksRepository } from "../repositories/BooksRepository"

class ListAllBooksService {
  async execute() {
    const booksRepository = getCustomRepository(BooksRepository)

    const allBooks = await booksRepository.find()

    return allBooks
  }
}

export { ListAllBooksService }