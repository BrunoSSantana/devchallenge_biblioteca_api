import { getRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";

type ICreateBookDTO = {
  editora: string
  foto: string
  autores: string[]
}

class BooksRepository {
  private repository: Repository<Book>
  constructor() {
    this.repository = getRepository(Book)
  }

  async create({ autores, editora, foto }: ICreateBookDTO): Promise<Book> {
    const book = this.repository.create({ autores, editora, foto })
    this.repository.save(book)
    return book
  }
}

export { BooksRepository }