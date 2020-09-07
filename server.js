require("./db/mongoose");

const express = require("express");
const bodyParser = require("body-parser");

const blogRouter = require("./blog/routes");

const app = express();
const port = 8080;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", blogRouter);

app.listen(port);
