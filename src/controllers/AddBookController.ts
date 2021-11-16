import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { BooksRepository } from "../repositories/BooksRepository";
import { AddBookService } from "../services/AddBookService";

class AddBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const booksRepository = getCustomRepository(BooksRepository)
    const addBookService = new AddBookService(booksRepository)
    
    const { autores, editora, foto, titulo } = request.body

    const book = await addBookService.execute(autores, editora, foto, titulo)

    return response.json(book)
  }
}

export { AddBookController }