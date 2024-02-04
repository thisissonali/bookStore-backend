import BookSchemaModel from "../model/bookStore.js";
import { ErrorHandler } from "../middleware/error.js";  

export const addNewBook = async (req, res, next) => {
    try {
        const { title, author, publishYear } = req.body;
        
        if (!title || !author || !publishYear) {
           
            return next(new ErrorHandler("Enter all fields", 404));
        
        }
        
        const newBook = await BookSchemaModel.create({
            title,
            author,
            publishYear
        })
        
        return res.status(200).send({
            "message": "Book added to the record",
             data : newBook
        });
    } catch (error) {
        return next(new ErrorHandler(error , 500));
    }

}

export const getAllBooks = async (req, res , next) => { 
    try {
        const books = await BookSchemaModel.find({});
        if (!books) {
             return next(new ErrorHandler("No Book Founded at this id", 404));
        }
        return res.status(200).send({
            "message": " Below are the books available in the store",
            "data": books
        })
    } catch (error) {
        return next(new ErrorHandler(error, 500));
    }
}

export const getBookById = async (req, res , next) => {
    try {
       
        const { id } = req.params;
        const bookAtId = await BookSchemaModel.findById(id);

        if (!bookAtId) {
            return next(new ErrorHandler("No Book find at this id", 404));
        }
       
        return res.status(200).send({
            "message": "Succsessfully finded the book",
            "data": bookAtId
        })

    } catch (error) {
        return next(new ErrorHandler(error, 500));
    }
}

export const deleteBookById = async (req, res , next) => { 
    try {
        const { id } = req.params;

        const bookToBeDeleted = await BookSchemaModel.findByIdAndDelete(id);
        
        if (!bookToBeDeleted) { 
            return next(new ErrorHandler("No Book Founded at this id", 404));
        }
        
        return res.status(200).send({
            "message": "Book Deleted Succsessfully",
            
        })
    } catch (error) {
        return next(new ErrorHandler(error, 500));
    }
}

export const updateBookById = async (req, res , next) => { 
    try {
        const { title, author, publishYear } = req.body;
        if (!title || !author || !publishYear) { 
            return next(new ErrorHandler("Send all required fields", 500));
        }
        const { id } = req.params;

        const BookToBeUpdated = await BookSchemaModel.findByIdAndUpdate(id , req.body);
        
        if (!BookToBeUpdated) { 
             return next(new ErrorHandler("No Book Founded at this id", 404));
        }
        return res.status(200).send({
            "message": "Book updated",
            "data": BookToBeUpdated

        })
    } catch (error) {
         return next(new ErrorHandler(error, 500));
    }
}