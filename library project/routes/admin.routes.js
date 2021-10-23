const router = require("express").Router();
const UserController = require("../controller/user.controller");
const BookController = require("../controller/book.controller");
const AutherController = require("../controller/auther.controller");

const upload = require("../middleware/fileUpload");
const auth = require("../middleware/auth.middleware");
// //user
router.post("/addUser", auth.adminAuth, UserController.register);
router.patch(
  "/editProfile/:id",
  auth.adminAuth,
  UserController.editUserProfileAdmin
);
router.delete("/deleteUser/:id", auth.adminAuth, UserController.delete);
router.get("/showAllUsers", auth.adminAuth, UserController.showAllusers);
router.post("/showSingleUser/:id", auth.adminAuth, UserController.showUserById);
/////////////////////////////////////////////////////////////////
//book
router.patch(
  "/addPdf/:id",
  auth.adminAuth,
  upload.single("pdf"),
  BookController.addpdf
); //id of the book
router.post("/addBook/:id", auth.adminAuth, BookController.createBook); //id of the auther
router.delete("/deleteBook/:id", auth.adminAuth, BookController.delete);
router.get("/showAllBooks", BookController.showAllBooks);
router.get("/showSingleBook/:id", BookController.showById);
////////////////////////////////////////////////////////////////////
//auther
router.post("/addAuthre", auth.adminAuth, AutherController.addauther);
router.patch("/editAuthre/:id", auth.adminAuth, AutherController.editA);
router.delete("/deleteAuthre/:id", auth.adminAuth, AutherController.delete);
router.get("/showAllAuthers", auth.adminAuth, AutherController.showAllauthers);
router.get("/showSingleAuthre/:id", auth.adminAuth, AutherController.showById);

module.exports = router;
