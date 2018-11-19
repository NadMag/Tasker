// app.js

const express = require("express");
const bodyParser = require("body-parser");

const user = require("./routes/user");
const task = require("./routes/task");

const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");

const dev_db_url = "mongodb://localhost:27017/tasker";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", user);
app.use("/task", task);

const port = 1234;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
