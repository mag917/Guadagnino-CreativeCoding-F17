void setup(){
  size(600, 600);
}

void draw(){
  background (255);
 if(mousePressed == true && mouseY > (2 * (height/3)) && mouseX < width/2) {
   fill(0, 255, 255);
   rect(0, (2 * (height/3)), width/2, height/3);
  }
 
  if(mouseX > width/2){ 
    fill(255,0,0);
    rect(width/2, 0, width/2, height);
  }
  if(mouseX == 3 * (width/4)){
    background(229, 219,0);
  }
  if(mouseX < width/2 && mouseY < (2 * (height/3))){
    fill(0,0,255);
    rect(0, 0, width/2, (2 * (height/3)));
    
  }
}