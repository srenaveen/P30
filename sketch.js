var ground,b1,b2,b3,b4,b5,c1,c2,c3,c4,c5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(150,200,300,10);
	b1 = new Paper(50,400,50);
	b2 = new Paper(100,400,50);
	b3 = new Paper(150,400,50);
	b4 = new Paper(200,400,50);
	b5 = new Paper(250,400,50);
	c1 = new Constraint(b1.body,ground.body);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  c1.display();
 
}



