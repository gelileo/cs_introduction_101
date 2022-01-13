var canvas, canvasContext;

//ball variables
var ballX = 200;
var ballSpeedX = 5;
var ballY = 200;
var ballSpeedY = -5;
var ballRadius = 10;
//refresh rate
var framesPerSecond = 30;

// Fires after the page is finished loading
window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  /**
   * function setInterval(someFunc, interval)
   * takes two parameters: a function and a time interval in milliseconds
   * The following function call invokes `updateAll` every `(1000 / framesPerSecond)` milliseconds
   */  
  setInterval(updateAll, 1000 / framesPerSecond);
  drawAll();
}

function ballMovement() {
  ballX += ballSpeedX;

  //right
  if(ballX + ballRadius > canvas.width && ballSpeedX > 0.0) {
    ballSpeedX *= -1;
  }

  //left
  // enter code here to implement the movement when ball hit left boundary

  
  ballY += ballSpeedY;

  // bottom
  if(ballY + ballRadius > canvas.height) {
    ballSpeedY *= -1;
  }

  // top
  // enter code here to implement the movement when ball hit top boundary
 
}

// This is called every few milliseconds
function updateAll() { 
  // enter code below to refresh the view
  
}

function moveAll() {
  ballMovement();
}

function drawAll() {
  //background
  rect(0, 0, canvas.width, canvas.height, 'black');

  drawText();
  ball();
}

function ball() {
  circle(ballX, ballY, ballRadius, 'yellow');
}


function drawText() {
  text("BOUNCING BALL", canvas.width / 2, 150, 'white', 'bold 1em Arial', 'center');
}
