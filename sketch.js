var form;
var app;
var bgImg
var gameState=0

function preload(){
  bgImg = loadImage("bg.png")
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);

  app = new App();
  //game.getState();
  app.start();
}


function draw(){
  if(gameState===1){
    background("blue");
 
  }
 if(gameState===2){
     
   background("red");
 
 }
}
