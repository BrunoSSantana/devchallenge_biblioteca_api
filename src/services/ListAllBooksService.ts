import { getCustomRepository, Repository } from "typeorm"
import { Book } from "../entities/Book"
import { BooksRepository } from "../repositories/BooksRepository"

class ListAllBooksService {
  constructor(private repository: Repository<Book>) { }
  async execute() {
    const allBooks = await this.repository.find()
    return allBooks
  }
}

export { ListAllBooksService }