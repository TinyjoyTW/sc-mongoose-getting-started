const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: String,
    year: Number,
    codeISBN: {
        type: String, maxlength: 13, unique: true
    },
    quantity: {type: Number, min: 0, default: 0},
    lastPublished: {type: Date, default: Date.now},
    genre: {type: String, enum: ["romance", "fiction", "biography", "poetry"]},
    author: String
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;


// 1. Importing dependencies:
// The first line imports the mongoose library, which is a MongoDB object modeling tool.
// The second line imports the Schema class from the mongoose library.

// 2. Creating a Schema:
// A schema is a blueprint that describes the structure of the documents (objects) that will be stored in the MongoDB collection.
// The bookSchema variable is created using the new Schema() constructor. This constructor takes an object that defines the fields (properties) and their types for a book document.
// In this case, the bookSchema has the following fields:
// title: A string representing the title of the book.
// year: A number representing the year the book was published.
// codeISBN: A string representing the ISBN code of the book. It has additional properties specified, such as maxlength and unique.
// quantity: A number representing the quantity of books available. It has additional properties specified, such as min and default.
// lastPublished: A date representing the last published date of the book. It has a default value of the current date and time.
// genre: A string representing the genre of the book. It can only have values from the specified enum: "romance", "fiction", "biography", or "poetry".
// author: A string representing the author of the book.

// 3. Creating a Model:
// A model is a JavaScript class that represents a collection in the MongoDB database.
// The mongoose.model() method is used to define a model named "Book" based on the bookSchema. This method takes two arguments: the name of the model and the schema it should use.
// In this case, the model name is "Book" and it will create a collection named "books" in the MongoDB database.

// 4. Exporting the Model:
// The last line of code exports the Book model so that it can be used in other files within the project.
// Overall, this code provides a way to define the structure and behavior of book documents in a MongoDB database using the Mongoose library. It can be used to perform database operations such as creating, reading, updating, and deleting books.