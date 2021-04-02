const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var farmer;
var tree;
var bird;
var house;
var stone;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (0,650,2500,10);
	farmer = new Farmer (0,0,300,150);
	tree = new Tree (0,0,300,300);
	bird = new Bird (0,0,50,50);
	house = new House(0,0,150,300);
	stone = new Stone(100,600,30,30);
	chain = new SlingShot(stone.body,{x:100,y:600})
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  textSize(20);
  fill("black");
  text("help the farmer to scare away the birds from his farm",100,30);
  textSize(20);
  fill("black");
  text("if the stone flies from near the bird it will vanish",100,130);
  ground.display();
  farmer.display();
  tree.display();
  bird.display();
  house.display();
  stone.display();
  chain.display();
  detectColission(bird,stone);
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})    
	}
	
	function mouseReleased(){
	chain.fly();        
	}

	function keyPressed(){
		if(keyCode === 32){
	   Matter.Body.setPosition(stone.body, {x:100,y:600});
	   chain.attach(stone.body);	 
		}		
	   }

		function detectColission(b,s){
			stoneposition = stone.body.position
			birdposition = bird.body.position
			var distance = dist(stoneposition.x,stoneposition.y,birdposition.x,birdposition.y)
			if(distance<=stone.width/2+bird.width/2)
			{
			//Matter.Body.setStatic(bird.body)
			World.remove(world,bird.body);
                    push();
                    bird.Visibility=bird.Visibility-5;
                    tint(255,bird.Visibility)
                    image(bird.image,0,0,50,50);
                    pop();
					}
		}