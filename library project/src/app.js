//run required scripts
require("dotenv").config();
require("../db/connection");

//call required packages
const express = require("express");
const cors = require("cors");
//create express intance
const app = express();
const path = require("path");

app.use(cors());
//use json and urlencoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/findAsset/:name", (req, res) => {
//   let name = path.join(__dirname, "../public/", req.params.name);
//   res.sendFile(name);
// });
//routes files
const userRoutes = require("../routes/user.routes");
const bookRoutes = require("../routes/book.routes");
const adminRoutes = require("../routes/admin.routes");
const anyRoutes = require("../routes/any.routes");

app.use("/user", userRoutes); // 45 r   /user/x
app.use("/book", bookRoutes); // 35 r => app.get('/x')  /post/x
app.use("/admin", adminRoutes);
//app.use("/", anyRoutes);
module.exports = app;
