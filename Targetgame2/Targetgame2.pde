int targetX = 200;
int targetY = 150;
int targetXVel = 1;
int targetYVel = 1;
int targetSize = 50;
int maxSpeed = 1;
int score = 0;
int lasttime = millis();
int scoreMult = 1;
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
    int lasttime = millis();
   score += scoreMult; 
   if(scoreMult < 25){
   scoreMult += 1;
   }
   
   
     if(targetSize > 20){
     targetSize -= 5; //decrease target size
     }
   println("Size: " + str(targetSize));
   
   targetX = int(random(targetSize, width - targetSize)); //randomize x position
   
   targetY = int(random(targetSize, height - targetSize)); //do the same for Y  
   
   maxSpeed += 1;
   
   targetXVel = (int(random(-maxSpeed,maxSpeed))); //randomize X direction
   
   targetYVel = (int(random(-maxSpeed,maxSpeed))); // same for y
   // note: might want to figure out how to make it not be zero
   
   println("X Vel: " + str(targetXVel) + " Y Vel: " + str(targetYVel));
   println("Score: " +  str(score));
   
  }
  
  else if(mousePressed){
    int lasttime = millis(); // storing a time value to be checked against for the next miss.
     if(millis() - lasttime < 1000){
       println("Missed");
        if(maxSpeed > 2){
          maxSpeed -= 1;
    }
   // targetSize += 5;
    
  }
  }

fill(255, 0,0); // make the target stand out more
ellipse(targetX, targetY, targetSize, targetSize);
}
  