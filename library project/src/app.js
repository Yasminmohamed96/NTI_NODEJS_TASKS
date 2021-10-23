//run required scripts
require("dotenv").config();
require("../db/connection");

//call required packages
const express = require("express");
// const cors = require("cors")
//create express intance
const app = express();
// app.use(cors())
//use json and urlencoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes files
const userRoutes = require("../routes/user.routes");
const bookRoutes = require("../routes/book.routes");
const adminRoutes = require("../routes/admin.routes");
const autherRoutes = require("../routes/auther.routes");

app.use("/user", userRoutes); // 45 r   /user/x
app.use("/book", bookRoutes); // 35 r => app.get('/x')  /post/x
app.use("/admin", adminRoutes);
app.use("/auther", autherRoutes);
module.exports = app;
