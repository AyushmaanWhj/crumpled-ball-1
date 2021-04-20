
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  

	ball=new Paper(200,100,50)
	ground=new Ground(300,300,800,20)
}


function draw() {
  background(0);

  ball.display()
  ground.display()
  
  drawSprites();
 
}



