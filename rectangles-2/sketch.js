function setup(){
	createCanvas(600, 600)
	rectMode(CENTER);

	for(var i=0; i < 4; i++){
		push();

		translate((i+1) * 100, 300);
		rotate(PI/(2*(i+1)));
		rect(0,0,50,50);
		
		pop();
	}
}