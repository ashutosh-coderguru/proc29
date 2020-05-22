const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  drawSprites();
  Engine.update(engine);
  strokeWeight(4);
  ground = new Ground(400,height,800,20);
  platform = new Ground(150, 305, 300, 170);
  //level one 
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  block9 = new Block(390,1555,30,40);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:100,y:200});
}


function draw() {
  background(255,255,255);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  polygon.display();
  platform.display();
  slingshot.display();    

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body);
  }
}
