let io;
module.exports = {
  init: (server) => {
    io = require("socket.io")(server, {
      cors: {
        origin: "*",
      },
      transports: ["websocket", "polling"],
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized");
    }
    return io;
  },
};
