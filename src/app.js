const express = require("express");
const app = express();
const cors = require("cors");
const notfoundMiddleware = require("./middlewares/notfound-middleware");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(notfoundMiddleware);
app.use(errorMiddleware);

module.exports = app;