const mainCanvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1500;
const canvasHeight = 750;

const paddleWidth = 75;
const paddleHeight = 150;

const x = 10;
const xx = 1415;
const y = (canvasHeight - paddleHeight) / 2;

ctx.fillRect(x, y, paddleWidth, paddleHeight);
ctx.fillRect(xx, y, paddleWidth, paddleHeight);

