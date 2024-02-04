import Express from "express";
import { addNewBook , getAllBooks , getBookById , updateBookById , deleteBookById } from "../controllers/bookStore.js";

const router = Express.Router();


// Route for saving new Book to the Bookstore

router.post('/newbook', addNewBook);

//Route for Accessing all Books

router.get('/getAllBooks', getAllBooks);
//Routes for Accessing one book by one id

router.get("/getbook/:id", getBookById);
//Route for deleting book by id

router.delete("/deletebook/:id", deleteBookById);

//Route for updating the content of a book by its id

router.put("/updatebook/:id", updateBookById);

export default router;