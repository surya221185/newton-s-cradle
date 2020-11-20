
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ball,ball1,ball2,ball3;
var rope1,rope2,rope3,rope;
var box;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(500, 200, 80, 80);
	ball1 = new Ball(450, 200, 80, 80);
	ball2 = new Ball(400, 200, 80, 80);
	ball3 = new Ball(350, 200, 80, 80);
	rope = new Rope(ball.body, { x: 500, y: 50 });
	rope1 = new Rope(ball1.body, { x: 450, y: 50 });
	rope2 = new Rope(ball2.body, { x: 400, y: 50 });
	rope3 = new Rope(ball3.body, { x: 350, y: 50 });
	box=new Box(425,50,400,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  ball.display();
  rope.display();

  ball1.display();
  rope1.display();

  ball2.display();
  rope2.display();

  ball3.display();
  rope3.display();

  box.display();

  drawSprites();
 
}
function mouseDragged() {
	Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
  


