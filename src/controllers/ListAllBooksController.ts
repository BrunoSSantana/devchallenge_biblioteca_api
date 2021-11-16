import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { BooksRepository } from "../repositories/BooksRepository";
import { ListAllBooksService } from "../services/ListAllBooksService";

class ListAllBooksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const booksRepository = getCustomRepository(BooksRepository)
    const listAllBooksService = new ListAllBooksService(booksRepository)

    const allBooks = await listAllBooksService.execute()

    return response.json(allBooks)
  }
}

export { ListAllBooksController }