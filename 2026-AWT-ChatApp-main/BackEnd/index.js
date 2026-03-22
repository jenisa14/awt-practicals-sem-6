const express = require("express");
const { Server } = require("socket.io");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

const httpServer = app.listen(3000, () => {
  console.log("Server started @ 3000");
});

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connect", (socket) => {
  const address = socket.handshake.address;
  console.log("Someone connected ", socket.id, "with ip = ", address);

  socket.on("messageSent", ({ toId, encMessage }) => {
    console.log("Msg from ", address, " = ", encMessage);
    io.to(toId).emit("recvMessage", encMessage);
  });

  socket.on("sendToAll", (message) => {
    io.emit("recvMessage", message);
  });

  socket.on("joinGroup", (gn) => {
    socket.join(gn);
  });
});
