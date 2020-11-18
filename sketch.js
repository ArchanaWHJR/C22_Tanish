//name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var object;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
object = Bodies.rectangle(100,50,20,100);
World.add(world,object);
console.log(object);
}

function draw() {
  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER) ;
  rect(200,200,100,20);
rect (object.position.x,object.position.y,20,100)

}