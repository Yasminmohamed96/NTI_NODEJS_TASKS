const router = require("express").Router();
const UserController = require("../controller/user.controller");

router.post("login", UserController.login);
