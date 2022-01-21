var canvas, canvasContext;
const framesPerSecond = 30;

// Fires after the page is finished loading
window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  setInterval(updateAll, 1000 / framesPerSecond);

  canvas.addEventListener('mousemove', updateMousePosition);

  paddleX = (canvas.width - PADDLE_WIDTH) / 2;
  drawAll();
}

//paddle variables and constants
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 10;
const PADDLE_DIST_FROM_EDGE = 60;
var paddleX = 0;

//mouse variables;
var mouseX;
var mouseY;

function drawAll() {
  //background
  rect(0, 0, canvas.width, canvas.height, 'black');
  drawPaddle();
  drawMouse()
}

function drawPaddle() {
  rect(paddleX, canvas.height - PADDLE_DIST_FROM_EDGE, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
}

function drawMouse() {

  text(mouseEvent, 20, 50, 'white', '12px Arial');
  text(canvasBounds, 20, 80, 'white', '12px Arial');
  text(canvasFrame, 20, 110, 'white', '12px Arial');
  text(documentElement, 20, 140, 'white', '12px Arial');

// mouse location
  text(`(${mouseX}, ${mouseY})`, mouseX, mouseY, 'yellow', '12px Arial');
}

function updateAll() {
  drawAll()
}

var mouseEvent = ""
var canvasBounds = ""
var canvasFrame = ""
var documentElement = ""

function updateMousePosition(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;

  mouseEvent = `Mouse Window Loc: (${evt.clientX}, ${evt.clientY})`;
  canvasBounds = `Canvas Bounds: (left: ${ rect.left }, top: ${ rect.top }, bottom: ${ rect.bottom }, rigth: ${ rect.right })`;

  canvasFrame = `Canvas Frame: (x: ${ rect.x }, y: ${ rect.y }, w: ${ rect.width }, h: ${ rect.height })`;

  documentElement = `H_scroll: ${ root.scrollLeft }, V_scroll: ${ root.scrollTop } `
}


// Helpers
/**
 * @param x: topLeftX
 * @param y: topLeftY
 * @param w: brick width
 * @param h: brick height 
 */
function brick(x, y, w, h) {
  rect(x, y, w, h, BRICK_COLOR)
}

/**
 * @param topLeftX: top left cornor x
 * @param topLeftY: top left corner y
 * @param boxWidth: rectangle width
 * @param boxHeight: rectangle height 
 * @param fillColor: color
 */
function rect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

/**
 * @param centerX: circle center X
 * @param centerY: circle center Y
 * @param radius: circle radius
 * @param fillColor: fill color
 */
function circle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();
}

/**
 * @param showWords: circle center X
 * @param textX: circle center Y
 * @param textY: circle radius
 * @param fillColor: fill color
 * @param fontSizeStyle: font size & style
 * @param textAlignment: text alignment
 */
function text(showWords, textX, textY, fillColor, fontSizeStyle, textAlignment) {
  canvasContext.fillStyle = fillColor;
  canvasContext.font = fontSizeStyle;
  canvasContext.textAlign = textAlignment;
  canvasContext.fillText(showWords, textX, textY);
}
