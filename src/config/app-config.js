require("dotenv").config(); // Ensure dotenv is configured

module.exports = {
    app: {
        port: process.env.PORT || 5000
    },
    database: {
        url: process.env.DB_URL || "mongodb://localhost:27017"
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET || "default_secret" // Fallback for JWT secret
    }
};
