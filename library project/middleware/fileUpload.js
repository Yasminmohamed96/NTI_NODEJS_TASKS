const multer = require("multer");
const fs = require("fs");
const path = require("path");
// const upload = multer({

// })
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    let loc;
    // if (req.user) loc = path.join("uploads", req.user._id.toString());
    // loc = path.join("uploads", "pdfs");
    loc = "Y://WEB/nti-js/session17/src/assets";
    fs.mkdir(loc, err => {});
    cb(null, loc);
  },
  filename: function(req, file, cb) {
    const myFileName = Date.now() + path.extname(file.originalname);
    cb(null, myFileName);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 200000000 },
  fileFilter: function(req, file, cb) {
    if (path.extname(file.originalname) != ".pdf")
      return cb(new Error("invalid document"));
    cb(null, true);
  }
});
module.exports = upload;
