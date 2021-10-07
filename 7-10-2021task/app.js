//build in modules
const path = require("path");
/**include https buildin module  */
const https = require("https");

//installed packages
const express = require("express");
const hbs = require("hbs");

// define port
const PORT = 3000;

//create instance for express
const app = express();

//define use engine
app.set("view engine", "hbs");

//define folders location
staticFiles = path.join(__dirname, "public");
viewsFiles = path.join(__dirname, "design/views");
layouts = path.join(__dirname, "design/layouts");

//use files inside app
app.use(express.static(staticFiles));
app.set("views", viewsFiles);
hbs.registerPartials(layouts);
/**set api url  */
const apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=20";
/**send request to get data from api */
var dataFromApiAsJson;
const req = https.request(apiUrl, res => {
  let returnDataAsString = "";
  res.on("data", returnDataPart => {
    returnDataAsString += returnDataPart.toString();
  });
  res.on("end", () => {
    dataFromApiAsJson = JSON.parse(returnDataAsString);
  });
});
req.on("error", err => {
  console.log("api error ");
});
req.end();

//routes
app.get("", (req, res) => {
  //localhost:3000
  res.render("home", {
    pageTitle: "Home Page"
  });
});

app.get("/table", (req, res) => {
  //data = dataFromApiAsJson;
  data = dataFromApiAsJson;
  res.render("table", {
    pageTitle: "Table Page",
    data: data
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    pageTitle: "Contact Page"
  });
});

app.get("*", (req, res) => {
  res.render("error404", {
    pageTitle: "error 404"
  });
});

// run to server
app.listen(PORT, () => console.log(`app on http://localhost:${PORT}`));
