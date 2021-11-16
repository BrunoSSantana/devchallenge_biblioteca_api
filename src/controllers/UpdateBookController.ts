import { Request, Response } from "express";
import { UpdateBookService } from "../services/UpdateBookService";

class UpdateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateBookService = new UpdateBookService()
    const { autores, editora, foto } = request.body

    const { id } = request.params

    const book = updateBookService.execute(id, autores, editora, foto)

    return response.json(book)
  }
}

export { UpdateBookController }