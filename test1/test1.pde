size(500,500);
background(255, 69,0);
int CircCenterX = 250;
int CircCenterY = 250;

fill(255,69,0);
ellipse(CircCenterX, CircCenterY, 100,100);

//draw a complex shape
fill(0,0,255);
beginShape();
vertex(9,17);
vertex(9,14);
vertex(23,19);
vertex(23,43);
endShape(CLOSE);