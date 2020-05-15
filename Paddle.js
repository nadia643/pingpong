// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// const canvasWidth = 1000;
// const canvasHeight = 750;
// const paddleWidth = 50;
// const paddleHeight = 150;

// const paddleLeftX = 10;
// const paddleRightX = canvasWidth - paddleWidth - 10;
// const centreLineX = canvasWidth / 2;
// const y = (canvasHeight - paddleHeight) / 2;


// ctx.fillStyle = "white";
// // paddle left and right 
// const leftPaddle = ctx.fillRect(paddleLeftX, y, paddleWidth, paddleHeight);
// const rightPaddle = ctx.fillRect(paddleRightX, y, paddleWidth, paddleHeight);
// // centre line
// const centreLine = ctx.fillRect(centreLineX, 0, 5, canvasHeight)

// document.addEventListener('click', movePaddle);

// function movePaddle() {
//     console.log("clicked");   
// }

class Paddle {
    // only the x position of the paddle will change 
    constructor(x) {
        this.x = x;
        this.y = (1500 - height) / 2;
        this.height = 80;
        this.width = 20;
    }

    display() {
        fill(255);
        rect(this.x, this.y, this.width, this.height)
    }

    up() {
        this.y -=2;
    }

    down() {
        this.y +=2;
    }
}

