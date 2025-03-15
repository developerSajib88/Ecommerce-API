require("dotenv").config();

module.exports.dev = {
    app: {
        port: process.env.PORT || 5000,
    },
    database: {
        url: process.env.DB_URL || "mongodb://localhost:27017/mydatabase",
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET,
    },
};
