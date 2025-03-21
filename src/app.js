const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth-routes");
const productRoutes = require("./routes/product-routes");
const categoryRoutes = require("./routes/category-routes");
const notfoundMiddleware = require("./middlewares/notfound-middleware");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
app.use("/api/categories",categoryRoutes);


app.use(notfoundMiddleware);
app.use(errorMiddleware);

module.exports = app;