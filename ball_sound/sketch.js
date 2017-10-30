var xPos = 300;
var xVel = 4;
var yPos = 300;
var yVel = 3;
var bg1;
var bounce;

function preload(){
   bg1 = loadImage("assets/brickwall.png");
   bounce = loadSound("assets/dodgeball.wav");
}

function setup(){
  createCanvas(923, 600);
  bounce.playMode("restart");
}

function draw(){
  background(bg1);
  
  xPos = xPos + xVel;
  
  if(xPos +25 > width || xPos -25 < 0){
  console.log("Boing!");
  bounce.play();

  xVel = xVel * -1;
  }
  yPos = yPos + yVel;
  
  if(yPos +25 > height || yPos -25 < 0){
  console.log("Boing!");
  bounce.play();
  yVel = yVel * -1;


}
strokeWeight(4);
fill(255, 50, 0);
ellipse(xPos, yPos, 50, 50);
}