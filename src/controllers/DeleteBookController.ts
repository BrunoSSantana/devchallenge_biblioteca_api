import { Request, Response } from "express";
import { DeleteBookService } from "../services/DeleteBookService";

class DeleteBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteBookService = new DeleteBookService()
    const { id } = request.params
    const book = await deleteBookService.execute(id)

    return response.json(book)
  }
}

export { DeleteBookController }