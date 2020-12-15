
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stoneCons, distance1, ground1;
var tree1, stone1, boySprite, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, boyImage, treeImage, boyBody;

function preload()
{
	boyImage=loadImage("boy.png");
	treeImage=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);
	/*boySprite=createSprite(120,450,10,10);*/
	boySprite=createSprite(500,460,10,10);
	boySprite.addImage(boyImage);
	boySprite.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	/*tree1 = new tree(500, 300, 10, 10);
	mango1 = new mango(450, 250, 10, 10);
	mango2 = new mango(500, 250, 10, 10);
	mango3 = new mango(450, 300, 10, 10);
	mango4 = new mango(530, 190, 10, 10);
	mango5 = new mango(470, 200, 10, 10);
	mango6 = new mango(550, 180, 10, 10);
	stone1 = new stone(60,370,10,10);

	boyBody = Bodies.circle(120 , 430 , 10 , {restitution:0, isStatic:true});
	World.add(world, boyBody);

	stoneCons = new throws(stone1.body,{x:60,y:370});
	*/
	tree1 = new tree(120, 300, 10, 10);
	mango1 = new mango(95, 190, 10, 10);
	mango2 = new mango(120, 190, 10, 10);
	mango3 = new mango(75, 200, 10, 10);
	mango4 = new mango(150, 170, 10, 10);
	mango5 = new mango(90, 165, 10, 10);
	mango6 = new mango(170, 160, 10, 10);
	mango7 = new mango(180, 225, 10, 10);
	mango8 = new mango(170, 210, 10, 10);
	stone1 = new stone(440,400,10,10);
	ground1 = new Ground(width/2, 530, 700, 30);

	boyBody = Bodies.circle(500 , 460 , 10 , {restitution:0, isStatic:true});
	World.add(world, boyBody);

	stoneCons = new throws(stone1.body,{x:440,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  boySprite.x= boyBody.position.x;
  boySprite.y= boyBody.position.y;
  drawSprites();
  stone1.display();
  
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  ground1.display();
  //stoneCons.display();
  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
	//console.log(100);
}


function mouseReleased(){
	stoneCons.fly();
	//console.log(200);
}

function detectCollision (lstone, lmango) {
var mangobodyposition=lmango.body.position;
var stonebodyposition=lstone.body.position;

distance1= dist(stonebodyposition.x, stonebodyposition.y, mangobodyposition.x, mangobodyposition.y);
//console.log(distance1);
if (distance1 <= lmango.radius+lstone.radius){
	Matter.Body.setStatic(lmango.body, false);
	//console.log(300);
}
}

function keyPressed () {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone1.body, {x:60, y:370});
		stoneCons.attach(stone1.body);
	}
}