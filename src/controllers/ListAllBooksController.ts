import { Request, Response } from "express";
import { ListAllBooksService } from "../services/ListAllBooksService";

class ListAllBooksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllBooksService = new ListAllBooksService()

    const allBooks = await listAllBooksService.execute()

    return response.json(allBooks)
  }
}

export { ListAllBooksController }