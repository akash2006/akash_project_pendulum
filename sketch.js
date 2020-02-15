const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine,world;
function setup(){
  var canvas = createCanvas(300,300);
  engine = Engine.create();
  world = engine.world;


  
  log5 = new Log(150,50,200,20);

  ball = new Ball(150,250,50);

  string = new String(ball.body,{x:150,y:50});
  
}

function draw(){
  background("white");
  Engine.update(engine);
  
  text("Drag and release the ball with the mouse",50,20);
  
  log5.display();

  ball.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
