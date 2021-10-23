const mongoose = require("mongoose");
const User = require("../db/models/user.model");
const Book = require("../db/models/book.model");
const emailSetting = require("../helper/email.helper");
const generateTxt = require("../helper/generateEmailTxt");
class UserController {
  static register = async (req, res) => {
    try {
      let user = new User(req.body);
      await user.save();
      emailSetting(user.email, generateTxt(), "new registeration");
      res.send({ apiStatus: true, message: "registered", data: user });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in adding user"
      });
    }
  };
  static activateUser = async (req, res) => {
    let userId = req.params.id;
    try {
      let user = await User.findById(userId);
      if (!user)
        res
          .status(404)
          .send({ apiStatus: false, message: "user not found", data: "" });
      user.status = true;
      await user.save();
      res
        .status(200)
        .send({ apiStatus: true, message: "registered", data: user });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in activate user"
      });
    }
  };
  static addBookToUser = async (req, res) => {
    try {
      if (!req.user.bookId.includes(req.params.id)) {
        req.user.bookId.push(req.params.id);
        await req.user.save();
      } else {
        //user.bookId = req.params.id; //book id
        throw new Error("already added");
      }
      const book = await Book.findById(req.params.id);
      if (!book.userId.includes(req.user._id)) {
        book.userId.push(req.user._id);
        await book.save();
      } else {
        throw new Error("already added");
      }
      res.send({ apiStatus: true, message: "book added", data: book });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in adding book"
      });
    }
  };

  static editUserProfileAdmin = async (req, res) => {
    try {
      //req.body;
      const user = await User.findById(req.params.id);
      for (const item in req.body) {
        user[item] = req.body[item];
      }
      await user.save();
      res
        .status(200)
        .send({ apiStatus: true, message: "profile edited", data: req.user });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in activate user"
      });
    }
  };

  static editUserProfile1 = async (req, res) => {
    try {
      //req.body;
      for (const item in req.body) {
        req.user[item] = req.body[item];
      }
      await req.user.save();
      res
        .status(200)
        .send({ apiStatus: true, message: "registered", data: req.user });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "error in activate user"
      });
    }
  };

  static login = async (req, res) => {
    try {
      const userData = await User.loginUser(req.body.email, req.body.password);
      const token = await userData.generateToken();
      res.status(200).send({
        apiStatus: true,
        data: { userData, token },
        message: "logged in success"
      });
    } catch (e) {
      res
        .status(500)
        .send({ apiStatus: false, data: e.message, message: "invalid login" });
    }
  };
  static profile = async (req, res) => {
    res.status(200).send({
      apiStatus: true,
      data: req.user,
      message: "user data loaded"
    });
  };
  static logout = async (req, res) => {
    try {
      res.send(req.user);
    } catch (e) {
      res.send(e);
    }
  };
  static showAllusers = async (req, res) => {
    try {
      const usersData = await User.find();
      res.status(200).send({
        apiStatus: true,
        data: { usersData },
        message: "show all successful"
      });
    } catch (e) {
      res
        .status(500)
        .send({ apiStatus: false, data: e.message, message: "no users " });
    }
  };
  static showUserById = async (req, res) => {
    try {
      console.log("1");
      const userData = await User.findById(req.params.id);
      res.status(200).send({
        apiStatus: true,
        data: { userData },
        message: "show user data"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "no user for this id  "
      });
    }
  };
  static showMyBooks = async (req, res) => {
    try {
      const mybooksData = [];
      // let index = 0;
      for (const item of req.user.bookId) {
        mybooksData.push(await Book.findById(item));
        // index++;
      }
      res.status(200).send({
        apiStatus: true,
        data: { mybooksData },
        message: "show my books data"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "no books for this id  "
      });
    }
  };

  static delete = async (req, res) => {
    try {
      const userData = await User.findByIdAndDelete(req.params.id);
      res.status(200).send({
        apiStatus: true,
        data: { userData },
        message: "user deleted"
      });
    } catch (e) {
      res.status(500).send({
        apiStatus: false,
        data: e.message,
        message: "user not deleted   "
      });
    }
  };
}

module.exports = UserController;
