const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8000;
const path = require("path");
const db = require("./config/mongoose");

app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));
app.use(cors());

app.use("/", require("./route"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log("Yup!My Server is running on Port", port);
});
