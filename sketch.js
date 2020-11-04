var boy;
var tree;
var ground1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var stoneObject;
var chain;
var treeImg;
var boyImg;
//var throwObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImg = loadImage("pictures/boy.png");
	treeImg = loadImage("pictures/tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  mango1 = new Mango(750,320,3,3);
  mango2 = new Mango(750,320,3,3);
  mango3 = new Mango(750,320,3,3);
  mango4 = new Mango(750,320,3,3);
  mango5 = new Mango(750,320,3,3);
  mango6 = new Mango(750,320,3,3);
  mango7 = new Mango(750,320,3,3);
  mango8 = new Mango(750,320,3,3);
  mango9 = new Mango(750,320,3,3);
  mango10 = new Mango(750,320,3,3);
  


  ground1 = new Ground (600,680,1200,20);

  stoneObject = new Stone (200,200,20);
  
  //throwObject = new Throw (bodyA,bodyB);

  chain = new Throw (stoneObject.body,{x:140,y:400});

  tree = createSprite (1000,400)
  tree.addImage(treeImg)
  tree.scale = 0.45;

  boy = createSprite (150,600)
  boy.addImage(boyImg)
  boy.scale = 0.1;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  ground1.display();

  stoneObject.display();

  //chain.display();

  //throwObject.display();

  detectollision(stoneObject,mango1);
  detectollision(stoneObject,mango2);
  detectollision(stoneObject,mango3);
  detectollision(stoneObject,mango4);
  detectollision(stoneObject,mango5);
  detectollision(stoneObject,mango6);
  detectollision(stoneObject,mango7);
  detectollision(stoneObject,mango8);
  detectollision(stoneObject,mango9);
  detectollision(stoneObject,mango10);
  

}
function keyPressed ()  {
	if (keyCode===32)  {
		Matter.Body.setPosition(stoneObject.body,{x:235,y:420})
		throwObject.attach(stoneObject.body);
	}
}

function detectollision (lstone,lmango)  {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

var distance = dist (stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)  {
      Matter.Body.setStatic(lmango.body,false)
  }
}


