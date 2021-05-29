var fixedRect, movingRect,gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 =createSprite(100,100,50,50);
  gameobject2= createSprite(200,100,50,50);
  gameobject3= createSprite(300,100,50,50);
  gameobject4= createSprite(400,100,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(gameobject1, movingRect)){
    movingRect.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
  }

  
  drawSprites();
}

