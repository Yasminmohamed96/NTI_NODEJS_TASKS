const router = require("express").Router();
const UserController = require("../controller/user.controller");
const BookController = require("../controller/book.controller");
const AutherController = require("../controller/auther.controller");

const auth = require("../middleware/auth.middleware");

router.post("/register", UserController.register);
router.patch("/activate/:id", UserController.activateUser);
router.post("/login", UserController.login);

router.patch("/editProfile1/:id", auth.auth, UserController.editUserProfile1);

router.post("/profile", auth.auth, UserController.profile);
router.get("/logout", auth.auth, UserController.logout);

router.post("/addbookToUser/:id", auth.auth, UserController.addBookToUser);
//router.get("/addbookToUser/:id", auth, BookController.adduserToBook);
router.post("/returnBookDist/:id", auth.auth, BookController.returnBookDist);
router.get("/showMyBooks", auth.auth, UserController.showMyBooks);

router.get("/showAllBooks", BookController.showAllBooks);
router.get("/showSingle/:id", BookController.showById);

router.get("/showAllAuthers", AutherController.showAllauthers);
router.get("/showSingleAuthre/:id", AutherController.showById);

module.exports = router;
