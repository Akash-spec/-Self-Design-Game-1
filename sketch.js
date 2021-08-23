var cactus, cactus_img, bg, bg_sprite, bottle, bottle_img, drink, drink_img, treasure, treasure_img 

var jake, jake_img, rock, rock_img

var energy = 100;

function preload ()
{

cactus_img = loadImage("Images/cactus.png");
bg = loadImage("Images/desert.png");
bottle_img = loadImage("Images/water bottle.png");
drink_img = loadImage("Images/energy drink.png");
treasure_img = loadImage("Images/treasure.png");
jake_img = loadAnimation("Images/jake1.png", "Images/jake2.png", "Images/jake3.png", "Images/jake4.png", "Images/jake5.png");
rock_img = loadImage("Images/rock.png");

}

function setup () 
{

createCanvas(1600,800)

bg_sprite = createSprite(800,400,400,600);
bg_sprite.addImage(bg);
bg_sprite.velocityY = 2;


jake = createSprite(800,600);
jake.addAnimation("jakerunning", jake_img);



}


function draw () 
{

background(0)

if (bg_sprite.y > 400){
bg_sprite.y = 200;
}

if (keyDown("a")) 
{
jake.x = jake.x - 2;
}

if (keyDown("d")) 
{
jake.x = jake.x +  2;
}

createBottle();

drawSprites();




textSize(25);
fill("LightBlue");
text("Energy Level" + energy, 1200,20 );




}

function createBottle ()
{

if (frameCount%200 === 0)
{

bottle = createSprite(800,200)
bottle.addImage(bottle_img);
bottle.velocityY = 2;
bottle.scale = 0.2;
bottle.x = random(500,1000);

}



}










































