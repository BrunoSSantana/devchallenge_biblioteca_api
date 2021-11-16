import { getCustomRepository } from "typeorm";
import { BooksRepository } from "../repositories/BooksRepository";

class AddBookService {

  async execute(autores: string[], editora: string, foto: string, titulo: string) {
    const booksRepository = getCustomRepository(BooksRepository)
    const book = booksRepository.create({ autores, editora, foto, titulo })
    await booksRepository.save(book)

    return book
  }
}

export { AddBookService }