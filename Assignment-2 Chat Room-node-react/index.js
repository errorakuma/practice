const express = require("express");
const app = express();
const socket = require("./socket");

app.get("/", async (req, res) => {
  res.send("<h1>home</h1>");
});

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(5001, () => {
  console.log("Server started at port 5001");
});

const io = socket.init(server);

const users = {};

io.on("connection", (client) => {
  client.on("username", (username) => {
    const user = {
      name: username,
      id: client.id,
    };
    users[client.id] = user;
    io.emit("connected", user);
    io.emit("users", Object.values(users));
    console.log("Client connected", user.name, user.id);
  });

  client.on("send", (message) => {
    io.emit("message", {
      text: message,
      date: new Date().toISOString(),
      user: users[client.id],
    });
  });

  client.on("disconnect", () => {
    const username = users[client.id];

    delete users[client.id];
    io.emit("disconnected", client.id);
    console.log("Client disconnected", username);
  });
});
