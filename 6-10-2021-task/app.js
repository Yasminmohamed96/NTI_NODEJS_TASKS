const fs = require("fs");
const yargs = require("yargs");
const MyValidator = require("./myValidator");
//read from file
readData = () => {
  let data;
  try {
    data = JSON.parse(fs.readFileSync("users.json"));
    if (!Array.isArray(data)) throw new Error("data not an array");
    console.log(`data tmam`);
  } catch (e) {
    data = [];
    console.log(`kan fe error fa 7atena array fady ${e}`);
  }
  return data;
};
//write to file
writeData = allUsers => {
  try {
    fs.writeFileSync("users.json", JSON.stringify(allUsers));
    console.log(`data added inside file`);
  } catch (e) {
    console.log(`error in write to file ${e}`);
  }
};
const editUser = function(currentId, id = "", name = "", email = "", job = "") {
  let all = readData();
  let userRecord = all.find(val => val.id == currentId);

  let userRecordIndex = all.findIndex(val => val.id == currentId);

  if (name != "") userRecord.name = name;

  if (email != "") userRecord.email = email;

  if (job != "") userRecord.job = job;

  if (id != "") userRecord.id = id;

  all[userRecordIndex] = userRecord;
  writeData(all);
};
const showUser = function(id) {
  let all = readData();
  let userRecord = all.find(val => val.id == id);
  return userRecord;
};
const showAllUsers = function() {
  let all = readData();
  return all;
};
const deleteTask = task => {
  let all = readData();
  let userRecord = all.find(val => val.id == task.userId);
  let userRecordIndex = all.findIndex(val => val.id == task.userId);
  let userTasks = userRecord.tasks;
  let taskIndex = userTasks.findIndex(val => val.id == task.taskID);
  userRecord.tasks.splice(taskIndex, 1);
  all[userRecordIndex] = userRecord;
  console.log(all[userRecordIndex]);
  writeData(all);
};
const deleteUser = function(id) {
  let all = readData();
  let userRecordIndex = all.findIndex(val => val.id == id);
  all.splice(userRecordIndex, 1);
  writeData(all);
};
const search = (val, attr) => {
  let all = readData();
  let index = all.findIndex(ele => ele[attr] == val);
  if (index == -1) return false;
  else return all[index];
};
//add user yarg
yargs.command({
  command: "addNewUser",
  builder: {
    id: { type: "string", demandOption: true },
    name: { type: "string", demandOption: true },
    job: { type: "string", demandOption: true },
    email: { type: "string", demandOption: true }
  },
  handler: function(argv) {
    try {
      if (!MyValidator.isEmail(argv.email)) throw new Error("invalid email");
      if (!MyValidator.isId(argv.id, ["1", "2", "3"]))
        throw new Error("invalid id");
      if (!MyValidator.isName(argv.name)) throw new Error("invalid name");
      if (
        !MyValidator.isValidJob(argv.job, [
          "developer",
          "instructor",
          "ceo",
          "employee"
        ])
      )
        throw new Error("invalid job");

      let myData = readData();
      if (!MyValidator.isUnique(myData, argv.id, "id"))
        throw new Error("id used before");
      if (!MyValidator.isUnique(myData, argv.email, "email"))
        throw new Error("email used before");

      let user = {
        id: argv.id,
        name: argv.name,
        email: argv.email,
        job: argv.job,
        tasks: []
      };
      myData.push(user);
      writeData(myData);
    } catch (e) {
      console.log(e.message);
    }
  }
});
//add task to user yarg
yargs.command({
  command: "addTaskToUser",
  builder: {
    taskTitle: { type: "string", demandOption: true },
    taskDetails: { type: "string", demandOption: true },
    userId: { type: "string", demandOption: true }
  },
  handler: function(argv) {
    let allUsers = readData();
    let ind = allUsers.findIndex(ele => ele.id == argv.userId);
    if (ind == -1) return console.log("user not found");
    taskDate = new Date();
    const task = {
      taskId: Date.now(),
      taskTitle: argv.taskTitle,
      taskDetails: argv.taskDetails,
      createdAt: `${taskDate.getDate()}-${taskDate.getMonth() +
        1}-${taskDate.getFullYear()}`
    };
    console.log(allUsers[ind]);
    console.log(allUsers[ind].tasks);
    allUsers[ind].tasks.push(task);
    writeData(allUsers);
  }
});

// delete task from user yarg
yargs.command({
  command: "deleteTask",
  builder: {
    userId: { type: "string", demandOption: true },
    taskID: { type: "string", demandOption: true }
  },
  handler: function(argv) {
    const task = {
      userId: argv.userId,
      taskID: argv.taskId
    };
    deleteTask(task);
  }
});
//search user
yargs.command({
  command: "search",
  builder: {
    val: { type: "string" },
    valType: { type: "string" }
  },
  handler: function(argv) {
    console.log(search(argv.val, argv.valType));
  }
});
//show all users
yargs.command({
  command: "showAllUsers",
  builder: {},
  handler: function() {
    console.log(showAllUsers());
  }
});
// show single user
yargs.command({
  command: "showUser",
  builder: {
    userId: { type: "string", demandOption: true }
  },
  handler: function(argv) {
    console.log(showUser(argv.userId));
  }
});
//edit user
yargs.command({
  command: "editUser",
  builder: {
    id: { type: "string" },
    currentId: { type: "string" },
    name: { type: "string" },
    job: { type: "string" },
    email: { type: "string" }
  },
  handler: function(argv) {
    try {
      if (argv.email) {
        if (!MyValidator.isEmail(argv.email)) throw new Error("invalid email");
      }
      if (argv.id) {
        if (!MyValidator.isId(argv.id, ["1", "2", "3"])) {
          throw new Error("invalid id");
        }
      }
      if (argv.name) {
        if (!MyValidator.isName(argv.name)) throw new Error("invalid name");
      }
      if (argv.job) {
        if (
          !MyValidator.isValidJob(argv.job, [
            "developer",
            "instructor",
            "ceo",
            "employee"
          ])
        )
          throw new Error("invalid job");
      }
      let myData = readData();
      if (argv.id) {
        if (!MyValidator.isUnique(myData, argv.id, "id")) {
          throw new Error("id used before");
        }
      }
      if (argv.email) {
        if (!MyValidator.isUnique(myData, argv.email, "email")) {
          throw new Error("email used before");
        }
      }

      editUser(argv.currentId, argv.id, argv.name, argv.email, argv.job);
    } catch (e) {
      console.log(e.message);
    }
  }
});
// delete user
yargs.command({
  command: "deleteUser",
  builder: {
    userId: { type: "string", demandOption: true }
  },
  handler: function(argv) {
    deleteUser(argv.userId);
  }
});
yargs.argv;
