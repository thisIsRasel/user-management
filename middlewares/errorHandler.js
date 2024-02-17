const ErrorResponse = require("../utils/errorResponse");
const logger = require("../config/logger");

const errorHandler = (err, req, res, next) => {
    console.error(err);

    let error = { ...err };
    error.message = err.message;

    if (error.name === "MongoError" && error.code === 11000) {
        const message = "Account address must be unique";
        error = new ErrorResponse(message, 400);
    }

    if (err.name === "CastError") {
        const message = "Resource not found";
        error = new ErrorResponse(message, 404);
    }

    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);
    }

    if (err.name === "ValidationError") {
        const message = Object.values(err.errors)
            .map((error) => error.message)
            .join(", ");
        error = new ErrorResponse(message, 400);
    }

    logger.error(error.message || "Internal Server Error", {
        stack: error.stack, // Include complete traceback in the log
    });

    res.status(error.statusCode || 500).json({
        success: false,
        data: { error: error.message || "Internal Server Error" },
    });
};

module.exports = errorHandler;