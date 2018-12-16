const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const createError = require("http-errors");

const indexRouter = require("./routes/index");
const postRouter = require("./routes/posts");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/posts", postRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // return error
  res.status(err.status || 500);
});

module.exports = app;
