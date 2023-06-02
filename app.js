var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("dotenv").config(); // reads env file
const { mongooseConnect } = require("./db"); // function that connects to mongodb fro
mongooseConnect(); // invoke the function
console.log(`line 9 app.js`, process.env.ATLAS_URI);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const recipesRouter = require("./routes/recipes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/recipes", recipesRouter);

module.exports = app;
