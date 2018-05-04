var app = require('express')();
var http = require('http').createServer(app);
var sio = require('socket.io');
var io = sio(http);

var port = process.env.PORT || 8080;
http.listen(port);

app.get('/', function(req, res){ //when someone connects initially, send the index
  res.sendFile(__dirname + '/index.html');
});

app.get('/location.js', function(req, res){
  res.sendFile(__dirname + '/scripts/location.js');
});

io.on("connection", function(socket){   // arrival/departure announced in terminal
  console.log("connection");
  socket.on('disconnect', function(){
      console.log('disconnection rip');
    });
});
