const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bookSchema = new mongoose.Schema(
  {
    autherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auther",
      required: true
    },
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    bookName: {
      type: String,
      trim: true,
      minlength: 6,
      maxlength: 20,
      required: true
    },

    category: {
      type: String,
      trim: true
    },
    bookDist: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      min: 21
    },
    status: {
      type: String,
      trim: true,
      enum: ["bought", "rented"]
    }
  },
  { timestamps: true }
);
bookSchema.virtual("myBookstouser", {
  ref: "User",
  localField: "_id",
  foreignField: "bookId"
});
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
