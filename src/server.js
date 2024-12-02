const express = require("express");
const app = express();
require("dotenv").config();

const configEngine = require("./configs/configEngine");
const webRouters = require("./routes/web");
const connection = require("./configs/database");

const PORT = process.env.PORT;
const hostname = process.env.HOST_NAME;

configEngine(app);
app.use("/web", webRouters);
connection.query("SELECT * FROM Users u", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

app.listen(PORT, hostname, () => {
  console.log("Server is running", hostname, PORT);
});
