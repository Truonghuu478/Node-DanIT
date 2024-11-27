const express = require("express");
require("dotenv").config();
const app = express();

const configEngine = require("./configs/configEngine");
const webRouters = require("./routes/web");

const PORT = process.env.PORT;
const hostname = process.env.HOST_NAME;

configEngine(app);


app.use("/web", webRouters)
app.listen(PORT,hostname,() => {
    console.log("Server is running",PORT);
})

