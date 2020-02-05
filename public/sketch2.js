var socket;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('yellow');
  socket = io();

  //ogni volta che si riceve un messaggio dal server si crea questo (newDrawing)
  socket.on('clickBroadcast', newDrawing);

  function newDrawing(receivedData){
    noStroke();
    fill('red');
    ellipse(random(10, windowWidth-10), random(10, windowWidth-10), 70);
  }
  // put setup code here
}

function draw() {
  // put drawing code here
}
