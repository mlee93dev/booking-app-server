const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;

const {generateLocationDetails} = require('./utils/location');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('getLocationDetails', (zipcode) => {
    io.to(socket.id).emit('sentLocationDetails', generateLocationDetails(zipcode));
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});