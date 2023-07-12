
//app.js

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
var cors = require("cors");

const app = express();
app.use(cors());

const expenseRoutes = require("./routes/expense");

app.use(bodyParser.json({ extended: false }));

app.use(expenseRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

authenticate();