const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var snowflake

function setup() {
  createCanvas(700,400);
  engine = Engine.create();
  world = engine.world
  snowflake = new Snow()
}

function preload() {
  bg = loadImage("snow3.jpg")
}

function draw() {
  background(bg);
  Engine.update(engine)
  drawSprites();
 
  if (frameCount%80 === 0) {
    snowflake.display();
  }
}