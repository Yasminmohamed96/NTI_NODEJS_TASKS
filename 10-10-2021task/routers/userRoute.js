const router = require("express").Router();
const userController = require("../controller/user.js");
// router.get("", userController.test);
// router.get("/home.hbs", userController.show_home);

router.get("", userController.gotAll);
router.get("/single/:id", userController.showSingle);
router.get("/all", userController.showAll);
router.get("/add", userController.add);

router.get("/delete/:id", userController.delete);

router.get("/edit/:id", userController.edit);
router.post("/edit/:id", userController.editData);

router.get("/addPost", userController.addPost);
router.post("/addPost", userController.sendData);

module.exports = router;
