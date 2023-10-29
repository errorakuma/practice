const player = require("../models/player.model");

let currentIndex = 0;

module.exports.addPlayer = async (req, res) => {
  try {
    const result = await player.create(req.body);
    return res
      .status(201)
      .json({ message: "Player added successfully", result });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports.getPlayers = async (req, res) => {
  try {
    const result = await player.find();
    if (result.length > 0) {
      const player = result[currentIndex];

      const data = {
        Name: player.title,
        Image: player.thumbnail,
        Description: player.description,
        total: result.length,
        currentIndex: currentIndex + 1,
      };

      res.render("info", data);
    } else {
      return res.status(404).send("No players found");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};

module.exports.getPlayer = async (req, res) => {
  const result = await player.find();

  if (currentIndex < result.length - 1) {
    currentIndex = currentIndex + 1;
  } else {
    currentIndex = 0;
  }

  res.redirect("/getPlayers");
};
