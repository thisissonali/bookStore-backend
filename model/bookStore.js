import mongoose from "mongoose"
const BookSchema = mongoose.Schema({
    title: {
        type: 'string',
        required: true,
    },
    author: {
        type: 'string',
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
const BookSchemaModel = mongoose.model('BookSchemaModel', BookSchema);
export default BookSchemaModel;