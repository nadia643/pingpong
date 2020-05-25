let playerPaddle;
let computerPaddle;
let ball;


function setup() {
  createCanvas(1000, 500);
  playerPaddle = new Paddle(10);
  computerPaddle = new Paddle(1000 - 30);
  ball = new Ball();
  

}

function draw() {
  background(0); processAI();

  computerPaddle.display();
  playerPaddle.display();

  playerPaddle.update();
  computerPaddle.update();

  processAI();

  ball.update();
  ball.display();
  ball.hasHitPlayer(playerPaddle); 
  ball.hasHitAi(computerPaddle); 

  stroke(255);
  line(width/2, 0, width/2, height);
}

function processAI() {
    let middleOfPaddle = computerPaddle.y + computerPaddle.height / 2;
       
    if (middleOfPaddle > ball.y) {
      computerPaddle.isUp = true;
      computerPaddle.isDown = false;
    } else {
      computerPaddle.isDown = true;
      computerPaddle.isUp = false;
   
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

