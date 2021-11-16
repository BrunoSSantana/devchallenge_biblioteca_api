import { getCustomRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";
import { BooksRepository } from "../repositories/BooksRepository";

class AddBookService {
  constructor(private repository: Repository<Book>) { }
  async execute(autores: string[], editora: string, foto: string, titulo: string) {
    const book = this.repository.create({ autores, editora, foto, titulo })
    await this.repository.save(book)

    return book
  }
}

export { AddBookService }