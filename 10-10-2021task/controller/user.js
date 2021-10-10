const { Console } = require("console");
const fs = require("fs");
const { all } = require("../routers/userRoute");
//read from file
readData = () => {
  let data;
  try {
    data = JSON.parse(fs.readFileSync("model/data.json"));
    if (!Array.isArray(data)) throw new Error("data not an array");
  } catch (e) {
    data = [];
    console.log(`kan fe error fa 7atena array fady ${e}`);
  }
  return data;
};
//write to file
writeData = allUsers => {
  try {
    fs.writeFileSync("model/data.json", JSON.stringify(allUsers));
  } catch (e) {
    console.log(`error in write to file ${e}`);
  }
};
class userController {
  // static test = (req, res) => {
  //   res.send("hi");
  // };
  // static show_home = (req, res) => {
  //   res.render("home");
  // };
  static gotAll(req, res) {
    res.redirect("/all");
  }
  static showAll(req, res) {
    let allUsers = readData();

    let data = {
      pageTitle: "show all users",
      allUsers,
      userStatus: allUsers.length > 0 ? true : false
    };
    // res.send(data);
    res.render("all", data);
  }
  static showSingle(req, res) {
    let data = { pageTitle: "show Single User", user: false };
    let id = req.params.id;
    let allUsers = readData();
    let user = allUsers.find(el => el.id == id);
    if (user) data.user = user;
    res.render("single", data);
  }
  static edit(req, res) {
    let data = {
      pageTitle: "edit user",
      user: false
    };
    let id = req.params.id;
    let allUsers = readData();
    let user = allUsers.find(el => el.id == id);
    if (user) data.user = user;

    res.render("edit", data);
  }
  static editData(req, res) {
    let user = {
      id: req.params.id,
      name: req.body.userName,
      age: req.body.age
    };
    let allUsers = readData();
    let userIndex = allUsers.findIndex(val => val.id == user.id);
    allUsers[userIndex] = user;
    console.log(allUsers[userIndex]);
    writeData(allUsers);
    res.redirect("/all");
  }
  static add(req, res) {
    let data = {
      pageTitle: "Add new user"
    };
    console.log(req.query);
    if (req.query.userName) {
      let user = {
        id: Date.now(),
        name: req.query.userName,
        age: req.query.age
      };
      let allUsers = readData();
      allUsers.push(user);
      writeData(allUsers);
      res.redirect("/add");
    } else {
      res.render("add", data);
    }

    res.render("add", data);
  }
  static addPost(req, res) {
    let data = { pageTitle: "Add new user" };
    res.render("addPost", data);
  }
  static sendData(req, res) {
    let user = { id: Date.now(), name: req.body.userName, age: req.body.age };
    let allUsers = readData();
    allUsers.push(user);
    writeData(allUsers);
    res.redirect("/all");
  }
  static delete(req, res) {
    let id = req.params.id;
    let allUsers = readData();
    let userIndex = allUsers.findIndex(val => val.id == id);
    allUsers.splice(userIndex, 1);
    writeData(allUsers);
    res.redirect("/all");
  }
}
module.exports = userController;
