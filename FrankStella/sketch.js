var rectFill = 115
var rectStroke = (59,36,42)

var rectSize = 490

function setup(){
createCanvas(600, 600);
rectMode(CENTER);
background(255);
	strokeWeight(10);
	stroke(0,0,0);
	fill(255)
	rect(300, 300, 510, 510);
	strokeRed = 77;
	strokeGreen = 55;
	strokeBlue = 57;

	
for(var i = 0; i < 11; i ++){

	fill(rectFill);
		stroke(strokeRed,strokeGreen, strokeBlue);
		rect(300, 300, rectSize, rectSize);
		rectFill += 10
		
		rectSize -= 45
		console.log(i)
		// ALL THE IF STATEMENTS!
		if(i==0){
			strokeRed = 190;
			strokeGreen = 69;
			strokeBlue = 60;
		}

		else if(i==1){
			strokeRed = 210;
			strokeGreen = 74;
			strokeBlue = 60;
		}

		else if(i==2){
			strokeRed = 211;
			strokeGreen = 87;
			strokeBlue = 53;
		}

		else if(i==3){
			strokeRed = 234;
			strokeGreen = 168;
			strokeBlue = 72;
		}

		else if(i==4){
			strokeRed = 244;
			strokeGreen = 212;
			strokeBlue = 41;
		}
		else if(i==5){
			strokeRed = 214;
			strokeGreen = 199;
			strokeBlue = 18;
		}

		else if(i==6){
			strokeRed = 81;
			strokeGreen = 133;
			strokeBlue = 84;
		}

		else if(i==7){
			strokeRed = 20;
			strokeGreen = 44;
			strokeBlue = 70;
		}

		else if(i==8){
			strokeRed = 30;
			strokeGreen = 49;
			strokeBlue = 115;

		}

		else if(i==9){
			strokeRed = 55;
			strokeGreen = 58;
			strokeBlue = 99;
		}


		


		

	}

	stroke(43,41,54)
	rect(300,300,3,3);
}

