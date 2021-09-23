var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var ground2;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
}

function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    ground2=createSprite(200,190,400,10);
    ground2.visible=false;
    avg();
}

function draw() {
    background(220);
    //jump when the space button is pressed
        if (keyDown("space")&& trex.y>=160) {
        trex.velocityY = -10;
    }
 //console.log (trex.y)
    trex.velocityY = trex.velocityY + 0.8

        if (ground.x < 0) {
        ground.x = ground.width / 2;
        }
    trex.collide(ground2);
    drawSprites();
}

var marks = [21,34,67,89,100];
var sum=0;
function avg() {
    for(var i=0; i<marks.length;i++) {
        sum= sum+marks[i]

    }
    var mean=sum/marks.length;
    console.log(sum);
    console.log(mean);
}