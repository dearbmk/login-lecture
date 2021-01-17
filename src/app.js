"use strict";

//module
const express = require("express");
const app = express();

//rounting
const home = require("./home");

//app setting
app.set("veiws", "/views");
app.set("view engine", "ejs");

app.use("/", home); //use -> register middle ware

module.exports = app;