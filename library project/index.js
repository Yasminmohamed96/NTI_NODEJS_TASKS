const app = require("./src/app");
const PORT = process.env.PORT || 3000;
//let variableABC = "B YASMIN  B MOHAMED ";
//variableABC = variableABC.replace(/B/g, "D");
//console.log(variableABC);
// let id = "3";
// let test = [
//   { bookId: ["1", "2", "3"], name: "test1" },
//   { bookId: ["5", "3"], name: "test2" },
//   { bookId: ["5", "3"], name: "test3" },
//   { bookId: ["5", "3"], name: "test4" }
// ];
// for (const item of test) {
//   console.log(item.bookId);
//   if (item.bookId.includes(id)) {
//     console.log(id);
//     console.log(item.bookId.indexOf(id));
//     item.bookId.splice(item.bookId.indexOf(id), 1);
//   }
// }
// console.log(test);
app.listen(PORT, () => {
  console.log(`on http://localhost:${PORT}`);
});
