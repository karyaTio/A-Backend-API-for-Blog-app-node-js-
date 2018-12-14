const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const db = require("./config/database");

const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(() => console.log("Connected to database"))
  .catch(err => console.log("Error while connecting to database : " + err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => res.send("/"));

app.listen(PORT, console.log(`Server started at port ${PORT}`));
