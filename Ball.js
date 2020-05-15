 
class Ball {
    // only the x position of the paddle will change 
    constructor(bx) {
        // ball starts in a different place each time
        this.bx = Math.floor(Math.random() * 1500);
        this.by = (1500 - height) / 2;
        this.height = 30;
        this.width = 15;

        this.isUp = false;
        this.isDown = false;
    }

    display() {
        fill("red");
        circle(this.bx, this.by, this.width, this.height)
    }

    //the x and y represent the top left of the paddle, so we take away the height to constrain it
    up() {
        if(this.y > 0) {
        this.y -=2;
    }
}

    down() {
        if(this.y < height - this.height) {
        this.y +=2;
        }
    }
}
