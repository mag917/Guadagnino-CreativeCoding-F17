import themidibus.*; //importing the library
import javax.sound.midi.MidiMessage; 

MidiBus myBus; 

//int circleX = 0;
//int currentVel = 0;
int midiDevice  = 0;
IntList notes;

void setup() {
  notes = new IntList(); //creating a list of integers for the notes that are being played
  size(650, 500);
  MidiBus.list(); 
  myBus = new MidiBus(this, midiDevice, 1); 
  background(0);
}

void draw() {
  background(0);
   noStroke();
   fill(40);
  for(int i = 0; i < 12; i++){
    for(int j = 0; j < 9; j++){
      ellipse(i*50 + 50, j * 50 + 50, 45, 45);
    }
  }
  fill(0, 100, 255);
  
  for(int i = 0; i < notes.size(); i++){
    int curNote = notes.get(i);
    int noteRange = curNote % 12; // value from 0-11, corresponding to the musical notes C - B
    int octave = curNote / 12; 
    
    if (curNote > 0){
      ellipse(noteRange * 50 + 50, octave * 50 + 50, 40, 40);
    }
  }
  
  
}

//midi handling code modified from the instructable "Scripting Processing With MIDI" by Neurogami
//http://www.instructables.com/id/Scripting-Processing-with-MIDI/
void midiMessage(MidiMessage message, long timestamp, String bus_name) { 
  int note = (int)(message.getMessage()[1] & 0xFF) ;
  int vel = (int)(message.getMessage()[2] & 0xFF);

 println("Bus " + bus_name + ": Note "+ note + ", vel " + vel);
  if (vel > 0 ) {
   notes.append(note);
   
  }
  else if(vel == 0){
    for(int i = 0; i < notes.size(); i++){
      int curNote = notes.get(i);
      if (curNote == note){
        notes.remove(i);
      }
    }
  
  }
}