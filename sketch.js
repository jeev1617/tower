const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var stand;
var slingshot1;
var polygon1;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  polygon1=new Polygon(100,320); 

  ground1=new Ground(600,595,1200,30);
  stand=new Ground(450,450,300,15);

  block1=new Block(360,415,30,40);
  block2=new Block(390,415,30,40);
  block3=new Block(420,415,30,40);
  block4=new Block(450,415,30,40);
  block5=new Block(480,415,30,40);
  block6=new Block(510,415,30,40);
  block7=new Block(540,415,30,40);
  block8=new Block(390,375,30,40);
  block9=new Block(420,375,30,40);
  block10=new Block(450,375,30,40);
  block11=new Block(480,375,30,40);
  block12=new Block(510,375,30,40);
  block13=new Block(420,335,30,40);
  block14=new Block(450,335,30,40);
  block15=new Block(480,335,30,40);
  block16=new Block(450,295,30,40);

  slingshot1=new SlingShot(polygon1.body,{x:100,y:300});
}

function draw() {
  Engine.update(engine);
  background(0); 

 ground1.display();
 stand.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 slingshot1.display();
 polygon1.display();
 
}


function mouseDragged(){

Matter.Body.setPosition(polygon1.body,{x: mouseX,y: mouseY});

}
function mouseReleased(){
  slingshot1.detatch();
}