const mongoose = require("mongoose");
const Book = require("../db/models/book.model");
const User = require("../db/models/user.model");
const FS = require("fs");

class BookController {
  static createBook = async (req, res) => {
    try {
      let book = new Book(req.body);
      book.autherId = req.params.id;
      //ha7awlha l object
      await book.save();
      res.send({ apiStatus: true, message: "book added", data: book });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in adding book"
      });
    }
  };
  static returnBookDist = async (req, res) => {
    try {
      let id = req.params.id;
      const data = await Book.findById(id);
      res.status(200).send({
        apiStatus: true,
        data: data.bookDist,
        message: " path returned successfully"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error returning the path"
      });
    }
  };

  // static adduserToBook = async (req, res) => {
  //   try {
  //     console.log("1");
  //     const book = await Book.findById(req.params.id);
  //     console.log(book);
  //     book.userId = req.user._id;
  //     await book.save();
  //     res.send({ apiStatus: true, message: "book added", data: book });
  //   } catch (e) {
  //     res.status(500).send({
  //       apiStatus: false,
  //       data: e.message,
  //       message: "error in adding book"
  //     });
  //   }
  // };

  static addpdf = async (req, res) => {
    try {
      let id = req.params.id;
      const data = await Book.findById(id);
      let place = "assets/" + req.file.filename;
      data.bookDist = place;
      await data.save();
      res.status(200).send({
        apiStatus: true,
        data: data,
        message: " pdf added successfuly"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error adding pdf"
      });
    }
  };

  static showAllBooks = async (req, res) => {
    try {
      const booksData = await Book.find();
      res.status(200).send({
        apiStatus: true,
        data: { booksData },
        message: "show all successful"
      });
    } catch (e) {
      res
        .status(500)
        .send({ apiStatus: false, data: e.message, message: "no books " });
    }
  };
  static showById = async (req, res) => {
    try {
      const bookData = await Book.findById(req.params.id);
      res.status(200).send({
        apiStatus: true,
        data: { bookData },
        message: "show book data"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "no book for this id  "
      });
    }
  };
  static delete = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book.bookDist) {
        let variableABC = book.bookDist.replace(new RegExp(/\\/g), "/");
        FS.unlinkSync(variableABC);
      }
      let allUser = await User.find();
      for (const item of allUser) {
        if (item.bookId.includes(req.params.id)) {
          item.bookId.splice(item.bookId.indexOf(req.params.id), 1);
          item.save();
        }
      }
      const bookData = await Book.findByIdAndDelete(req.params.id);
      res.status(200).send({
        apiStatus: true,
        data: { bookData },
        message: "book deleted"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "book not deleted   "
      });
    }
  };
}

module.exports = BookController;
