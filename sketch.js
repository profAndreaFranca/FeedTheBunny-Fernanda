const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(200,690,600,20,{isStatic:true})
  World.add(world,ground)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, 600,20)
   
}




