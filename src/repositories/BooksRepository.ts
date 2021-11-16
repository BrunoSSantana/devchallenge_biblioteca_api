import { EntityRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";

@EntityRepository(Book)
class BooksRepository extends Repository<Book>{ }

export { BooksRepository }