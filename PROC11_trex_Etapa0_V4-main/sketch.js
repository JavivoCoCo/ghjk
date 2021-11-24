
var trex ,trex_running;   //._.
var piso, piso_inv, piso_piso;//._.

function preload(){
  
  trex_running = loadAnimation('trex1.png', 'trex3.png', 'trex4.png')
  piso_piso = loadImage('ground2.png')
//._.
}       //._.
 //                                                                           ._.
function setup(){         //._.
  createCanvas(600,200)
  
  //variables         ._.
  trex = createSprite(50, 180, 20, 50)
  piso = createSprite(200, 180, 400, 20)
  piso_inv = createSprite(200, 193, 400, 20)
  trex.addAnimation('running', trex_running)      //      ._.  ._.
  piso.addImage('pso', piso_piso)
  trex.scale = 0.3;
  piso.scale = 0.5;
  piso.velocityX =-4;
  piso_inv.visible = false;
}//._.
//._.
function draw(){        //._.
  background("white")//._. 
  // SALTO
  //if 
  if(keyDown('space') || keyDown('up') ) {
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY + 0.8

  // evitar caida
  trex.collide(piso_inv); //._.

  if(piso.x<0){
    piso.x = piso.width/2
  }

  drawSprites()  

}
