// Declare and initialize global variables
var canvas;
var clearButton;
var spread;
var slider;

function setup() {
  canvas = createCanvas(500, 400);
  canvas.parent("#canvas-area");
  canvas.mousePressed(drawSplatter);
  clearButton = select("#clear-button");
  clearButton.mousePressed(clearScreen);
  slider = select ("#slider")
  slider.input(updateSpread)
  background(65, 60, 88);
  //spread = 50;
  updateSpread();
}

function updateSpread(){
  spread = slider.value();
}

function drawEllipse() {
  fill("#ff0000");
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}

function drawSplatter() {
  fill("#ff0000");
  var randomNum = random(10, 15);
  for(var i = 0; i < randomNum; i++) {
    var randomSize = random(5,15);
    var x = random(mouseX - spread, mouseX + spread);
    var y = random(mouseY - spread, mouseY + spread);
    ellipse(x, y, randomSize, randomSize)
  }
}

function clearScreen() {
  background(65, 60, 88);
}
