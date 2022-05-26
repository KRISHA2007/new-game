const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var sling
//var gamestate = rest
function preload() {
  backgroundImg= loadImage("./assets/background1.jpg")
  windmillImg= loadImage("./assets/windmill.png")
  rockImg = loadImage("./assets/rock.png")
  slingleftImg= loadImage("./assets/slingl.png")
  slingrightImg= loadImage("./assets/slingr.png")
  ropeSound = loadSound("./assets/ropeSound.mp4")


}

function setup() {

  canvas = createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  

block1 = new Block(700,450,120,20, PI/2)
block2 = new Block(900,450,120,20, PI/2)
block3 = new Block(800,385,250,20, PI)


block4 = new Block(750,375,100,20, PI/2)
block5 = new Block(850,375,100,20, PI/2)
block6 = new Block(800,250,200,20, PI)

bottle1 =new Bottle (800,240,60,80)
bottle2 =new Bottle (730,240,60,80)
bottle3 =new Bottle (840,240,60,80)


bottle4 =new Bottle (740,370,60,80)
bottle5 =new Bottle (860,370,60,80)

ground = new Ground(500,510,2000,20);

ball = new Ball(200,500)

sling= new Slingshot(ball.body, {x:192,y:400})

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  push()
  imageMode(CENTER)
  image(windmillImg, 500, 300, 400, 500);
  image(rockImg,790,480,100,100)
  image(slingleftImg,200,440,20,150)
  image(slingrightImg,185,410,20,80)
  
  pop()

  block1.show()
  block2.show()
  block3.show()
  
  block4.show()
  block5.show()
  block6.show()
  
  bottle1.show()
  bottle2.show()
  bottle3.show()
  bottle4.show()
  bottle5.show()
  ball.show()
  sling.show()

  
}

function mouseDragged(){
  //
  Body.setPosition(ball.body, {x: mouseX, y : mouseY})
}

function mouseReleased(){
  //break the slingshot, constraint
  //console.log("HI")
  sling.break()
  ropeSound.play()
}

function keyPressed(){
  if(keyCode  === 32 && ball.body.speed<1){
    Matter.Body.setPosition(ball.body, {x:192,y:400})
    sling.attach(ball.body)
  }
}