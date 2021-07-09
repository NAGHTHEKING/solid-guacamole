
var turret,zombie,zombie1,zombie2,zombie3;
var bggif,turretimg,zombieimg;

function preload()
{
	bggif=loadImage("giphy.gif")
	turretimg=loadImage("gun_gif.gif")
	zombieimg=loadImage("zombie1.png")
}

function setup() {
	createCanvas(windowWidth-9,displayHeight-115);

turret=createSprite(displayWidth-100,500)
turret.addImage(turretimg)
turretimg.resize(400,250)

// zombie=createSprite(200,500)
// zombie.addImage(zombieimg)
// zombieimg.resize(200,200)
  
}


function draw() {
  background(bggif);
  turret.y=mouseY;


zombie_go_brrr()
  drawSprites();
 
}


function zombie_go_brrr() {

if(frameCount%50===0){

 zombie=createSprite(200,Math.round(random(70,height-70))+Math.round(random(-30,50)))
 zombie.addImage(zombieimg)
 zombieimg.resize(200,200)
 zombie.velocityX=10;

 if(frameCount%100===0){
	 zombie.y=Math.round(random(Math.round(random(1,65)),height-60))+Math.round(random(-30,50))
 }

}

} 


