const router = require("express").Router();
const AutherController = require("../controller/auther.controller");
const upload = require("../middleware/fileUpload");
const auth = require("../middleware/auth.middleware");

router.get("/test", (req, res) => res.send("test post"));

// router.patch("/edit/:id", auth.adminAuth, AutherController.editA);

// router.post("/add", auth.adminAuth, AutherController.addauther);
// router.delete("/delete/:id", auth.adminAuth, AutherController.delete);
router.get("/showAllAuthers", AutherController.showAllauthers);
router.get("/showSingle/:id", AutherController.showById);

module.exports = router;
