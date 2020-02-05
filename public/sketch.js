var socket;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('aquamarine');
  socket = io();

  //ogni volta che si riceve un messaggio dal server si crea questo (newDrawing)

  // put setup code here
}

function draw() {
  // put drawing code here
}

function mouseClicked(){
  fill('white');
  noStroke();
  var x_rect = random(10, windowWidth-10);
  var y_rect = random(10, windowHeight-10);
  // rect(x_rect, y_rect,100, 100 );

  var sendData = {
    //inviamo immagine
  }

  socket.emit('click', sendData);
}
