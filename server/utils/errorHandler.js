function errorHandler(err, req, res, next) {
    console.error(err.stack);

    // Check if the error has a status code, otherwise default to 500 (Internal Server Error)
    const statusCode = err.statusCode || 500;

    // Send error response
    res.status(statusCode).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: statusCode
        }
    });
};

module.exports = errorHandler;
