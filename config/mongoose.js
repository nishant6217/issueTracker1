const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/kkkk");

const db = mongoose.connection;

db.on("error", console.error.bind("error!!"));

db.once("open", function () {
  console.log("Successfully connected to database :: MongoDB");
});

module.exports = db;
