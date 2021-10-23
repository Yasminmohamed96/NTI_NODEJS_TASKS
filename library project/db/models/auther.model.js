const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AutherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 6,
      maxlength: 20,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) throw new Error("invalid email");
      }
    }
  },
  { timestamps: true }
);

AutherSchema.virtual("allAuther", {
  ref: "Auther",
  localField: "_id",
  foreignField: "autherId"
});

const Auther = mongoose.model("Auther", AutherSchema);
module.exports = Auther;
