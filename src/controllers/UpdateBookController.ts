import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { BooksRepository } from "../repositories/BooksRepository";
import { UpdateBookService } from "../services/UpdateBookService";

class UpdateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const booksRepository = getCustomRepository(BooksRepository)
    const updateBookService = new UpdateBookService(booksRepository)

    const { autores, editora, foto, titulo } = request.body

    const { id } = request.params

    const book = await updateBookService.execute(id, autores, editora, foto, titulo)

    return response.json(book)
  }
}

export { UpdateBookController }