import { Router } from "express";
import { AddBookController } from "./controllers/AddBookController";
import { DeleteBookController } from "./controllers/DeleteBookController";
import { ListAllBooksController } from "./controllers/ListAllBooksController";
import { UpdateBookController } from "./controllers/UpdateBookController";

const routes = Router()

const addBookController = new AddBookController()
const listAllBooksController = new ListAllBooksController()
const updateBookController = new UpdateBookController()
const deleteBookController = new DeleteBookController()

routes
  .post('/books', addBookController.handle)
  .get('/books', listAllBooksController.handle)
  .put('/books/:id', updateBookController.handle)
  .delete('/books/:id', deleteBookController.handle)

export { routes }