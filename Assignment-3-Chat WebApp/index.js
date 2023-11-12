const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(cors());
mongoose
  .connect("mongodb://0.0.0.0:27017/nov_12")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Error in connecting to database");
    console.log(err);
  });

const dataSchema = new mongoose.Schema({
  temperature: Number,
  batteryLevel: Number,
  timeStamp: String,
});

const Data = mongoose.model("Data", dataSchema);

app.post("/saveData", async (req, res) => {
  const randomData = {
    temperature: Math.floor(Math.random() * 100),
    batteryLevel: Math.floor(Math.random() * 100),
    timeStamp: new Date().toISOString(),
  };
  // new Date().toISOString().split("T")[0];
  const newData = new Data(randomData);

  try {
    await newData.save();
    io.emit("newData", randomData);
    res.status(200).send("Data saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/latestData", async (req, res) => {
  try {
    const latestData = await Data.find().sort({ _id: -1 }).limit(20);
    res.json(latestData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/historicalData", async (req, res) => {
  const { startDateTime, endDateTime } = req.query;

  try {
    const historicalData = await Data.find({
      timeStamp: {
        $gte: startDateTime,
        $lte: endDateTime,
      },
    });

    if (historicalData.length === 0) {
      res.status(404).send("No historical data found");
    } else {
      res.json(historicalData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
