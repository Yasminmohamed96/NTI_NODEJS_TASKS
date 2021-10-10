const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

const userRoutes = require("../routers/userRoute.js");

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../frontend/views"));
hbs.registerPartials(path.join(__dirname, "../frontend/layouts"));
//app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);
module.exports = app;
