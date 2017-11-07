var notes = [];
var samples = [];
var lineX = 0;
function preload(){

	//audio samples are from the free Sonatina Symphonic Orchestra sound pack available at https://sso.mattiaswestlund.net/

	samples[0] = loadSound("assets/0.wav");
	samples[1] = loadSound("assets/1.wav");
	samples[2] = loadSound("assets/2.wav");
	samples[3] = loadSound("assets/3.wav");
	samples[4] = loadSound("assets/4.wav");
	samples[5] = loadSound("assets/5.wav");
	samples[6] = loadSound("assets/6.wav");
	samples[7] = loadSound("assets/7.wav");
	samples[8] = loadSound("assets/8.wav");
	samples[9] = loadSound("assets/9.wav");
	samples[10] = loadSound("assets/10.wav");
	samples[11] = loadSound("assets/11.wav");
	samples[12] = loadSound("assets/12.wav");

	for(var i=0; i < samples.length; i++){
		samples[i].playMode('restart');
	}

}

function setup(){
	createCanvas(1200, 650);
	//frameRate(120);
	//playMode(RESTART);
}

function draw(){
	background(200);
	stroke(0);
	for(var i = 0; i<13; i++){
			line(0, (i)*50, width,(i)*50)
		}

	for(var i = 0; i < notes.length; i++){
		notes[i].display();
		if(dist(lineX, 0, notes[i].x, 0) < 3 ){
			notes[i].play();
	}
	}

	stroke(0, 0, 255);
	line(lineX, 0, lineX, height);
	if(lineX == width){
		lineX = 0;
	}
	else {
		lineX  += 3;
		//console.log(lineX);
	}


}

function Note(xPos, yPos, type){

	this.x = xPos
	this.y = yPos
	//this.inst =
	this.note =  int(this.y / 50)
	this.display = function(){
		ellipse(this.x, this.y, 20, 20);
	}
	this.play = function(){
		console.log("playing note " + this.note)
		samples[this.note].play();

	}
	
	
};

function mouseClicked(){

		var instType = 0;
		var pitch = int(mouseY / 50);
		var newNote = new Note(mouseX, mouseY, 0);
		notes.push(newNote);
		newNote.play();
		console.log("new note " + pitch);
}	

function keyTyped(){
	if(key == "Z"){
		notes.pop();
		console.log("deleting note")
	}
}