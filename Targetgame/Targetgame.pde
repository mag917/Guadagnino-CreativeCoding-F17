int targetX = 200;
int targetY = 150;
int targetXVel = 2;
int targetYVel = 2;
int targetSize = 40;
int score = 0;

void setup(){
  size(400, 300); 
 
}

void draw(){
  background(150);
  
  //target movement, basically just the class example thing, but set up for both X and Y, and bouncing on the edge instead of from the middle of the circle
  targetX += targetXVel;
  
  if(targetX +10 + (targetSize / 2) > width || targetX - (targetSize / 2) < 0){
 // println("Boing!");
  targetXVel = targetXVel * -1;
  }
 
  targetY += targetYVel;
  
  if(targetY + (targetSize / 2) > height || targetY - (targetSize / 2) < 0){
 // println("Boing!");
  targetYVel = targetYVel * -1;


  }

//Here's the interesting bit, where we make the target react to the mouse
  if(mousePressed == true && (dist(mouseX, mouseY, targetX, targetY) < targetSize/2)){
   println("OW!"); //for hit detection purposes
   score ++; 
   
   targetSize = int(random(30, 50)); //randomize target size
   println("Size: " + str(targetSize));
   
   targetX = int(random(targetSize, width - targetSize)); //randomize x position
   
   targetY = int(random(targetSize, height - targetSize)); //do the same for Y   
   
   targetXVel = (int(random(-3,3))); //randomize X direction
   
   targetYVel = (int(random(-3,3))); // same for y
   // note: might want to figure out how to make it not be zero
   
   println("X Vel: " + str(targetXVel) + " Y Vel: " + str(targetYVel));
   println("Score: " +  str(score));
   
  }
    


ellipse(targetX, targetY, targetSize, targetSize);
}
  