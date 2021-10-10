require("dotenv").config();
const app = require("./src/app");
const port = process.env.Port || 5000;

app.listen(port, () => console.log("app is on http://localhost:${port}"));
