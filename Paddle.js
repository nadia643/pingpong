class Paddle {
    // only the x position of the paddle will change
    constructor(x) {
        this.x = x;
        this.y = (1500 - height) / 2;
        this.height = 80;
        this.width = 20;

        this.isUp = false;
        this.isDown = false;
    }


    update() {
        if (this.isUp) {
          this.up();
        } else if (this.isDown) {
          this.down();
        }
      }
    
    display() {
        fill(255);
        rect(this.x, this.y, this.width, this.height)
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

