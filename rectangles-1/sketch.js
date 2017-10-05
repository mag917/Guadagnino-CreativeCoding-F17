function setup(){
	createCanvas(600, 600)
	rectMode(CENTER);

	push();

	translate(100, 300);
	rotate(PI/3);
	fill(255,0,0)
	rect(0,0,50,50);
	
	pop();

	push();

	translate(300, 300);
	rotate(PI/4);
	fill(0,255,0)
	rect(0,0,50,50);
	
	pop();

	push();

	translate(500, 300);
	rotate((5/8) * PI);
	fill(0,0,255)
	rect(0,0,50,50);
	
	pop();



}