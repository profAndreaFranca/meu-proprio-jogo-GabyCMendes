var canvas;
var backgroundImage;
var game, form, player;
var gameState = 0;
var tempo = 0;
var cidade, cidadeImg;

function preload() {
  backgroundImage = loadImage("./assets/quarto.jpg");
  cidadeImg = loadImage("./assets/cidade.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game();
  cidade = createSprite(width / 2, height / 2);
  cidade.addImage(cidadeImg);
  cidade.scale = 1.4;
  game.start();
}

function draw() {
  background(backgroundImage);
  if (gameState == 1) {
    console.log("gameState 1")
    game.play();
    //background(220)
  }
  if (gameState == 0) {
    console.log("gameState 0")
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
