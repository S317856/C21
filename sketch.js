var rectangeS, rectangleM, rectangleS2, rectangleStill1, rectangleStill2, rectangleStill3;

function setup() {
  createCanvas(800,400);
  rectangleS=createSprite(400, 100, 100, 50);
  rectangleS.shapeColor="red"
  rectangleS.velocityY=2;
  rectangleM=createSprite(200,200,50,100);
  rectangleM.shapeColor="blue";
  rectangleS2=createSprite(400,400,50,100);
  rectangleS2.shapeColor="yellow";
  rectangleS2.velocityY=-3;
  rectangleStill1=createSprite(300,50,100);
  rectangleStill1.shapeColor="green";
  rectangleStill2=createSprite(550,350,50,100);
  rectangleStill2.shapeColor="pink";
  rectangleStill3=createSprite(650,300,50,100);
  rectangleStill3.shapeColor="purple";
}

function draw() {
  background(255,255,255);  
  rectangleM.x=mouseX;
  rectangleM.y=mouseY;


if (isTouching(rectangleM, rectangleStill1)){
  rectangleM.shapeColor="green";
  rectangleStill1.shapeColor="orange";
}

else 
{
  rectangleM.shapeColor="blue";
  rectangleStill1.shapeColor="green";
}

bounceOff(rectangleS, rectangleS2)


  drawSprites();
}

