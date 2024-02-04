export class ErrorHandler extends Error{
    constructor(message , statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const ErrorMiddleware = async (err , req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).send({
        success: false,
        "message": err.message
    })

}