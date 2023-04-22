const express = require("express");
const app = express();

const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const booksRouter = require("./routes/books");
const bookMatchRouter = require("./routes/match");
const chaptersRouter = require("./routes/chapters");
const versesRouter = require("./routes/verses");
const readingRouter = require("./routes/reading");


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/bible", express.static(path.join(__dirname, "testaments")));


app.use("/verses", versesRouter);
app.use("/books", booksRouter);
app.use("/match", bookMatchRouter)

app.use("/reading", readingRouter);

app.use("/chapters", chaptersRouter);
// route to chapters
app.use("/", indexRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
