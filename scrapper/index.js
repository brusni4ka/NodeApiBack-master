var http = require('http');
var io = require('socket.io');
var scrapSchedule = require('./cron').scrapSchedule;

// Create server & socket
var server = http.createServer(function (req, res) {
  // Send HTML headers and message
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.end('<h1>Aw, snap! 404</h1>');
});

server.listen(8000);
io = io.listen(server);

// Add a connect listener
io.sockets.on('connection', function (socket) {
   console.log('Client connected.');

  // Disconnect listener
  socket.on('disconnect', function () {
    console.log('Client disconnected.');
  });

});

scrapSchedule((data)=> {
  io.sockets.emit('sendRate', data)
});

