import { Request, Response } from "express";
import { UpdateBookService } from "../services/UpdateBookService";

class UpdateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateBookService = new UpdateBookService()
    const { autores, editora, foto, titulo } = request.body

    const { id } = request.params

    const book = await updateBookService.execute(id, autores, editora, foto, titulo)

    return response.json(book)
  }
}

export { UpdateBookController }