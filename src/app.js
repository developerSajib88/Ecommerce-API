const express = require("express");
const app = express();
const cors = require("cors");
const authRouters = require("./routes/auth-routes");
const notfoundMiddleware = require("./middlewares/notfound-middleware");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/auth",authRouters);


app.use(notfoundMiddleware);
app.use(errorMiddleware);

module.exports = app;