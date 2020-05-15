let playerPaddle;
let computerPaddle;

function setup() {
  createCanvas(1500, 750);
  playerPaddle = new Paddle(10);
  computerPaddle = new Paddle(1500 - 30);
  ballThing = new Ball();
}

function draw() {
  background(0);
  playerPaddle.display();
  computerPaddle.display();
  ballThing.display();

  if(playerPaddle.isUp) {
      playerPaddle.up();
  } else if(playerPaddle.isDown) {
      playerPaddle.down();
  }
}


function keyPressed() {
    if (keyCode == UP_ARROW) {
        playerPaddle.isUp = true;
    } else if (keyCode == DOWN_ARROW) {
        playerPaddle.isDown = true;
    }
}
 
function keyReleased() {
    if (keyCode == UP_ARROW) {
        playerPaddle.isUp = false;
    } else if (keyCode == DOWN_ARROW) {
        playerPaddle.isDown = false;
    }
}

