require("./db/mongoose");

const express = require("express");
const bodyParser = require("body-parser");

const blogRouter = require("./blog/routes");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", blogRouter);

app.listen(port);
