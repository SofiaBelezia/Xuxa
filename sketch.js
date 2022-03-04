const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world
var ball
var chao
var radius=40

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction  : 0,
		density : 1.2
	}


	ball=Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)


	chao=new solo(width/2,670,width,20)
	left=new solo(1100,600,20,120)
	right=new solo(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  

ellipse(ball.position.x, ball.position.y, radius,radius)

chao.display()
left.display()
right.display()

}


function keyPressed(){
	if(keyCode===38){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}
