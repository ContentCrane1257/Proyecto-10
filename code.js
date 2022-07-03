var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["07b33213-7d7e-4e08-a40f-1888c473b132","37cd8a4f-8b6d-41b9-9f5b-ba6f08939585","c473c6f2-957a-4b07-9dc3-8749ca1a30e5","675e1e55-9509-4158-8481-895d1b40a5aa"],"propsByKey":{"07b33213-7d7e-4e08-a40f-1888c473b132":{"name":"Ext1","sourceUrl":null,"frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":12,"version":"KoLwGLIzKaVuPzw8rVs_arPxig66rwLI","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/07b33213-7d7e-4e08-a40f-1888c473b132.png"},"37cd8a4f-8b6d-41b9-9f5b-ba6f08939585":{"name":"Ext2","sourceUrl":null,"frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":12,"version":"ezJw7p4sAPr2MzUugmNeJP3MqF1Mew07","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/37cd8a4f-8b6d-41b9-9f5b-ba6f08939585.png"},"c473c6f2-957a-4b07-9dc3-8749ca1a30e5":{"name":"Ext3","sourceUrl":null,"frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":12,"version":"7YUh5WZqFxYDn6R0pxb.bju_xozce.wR","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/c473c6f2-957a-4b07-9dc3-8749ca1a30e5.png"},"675e1e55-9509-4158-8481-895d1b40a5aa":{"name":"bolita espacial","sourceUrl":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"NLtwV2Syoag9LPwdF8r91wCF6jRKYq07","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var porteriaA = createSprite (200,10,130,20);
var porteriaB = createSprite (200,390,130,20);
var porteria = createSprite (200,10,110,20);
var porteria2 = createSprite (200,390,110,20);
var sprite1 = createSprite(200, 370, 10 , 70);
var sprite2 = createSprite(200, 25, 10, 70); 
var sprite3 = createSprite (200, 200, 10, 10);

var puntos1 = 0
var puntos2 = 0
var gamestate = "inicio"

porteria.shapeColor = "black" 
porteria2.shapeColor = "black" 

sprite3.setAnimation("bolita espacial");
sprite3.scale = 0.1
sprite1.setAnimation("Ext1");
sprite1.scale = 0.1
sprite2.setAnimation("Ext2");
sprite2.scale = 0.1

function draw() {
  background("white")
  
  if (gamestate == "inicio"){
    sprite3.x = 200
    sprite3.y = 200
    sprite2.x = 200
    sprite2.y = 25
    sprite1.x = 200
    sprite1.y = 370
    
  textSize(17)
  fill("black");
  text("Presiona ESPACIO para empezar",90,150)
  
  if (keyDown("space")) {
  sprite3.velocityX = 4
  sprite3.velocityY = -5
  
  sprite1.velocityX = 6
  
  gamestate = "play"
  }
  }
  
  if (sprite3.isTouching(sprite1)) {
  playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3", false);
  }
  if (sprite3.isTouching(sprite2)) {
  playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3", false);
  } 
  
  for (var num = 0; num < 400; num = num+20) {
   line (num,200,num+10,200);}
  
  if (gamestate == "play"){
textSize (16);
fill ("black");
  text("Jugador:"+ puntos2,20, 195);
fill ("black");
  text("Computadora:"+ puntos1,20,215);

if (sprite3.isTouching(porteria)){
puntos1 = puntos1+1
playSound("assets/category_accent/puzzle_game_accent_a_02.mp3",false);
}
if(sprite3.isTouching(porteria2)){
  puntos2 = puntos2+1
playSound("assets/category_accent/puzzle_game_accent_a_02.mp3",false);
}

if (keyDown("a")) {
  sprite2.x = sprite2.x - 10;
}
if (keyDown("d")) {
  sprite2.x = sprite2.x + 10
}

    createEdgeSprites();
    sprite3.bounceOff(sprite1);
    sprite3.bounceOff(sprite2);
    sprite3.bounceOff(rightEdge)
    sprite3.bounceOff(leftEdge)
    sprite3.bounceOff(topEdge)
    sprite3.bounceOff(bottomEdge)
    sprite3.bounceOff(porteriaA)
    sprite3.bounceOff(porteriaB)

sprite1.bounceOff(rightEdge);
sprite1.bounceOff(leftEdge);

sprite2.bounceOff(rightEdge);
sprite2.bounceOff(leftEdge)
 
if (puntos1 === 5|| puntos2 === 5){
gamestate = "final"
}
}

if (gamestate == "final"){
  textSize(50)
  fill ("black")
  text("¡Fin del juego!", 40, 200) 
  textSize(20)
  fill ("black")
  text("Presion R para reiniciar", 80, 240)
  
if (puntos1 === 5||puntos1 === 4||puntos1 ===3||puntos1 === 2||puntos1 ===1){
puntos1 = 0
}
if (puntos2 === 5||puntos2 === 4||puntos2 ===3||puntos2 === 2||puntos2 ===1){
puntos2 = 0
}
  if (keyDown("r")){
   gamestate = "inicio"  
  }
}
  drawSprites()
}
 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
