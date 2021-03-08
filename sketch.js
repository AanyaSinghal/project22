var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png","starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
    engine = Engine.create();
	world = engine.world;
   // fairyVoice.play();

	fairy = createSprite(500, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(600,100,10,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	starBody = Bodies.circle(700,100,20 , { isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine)
  
  star.x = starBody.position.x;
  star.y = starBody.position.y;
  
  edges = createEdgeSprites();
  fairy.bounceOff(edges);
  
  if(keyWentDown(RIGHT_ARROW)) {
	fairy.velocityX = 3;
    //fairy.velocityY = 0;
  }
  if(keyWentDown(LEFT_ARROW)) {
    fairy.velocityX = -3;
    //fairy.velocityY = 0;
  }
 
 if(star.y > 470 && starBody.position.y > 470){
	 Matter.Body.setStatic(starBody,true);
 }
 
  drawSprites();

}

function keyPressed() {
	//write code here
	
	if(keyCode === DOWN_ARRPW){
	
		Body.setStatic(starBody,false)
	
	}
}
