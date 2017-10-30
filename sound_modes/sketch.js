var mySound
var soundMode = "restart"
function preload(){
	mySound = loadSound("assets/it-is-a-mystery.mp3");

}

function setup(){

	mySound.playMode("restart");
	mySound.loop(true);
	//mySound.play();

}

function mousePressed(){
		mySound.play();
		mySound.playMode(soundMode)
/*
	if(mySound.isPlaying()){
		mySound.pause();
	}

	else{
		mySound.play();
	}


*/
}

function keyPressed(){
	if(soundMode == "restart"){
		soundMode = "sustain";

	}
	else {
		soundMode = "restart";
	}
	console.log(soundMode)
}