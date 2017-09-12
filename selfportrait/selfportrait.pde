size(256,256);

noStroke();


color skin = color(247 ,245,227); 
fill(skin);
rect(64, 64, 128, 128); //my face/head

color glasses = color(21, 6, 93); //dark blue, looks black at 1st glance like my real glasses
color lenses = color(219, 250, 255); //light blue for glasses lenses
strokeWeight(3);
stroke(glasses); //setting fill and stroke
fill(lenses); 

//drawing my glasses
rect(60, 110, 50, 25); 
rect(144, 110, 50,25);
line(110, 114, 144, 114);

color hair = color(147, 99, 8);
color outline = color(206, 204, 189);

//drawing the nose
stroke(outline);
strokeWeight(2);
fill(skin);
rect(115, 118, 24, 32);

//making the eyebrows
stroke(hair);
strokeWeight(3);
line(66, 104, 100, 104);
line(154, 104, 188, 104);

//making the hair
fill(hair);
rect(62, 62, 130, 30);

//making my mouth
color mouth = color(191, 19, 22);
fill(mouth);
noStroke();
rect(100, 160, 52, 10);

//time for the neck

fill(skin);
rect(90, 192, 76, 64);

// just need a shirt in my favorite color, orange
fill(255, 70, 0);
rect(32, 224, 192, 32);
//That's all, folks!