let playerPaddle;
let computerPaddle;
 
function setup() {
  createCanvas(1500, 750);
//   createCanvas(624, 315);
  playerPaddle = new Paddle(10);
  computerPaddle = new Paddle(1500 - 30);
}
 
function draw() {
  background(0);
  playerPaddle.display();
  computerPaddle.display();

  playerPaddle.up();
}