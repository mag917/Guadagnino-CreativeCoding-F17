var curRoom;
var lastRoom;
var bg1;
var bg2;
var bg3;
var bg4;
var roomsVisited = [false, false, false, false]


function preload(){

	bg1 = loadImage("assets/screen1.jpg");
	bg2 = loadImage("assets/screen2.jpg");
	bg3 = loadImage("assets/screen3.jpg");
	bg4 = loadImage("assets/screen4.jpg");

}

function setup(){
	createCanvas(1280, 720);
	background(200);
	curRoom = 0;
	angleMode(DEGREES);


}

function draw(){
	if(curRoom == 0){
		firstRoom();

	}
	else if (curRoom == 1){
		secondRoom();

	}
	else if(curRoom == 2){
		thirdRoom();
	}
	else if(curRoom == 3){
		fourthRoom();
	}
	else{
		console.log("I don't know where I am. Something went wrong");
	}
	roomsVisited[lastRoom] = true;
	//console.log(roomsVisited);
	if(roomsVisited[curRoom] == false){
		newRoom();
	}
}



function createChar(x,y,size){

	var eyeHeight;
	var blinking;
	

	size = size || 1 // making size an optional argument

	//making the eyes follow the mouse cursor
	eyePos = map(mouseX, x - 100, x + 100, -25, 25, true);
	eyePos = constrain(eyePos, -25, 25);
	//making the eyes blink
	


	eyeHeight = 15;
	

	
	// moving/resizing the character
	push();
	noStroke();	
	translate(x,y);
	scale(size);
	

	//drawing the main body
	fill(255,255,0);	
	ellipse(0,-10, 100,140);
	ellipse(0,+10, 100, 100 );

	// drawing the "eyescreen"
	fill(0);
	rectMode(CENTER);
	rect(0,0,100,20);

	
	stroke(150);
	strokeWeight(5);
	for(var i = 0; i == 10 ; i ++){
		line(-50, i * 10, 50, i*10);
		console.log(i)
	}



	// drawing the eyes
	fill(0,200,255);
	noStroke();
	ellipse(eyePos - 15,0,15,eyeHeight);
	ellipse(eyePos + 15,0,15,eyeHeight);

	pop();



}

function createMoveButton(x, y, dest, angle){

	angle = angle || 0

	push();
	translate(x, y);
	rotate(angle);
	stroke(1)
	fill(0,200,255);
	ellipse(0,0, 50, 50);
	fill(0);
	triangle(0, -13, 10, 10, -10, 10)
	pop();

	if(mouseIsPressed && dist(mouseX, mouseY, x, y) < 25){
		console.log("Moving to new room");
		lastRoom = curRoom;
		curRoom = dest;
	}
}

function createInfoButton(x, y, infoText){

	textAlign(CENTER);

	if(dist(mouseX, mouseY, x, y) < 50){
		textAlign(LEFT);
		textSize(20);
		strokeWeight(2);
		fill(0, 200, 255);
		text(infoText, x+40, y+15);
	} 

	
	push();
	translate(x, y);
	stroke(1)
	fill(0,200,255);
	ellipse(0,0, 50, 50);
	fill(0);
	textAlign(CENTER);
	textSize(40)
	text("?", 0,15)
		pop();
}
	
function newRoom(){
	stroke(1);
	fill(0,200,255);
	ellipse(100,100, 50, 50);
	fill(0);
	textAlign(CENTER);
	textSize(50);
	text("!", 100,120);
	fill(255);
	strokeWeight(1);
	stroke(0);
	if(dist(mouseX, mouseY, 100, 100) < 50){
		textAlign(LEFT);
		textSize(25)
		text("I haven't been here before", 150, 120);
	}
}

// creating functions for each room/area


function firstRoom(){
	background(bg1);
	createChar(480, 650);
	createInfoButton(480, 450, "Oh boy, my first real mission! I hope I find something cool!")
	createMoveButton(772, 400, 1, 0);
}

function secondRoom(){
	background(bg2);
	createChar(300, 420, 0.6);
	createInfoButton(300, 150, "I didn't know they had computers here! I wish I could say hi.")
	createMoveButton(100, 650, 0, 225);
	createMoveButton(1200, 650, 2, 135);

}

function thirdRoom(){
	background(bg3);
	createChar(300, 650);
	createInfoButton(680, 330, "I don't understand these drawings, but they must be important.")
	createInfoButton(590, 550, "It seems to be a power source of some kind.")
	createMoveButton(100, 550, 1, 270);
	createMoveButton(1000, 650, 3, 180);
}

function fourthRoom(){
	background(bg4);
	createInfoButton(350, 240, "Scans show that this refrigeration unit is full of bio-matter");
	createInfoButton(725, 300, "This thing just started beeping. Is it gonna explode?")
	createChar(830, 575, 0.8);
	createMoveButton(56, 670, 2, 270);
}