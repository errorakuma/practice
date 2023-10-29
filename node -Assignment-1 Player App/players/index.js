const express = require("express");

const app = express();
const mongoose = require("mongoose");
const env = require("dotenv").config();
const bodyParser = require("body-parser");

const playerRouter = require("./routers/player.router");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(__dirname + "/public"));

mongoose
  .connect(process.env.DB_URL)

  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(playerRouter);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/getPlayers", (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});
