class Ball {
    constructor() {
        function myFunction() {
            setInterval(function(){ alert("Hello"); }, 3000);
          }
    }


    
    display() {
        fill("red");
        let bx = 750;
        let  by = (1500 - height) / 2;
        circle(750, 375, 25, 25);
    }

    
}
    



  
//  update() {
//     // frames per sec
// const FPS = 30
// // ball size
// let bs = 30;
// // ball x and y pos
// let bx, by;
// // ball velocity
// let xv, xy;
// //set interval, game loop
// setInterval(update, 1000 / FPS);
// // random ball starting speed (between 100 and 200 pps)
// // x velocity
// // We want the random number multiplied by 101 (101 will not be incl) + 100 = max of 200 and min of 100 and rounded down to integer
// // /FPS makes it pixels per frame instead of per second
// xv = Math.floor(Math.random() * 101 + 100) / FPS;
// yv = Math.floor(Math.random() * 101 + 100) / FPS;

//     // move the ball
//     bx += xv;
//     by += yv;
//     // bounce the ball of each wall

//     // draw abckground and ball
    
// }
