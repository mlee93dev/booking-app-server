const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;

const {generateLocationDetails} = require('./utils/location');
const {Users} = require('./utils/users');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);
let users = new Users();

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('visit', (callback) => {
    users.removeUser(socket.id);
    users.addUser(socket.id);

    callback();
  });

  socket.on('disconnect', () => {
    users.removeUser(socket.id);
  })

  socket.on('sendLocationDetails', (zipcode) => {
    let user = users.getUser(socket.id);

    if (user) {
      io.to(user.client).emit('newLocationDetails', generateLocationDetails(zipcode));
    }
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});