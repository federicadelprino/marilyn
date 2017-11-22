var mic;
var volume;

function preload() {
  img = loadImage('./assets/marilyn.jpg');
}

function setup() {
  frameRate(10);
  createCanvas(500, 500);
  background(200);
  mic = new p5.AudioIn();
  mic.start();
  capture = createCapture(VIDEO);
  capture.size(100,100);
  capture.hide();
}

function draw() {
    
    image(img, 0, 0, 500, 500);

  if (keyIsPressed == true) {


    image(capture, 150 , 100, 300, 350 );


  } else {
    image(img, 0, 0, 500, 500);
var myImg = capture.loadPixels();

textFont('Trebuchet');
  fill(255);
  textSize(15);
  text('Bee quiet to see her better... Is it really Marilyn?', 100, 0, 150, 200);
text('PRESS to discover it!', 300, 17, 150, 250);

    for (var i = 0; i < 100; i++) {
      var x = random(width);
      var y = random(height);


      var vol = mic.getLevel();
      var d = map(vol, 0.03, 1, 1, 100);

      noStroke();

      var col = myImg.get(x, y);
      fill(col);

      ellipse(x / 3 + 120, y / 14 * 6 + 150, d*20, d * 2);
    }


  }
}
