
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var bwall,lwall,rwall;
var options={
restitution:0.9
}
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bwall=new Ground(400,680,800,10)
 rwall=new Ground(750,630,10,100)
 lwall=new Ground(600,630,10,100)
 ball=Bodies.circle(75,500,10,options)
 World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("brown");
  bwall.display()
  rwall.display()
  lwall.display()
  ellipse(ball.position.x,ball.position.y,10,10)
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	
}

}


