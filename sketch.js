var caminho,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
caminho=createSprite(200,200)
caminho.addImage(pathImg)
caminho.velocityY=4
caminho.scale=1.2



//Criando menino que corre 
boy=createSprite(180,340,30,30)
boy.scale=0.08
boy.addAnimation("meninocorrendo",boyImg)


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(410,0,100,800)
rightBoundary.visible=false
}


function draw() {
background(0);
caminho.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.x=World.mouseX
edges=createEdgeSprites()
boy.collide(leftBoundary)
boy.collide(rightBoundary)

 //Reiniciar o fundo
 if(caminho.y>400){
     caminho.y=height/2
 }



 drawSprites();

 }




