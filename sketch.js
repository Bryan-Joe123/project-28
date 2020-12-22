
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	boyImage=loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1000, 700);

	boy=createSprite(200,650);
	boy.addImage(boyImage);
	boy.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	tree1=new tree(700,400);

	mango1=new mango(700,300,50);

	stone1=new stone(150,625);
	sling1=new slingShot(stone1.body,{x:150,y:600});

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(40, 131, 235));
  
  drawSprites();

  sling1.display();
  stone1.display();
 
  mango1.display();

  detectollision(stone1.body,mango1.body);
}

function mouseDragged() {
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    sling1.fly();
}

function detectollision(lstone, lmango){
	mangoBodyPosition = lmango.position;
	stoneBodyPosition = lstone.position;
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	console.log(distance);
	if(distance<= lmango.height){
		Matter.Body.setStatic (lmango.body,false)	
	}
}