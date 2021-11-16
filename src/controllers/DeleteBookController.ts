import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { BooksRepository } from "../repositories/BooksRepository";
import { DeleteBookService } from "../services/DeleteBookService";

class DeleteBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const booksRepository = getCustomRepository(BooksRepository)
    const deleteBookService = new DeleteBookService(booksRepository)
    const { id } = request.params
    const book = await deleteBookService.execute(id)

    return response.json(book)
  }
}

export { DeleteBookController }