const router = require("express").Router();
const UserController = require("../controller/user.controller");
const BookController = require("../controller/book.controller");

const auth = require("../middleware/auth.middleware");

router.post("/register", UserController.register);
router.patch("/activate/:id", UserController.activateUser);
router.post("/login", UserController.login);

router.patch("/editProfile1/:id", auth.auth, UserController.editUserProfile1);

router.post("/profile", auth.auth, UserController.profile);
router.get("/logout", auth.auth, UserController.logout);

router.post("/addbookToUser/:id", auth.auth, UserController.addBookToUser);
//router.get("/addbookToUser/:id", auth, BookController.adduserToBook);

router.get("/showMyBooks", auth.auth, UserController.showMyBooks);

// router.get("/showAllBooks", BookController.showAllBooks);
// router.get("/showSingle/:id", BookController.showById);

// router.patch("/buy/:id", BookController.buy);
// router.patch("/rent/:id", BookController.rent);

module.exports = router;
