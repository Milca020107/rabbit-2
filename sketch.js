var garden,rabbit,apple,orangeL,redL;
var gardenImg, appleImg, rabbitImg,carrotImg,orangeImg,redImg;
var PLAY=1;
var END=0;
var gameState=1;
var appleG, orangeLG, redLG;
var score;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
//Mover fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityX = 4;


//crear sprite rabbit 
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleG=new Group();
orangeLG=new Group();
redLG=new Group();
score=0;

}

function draw() {
  text("Puntuación: "+ score, 500,50);
  if(gameState===PLAY){
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(garden.x > 210 ){
  garden.x = height/2;
  }
  if (appleG.isTouching(rabbit)) {
    appleG.destroyEach();
    score=score+1;
  }
    if(redLG.isTouching(rabbit)||orangeLG.isTouching(rabbit)) {
      gameState=END;

  }
  }

  if(gameState===END){
    appleG.destroyEach();
   orangeLG.destroyEach();
    redLG.destroyEach();
    
    appleG.setVelocityYEach(0);
    orangeLG.setVelocityYEach(0);
    redLG.setVelocityYEach(0);
    garden.velocityX=0;
    textSize(40);
    text("Game Over");


  }

drawSprites();
   
  
var rand1 =  Math.round(random(1,3));
console.log(rand1);

var rand2 = Math.random(random(1,3));
console.log(rand2);

var rand3 = Math.round(1,3);
console.log(rand3);

var rand4 = Math.round(random(1,3));
console.log(rand4);

  
  if (frameCount % 50 == 0) {
     if (rand1 == 1) {
       createApples();
     } else if (rand1 == 2) {
       createOrange();
     }else {
       createRed();
     }
   }

   if (frameCount % 80 == 0) {
     if (rand2 == 1) {
       createApples();
     } else if (rand2 == 2) {
       createOrange();
     }
   }

   if (frameCount / 80 == 0) {
     if (rand3 == 1) {
      createApples();
     } else if (rand3 == 2) {
       createOrange();
     }else {
       createRed();
     }
   }

   if (frameCount % 80 == 0) {
     if (rand4 == 1) {
       createApples();
     } else if (rand4 == 2) {
       createOrange();
     }else {
       createRed();
     }
   }



}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
appleG.add(apple);
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
orangeLG.add(orangeL);
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
  redLG.add(redL);
}
