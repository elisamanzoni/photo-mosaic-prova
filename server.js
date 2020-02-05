//to put express file in the app
var express = require('express');
var socket = require('socket.io');

//allow to create quickly static files
//activate express
var app = express();
var port =  3000;
app.use(express.static('public'));
let server = app.listen(port);

//socket
var io = socket(server);
io.on('connection', newConnection);

//callback funcion
function newConnection(socket){
  console.log(socket.id);

//ogni volta che qualcuno fa partire la funzione dello sketch (mouseClicked), prende dei dati
socket.on('click', clickMessage);

function clickMessage(receivedData){
  console.log(receivedData);
  //manda i dati al mondo
  //broadcast = trasmettere
  socket.broadcast.emit('clickBroadcast', receivedData);
}

}

console.log('server is running');
