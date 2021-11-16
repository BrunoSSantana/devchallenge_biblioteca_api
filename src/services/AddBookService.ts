import { getCustomRepository } from "typeorm";
import { BooksRepository } from "../repositories/BooksRepository";

class AddBookService {

  async execute(autores: string[], editora: string, foto: string) {
    const booksRepository = getCustomRepository(BooksRepository)
    const book = booksRepository.create({ autores, editora, foto })
    await booksRepository.save(book)

    return book
  }
}

export { AddBookService }