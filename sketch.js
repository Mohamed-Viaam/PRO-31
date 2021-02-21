const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var world, engine;
var drops = [];
var maxDrops = 100;
var umbrella;
var l1, l2, l3, l4;
var backImg;

function preload(){
    backImg = loadImage("images/background.jpg");
    l1 = loadImage("images/thunderbolt/1.png");
    l2 = loadImage("images/thunderbolt/2.png");
    l3 = loadImage("images/thunderbolt/3.png");
    l4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(1000, 850);
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(250, 550, 350)
    for(var i = 0; i < maxDrops; i++){
        drops.push(new Drop(random(0, 1000), random(0, 850)));
    }
}

function draw(){
    background(backImg);
    Engine.update(engine);

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].updateDrops();
    }

    umbrella.display();
    lightning();

    drawSprites();
} 

function lightning(){
    if(frameCount % 60 === 0){
        var thunder = createSprite(random(50, 450), 100, 100, 100);
        num = Math.round(random(1,4));
        switch(num) {
            case 1: thunder.addImage(l1);
                    break;
            case 2: thunder.addImage(l2);
                    break;
            case 3: thunder.addImage(l3);
                    break;
            case 4: thunder.addImage(l4);
                    break;
            default: break;
        }
        thunder.lifetime = 10;
        thunder.scale = 0.5;
    }
}