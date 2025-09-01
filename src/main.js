import k from "./ctx";
import startGame from "./scenes/start";
import game from "./scenes/game";

k.loadSprite("chemic-bg", "images/chemical-bg.png");
k.loadSprite("platform", "images/platforms.png");
k.loadSprite("character", "images/sonic.png", {
  sliceX: 8,
  sliceY: 2,
  anims: {
    run: { from: 0, to: 7, loop: true, speed: 30 },
    jump: { from: 8, to: 15, loop: true, speed: 100 },
  },
});
k.loadSprite("ring", "images/ring.png", {
  sliceX: 16,
  sliceY: 1,
  anims: {
    spin: { from: 0, to: 15, loop: true, speed: 30 },
  },
});

k.loadSprite("motobug","images/motobug.png",{
    sliceX:5,
    sliceY:1,
    anims:{
        run:{from:0,to:4,loop:true,speed:8}
    }
});
k.loadFont("mania","fonts/mania.ttf")
k.scene("start", startGame);
k.scene("game", game);

k.go("start");
