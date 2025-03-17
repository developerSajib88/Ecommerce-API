const express = require("express");
const cors = require("cors");
const notFoundMiddleware = require("./middlewares/notfound-middleware");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

// 🔹 Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔹 Routes (Import and Use Here)
// Example: app.use('/api/users', userRoutes);

// 🔹 Handle 404 & Errors
app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
