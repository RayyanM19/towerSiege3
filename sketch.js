const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var ground;
var stand1, stand2;
var launcher;
var polygon, polygonImage;
var chain;
var score = 0;
var bgImg;

function preload(){
    polygonImage = loadImage("polygon.png");
    getTime();
}

function setup(){
    createCanvas(1300,570);
    engine = Engine.create();
    world = engine.world;
    
    
    ground = new Ground(640,565,1280,10); 
    stand1 = new Ground(620,420,350,10); 
    stand2 = new Ground(1015,200,280,10); 
    block1 = new Block(500,390,40,50); 
    block2 = new Block(540,390,40,50); 
    block3 = new Block(580,390,40,50); 
    block4 = new Block(620,390,40,50); 
    block5 = new Block(660,390,40,50); 
    block6 = new Block(700,390,40,50); 
    block7 = new Block(740,390,40,50); 
    block8 = new Block(540,340,40,50); 
    block9 = new Block(580,340,40,50);
    block10 = new Block(620,340,40,50); 
    block11 = new Block(660,340,40,50); 
    block12 = new Block(700,340,40,50); 
    block13 = new Block(580,290,40,50); 
    block14 = new Block(620,290,40,50); 
    block15 = new Block(660,290,40,50); 
    block16 = new Block(620,240,40,50);
    block17 = new Block(935,170,40,50); 
    block18 = new Block(975,170,40,50); 
    block19 = new Block(1015,170,40,50); 
    block20 = new Block(1055,170,40,50); 
    block21 = new Block(1095,170,40,50); 
    block22 = new Block(975,120,40,50); 
    block23 = new Block(1015,120,40,50); 
    block24 = new Block(1055,120,40,50); 
    block25 = new Block(1015,70,40,50);

    polygon  = Bodies.circle(50,200,20);
    World.add(world,polygon);

    chain = new Chain(this.polygon,{x:200,y:180});

    
}

function draw(){
    if(bgImg){
       background(bgImg); 
    }
    
    Engine.update(engine);
    noStroke();
    textSize(35);
    fill("red");
    text("Score: "+score,width-350,240);

    ground.display();
    stand1.display();
    stand2.display();
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("skyblue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();    
    fill("turquoise");
    block22.display();
    block23.display();
    block24.display();
    fill("grey");
    block25.display();
    
    chain.display();

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(this.polygon); 
    }
}

async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Europe/London");
    var responsejson = await response.json();
    console.log(responsejson.datetime);
    var datetime = responsejson.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>06 && hour<19){
        bg = "bg.png";
    } else{
        bg = "bg2.png";
    }
    bgImg = loadImage(bg);
}
