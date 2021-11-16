import { getCustomRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";
import { BooksRepository } from "../repositories/BooksRepository";

class DeleteBookService {
  constructor(private repository: Repository<Book>) {}
  async execute(id: string) {
    const book = await this.repository.delete(id)
    return book
  }
}

export { DeleteBookService }