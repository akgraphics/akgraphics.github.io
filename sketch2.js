let song;
var VolSlider,SpeedSlider;
var PitchSlider
function preload() {
  // Load a sound file
  song = loadSound('rainbow.wav');
  
}

function setup() {
	

  createCanvas(710, 400);
  VolSlider=createSlider(0,100,5);
  SpeedSlider=createSlider(0,500,100);
  PitchSlider=createSlider(10,100,20);
  VolSlider.position(5,360);
  SpeedSlider.position(180,360);
  PitchSlider.position(360,360);

  // Loop the sound forever
  // (well, at least until stop() is called)
  song.loop();
}

function draw() {
  background('yellow');
	  textSize(15);

  // Set the volume 
  text('Volume',5,350);
    text('Frequency',180,350);
  text('Pitch',380,350);


  let volume = map(VolSlider.value(), 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  song.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  let speed = map(SpeedSlider.value(), PitchSlider.value(), height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);

//song.freq(440);
 
}
