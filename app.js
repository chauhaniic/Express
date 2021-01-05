var createError = require("http-errors");
var express = require("express");
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
var logger = require('morgan');


var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var tasksRouter = require("./routes/task_router");
var productRouter = require("./routes/product_route");
var empBasicRouter=require("./routes/emp_basic_route");
var empPersonalRouter=require("./routes/emp_personal_route");
var empBankRouter=require("./routes/emp_bank_route");
var empAddRouter=require("./routes/emp_add_route");
var empEduRouter=require("./routes/emp_edu_route");
var empExpRouter=require("./routes/emp_exp_route");
var empSkillRouter=require("./routes/emp_skill_route");
var fileRouter = require('./routes/file_route');
var app = express();
//const bodyParser = require("body-parser");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//app.use(bodyParser);
app.use("/", indexRouter);
app.use('/files',fileRouter);
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use("/products", productRouter);
app.use("/employee", empBasicRouter);
/* app.use("/employee/add", empBasicRouter); */

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
