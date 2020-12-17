
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var object;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options={
   isStatic: true
 }
 fill("brown");
object =  Bodies.rectangle(400,390,800,10,options);
World.add(world,object);
noFill();
/*console.log(object);
console.log(object.position.x);*/

var ball_options={
  restitution:1.5,
  friction:0.5,
  density: 1
}
fill("green");
ball = Bodies.circle(200,200,100,ball_options);
World.add(world,ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  var pos = object.position;
  rect(pos.x,pos.y,800,10);
  ellipseMode(RADIUS);
  var ballPos = ball.position
  ellipse(ballPos.x,ballPos.y,100);
  
}