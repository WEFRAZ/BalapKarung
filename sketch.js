let pemain1, pemain2;
let img,imgpemain1, imgpemain2;
let music, jump,fn;

function preload() {
  imgpemain1 = loadImage("pe.png");
  imgpemain2 = loadImage("pe.png");
  img = loadImage("la.jpeg");
  music = loadSound("bc.mp3");
  jump=loadSound("jump.mp3");
  fn=loadSound("tepuk.mp3");
}

function setup() {
  createCanvas(600, 400);

  pemain1 = new pemain(30, 230, "pemain1");
  pemain2 = new pemain(30, height - 90, "pemain2");
  
  music.play()
}

function draw() {
  image(img, 0, 0, width, height);

  pemain1.tampilkan();
  pemain2.tampilkan();

  pemain1.cekfinish();
  pemain2.cekfinish();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pemain1.maju();
    jump.play()
  } 
  
  else if (keyCode === RIGHT_ARROW) {
    pemain2.maju();
    jump.play()
  }
}
