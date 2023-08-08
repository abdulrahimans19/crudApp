const express = require("express");
const bodyParser = require("body-parser");
const db = require("./model/studentModel");
const studentController = require("./controllers/studentController");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", studentController);

app.listen(3000, () => {
  console.log("connected");
});
