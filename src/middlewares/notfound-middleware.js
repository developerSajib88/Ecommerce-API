module.exports = (req, res, next) => {
    res.status(404).json({
        success: false,
        status: 404,
        message: "Not Found!",
    });
};
