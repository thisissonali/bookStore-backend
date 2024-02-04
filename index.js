import Express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { ErrorMiddleware }  from "./middleware/error.js";
import  booksRouter  from "./routes/bookStore.js";
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const app = Express();

app.use(cors());
app.use(Express.json());
app.use('/books', booksRouter);
app.use(ErrorMiddleware);
//Database connection

mongoose.connect(MONGO_URI, {
    dbname: 'BookStoreBackend'
}).then(() => {
    console.log("Database connected");
}).catch((err) => { 
   console.log(err); 
})


app.get('/', (req, res) => {
    res.send("Server is working...");
})



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})