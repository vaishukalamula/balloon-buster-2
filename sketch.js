var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0;
var blueb, redb, greenb, pinkb, arrowGroup
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")

}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  score = 0

  redb = createGroup()
  greenb = createGroup()
  pinkb = createGroup()
  blueb = createGroup()
  arrowGroup = createGroup()
}

function draw() {
 background(0);
 text("Score: "+ score, 200,200)
 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //change the value of the random balloon to 4 
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon==1) {
      redBalloon();
    }
    if (select_balloon==2) {
      greenBalloon();
    }
    if (select_balloon==3) {
      pinkBalloon();
      
    }
    if (select_balloon==4) {
      blueBalloon();
      
    }
 
  
 
  
 
  }
  if (arrowGroup.isTouching(redb)) {
    redb.destroyEach();
    arrowGroup.destroyEach();
    score=score+1
  }
  if (arrowGroup.isTouching(blueb)) {
    blueb.destroyEach();
    arrowGroup.destroyEach();
    score=score+3
  }
  if (arrowGroup.isTouching(pinkb)) {
    pinkb.destroyEach();
    arrowGroup.destroyEach();
    score=score+4
  }
  if (arrowGroup.isTouching(greenb)) {
    greenb.destroyEach();
    arrowGroup.destroyEach();
    score=score+2
  }

  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redb.add(red)
}

function blueBalloon() { 
  var blue = createSprite(0,Math.round(random(20, 370)), 10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.scale = 0.1;
  blue.lifetime = 150;
  blueb.add(blue) 
  }

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10,10);
  green.addImage(blue_balloonImage);
  green.velocityX = 3;
  green.scale = 0.1;
  green.lifetime = 150;
  greenb.add(green)
  }

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10,10);
  pink.addImage(blue_balloonImage);
  pink.velocityX = 3;
  pink.scale = 0.1;
  pink.lifetime = 150;
  pinkb.add(pink)
  }
