module.exports = (error, req, res, next) => {
    const statusCode = error.status || 500;
    
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: error.message || 'Internal Server Error',
    });
};
