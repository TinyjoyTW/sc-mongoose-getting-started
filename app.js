const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const Book = require("./models/Book.model");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/mongoose-example-dev")
  .then((x) => console.log(`Connected to Database: "${x.connections[0].name}`))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES
app.get("/", (req, res) => {
  console.log(req);
});

app.get("/books", (req, res) => {
  // getting all the documents from the books collection
  Book.find({})
    .then((books) => {
      console.log("Retrieved books ->", books);
      res.json(books);
    })
    .catch((err) => {
      console.error("Error while retrieving books ->", error);
      res.status(500).send({ error: "Failed to retrieve books" });
    });
});

// START SERVER
app.listen(3000, () => console.log("App listening on port 3000!"));
