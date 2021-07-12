const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nish6217:nish6217@cluster0.xibja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.error.bind("error!!"));

db.once("open", function () {
  console.log("Successfully connected to database :: MongoDB");
});

module.exports = db;
