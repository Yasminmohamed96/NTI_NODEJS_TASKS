const router = require("express").Router();
const BookController = require("../controller/book.controller");
const upload = require("../middleware/fileUpload");
const auth = require("../middleware/auth.middleware");

router.get("/test", (req, res) => res.send("test post"));

// router.patch(
//   "/addPdf/:id",
//   auth.adminAuth,
//   upload.single("pdf"),
//   BookController.addpdf
// ); //id of the book
// router.post("/add/:id", auth.adminAuth, BookController.createBook); //id of the auther

// router.delete("/delete/:id", auth.adminAuth, BookController.delete);

router.get("/showAllBooks", BookController.showAllBooks);
router.get("/showSingle/:id", BookController.showById);

module.exports = router;
