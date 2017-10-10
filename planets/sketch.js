var angle1 = 0
var angle2 = 90
var angle3 = 45
var angle4 = 70
var speedMod = 1
function setup(){
	createCanvas(600, 600);
	angleMode(DEGREES);
}

function draw(){


	if(keyIsDown(RIGHT_ARROW)){
		speedMod = 2;
	}
	else if(keyIsDown(LEFT_ARROW)){
		speedMod = -2;
	}

	else{
		speedMod = 1
	}


	



	

	background(0);

	createStars();
	//creating the sun
	fill(255,255,0);
	ellipse(height/2, width/2, 50,50 );

	// create planet 1 "mercury"
	fill(200, 150,0)
	createPlanet(75, 15, angle1);
	angle1 += speedMod * 3
	fill(255, 0,200)
	createPlanet(125, 20, angle2);
	angle2 += speedMod * 2

	fill(0,0,220)
	createPlanet(175, 20, angle3);
	angle3 += speedMod * 1
	
	fill(255, 0,0)
	createPlanet(225, 20, angle4);
	angle4  += speedMod * 0.75

}



function createPlanet(radius, size, angle){
	
	push();
	translate(height/2, width/2);

	rotate(angle);
	
	ellipse(radius, 0, size, size);

	pop();

	console.log(angle);
}

function createStars(){

	randomSeed(8675309)
    var a= random(191,230);

    var b= random(180,232);

    var c= random(150,238);

    fill(a,b,c)

    

    for(x=0;x<20;x++){

        for (y=0; y<20;y++){

            var size= random(2,5);

            var n=random(40,125);

            var m=random(45,105);

            ellipse(x*n,y*m,size,size);

        }

    }

}