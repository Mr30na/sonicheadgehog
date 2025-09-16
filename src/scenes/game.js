import k from "../ctx";
import { createCharacter } from "../enteties/character";
import { createMob } from "../enteties/mob";
import jumpSound from "../sounds/Jump.wav";
import fuzzSound from "../sounds/Hurt.wav";
import destroySound from "../sounds/Destroy.wav";
import backgroundMusic from "../sounds/OtherworldlyFoe.mp3";
let GAME_SPEED = 100;
let score = 0;
let destroyAudio = new Audio(destroySound)
let jumpAudio = new Audio(jumpSound);
let fuzzAudio = new Audio(fuzzSound);
let themeSong = new Audio(backgroundMusic);

k.setGravity(3200);
export default function game() {
  themeSong = new Audio(backgroundMusic);
  themeSong.play();
  if (!k.getData("best_score")) {
    k.setData("best_score", 0);
  }

  const bgwidth = 1920;
  const bgPieces = [
    k.add([k.sprite("chemic-bg"), k.pos(0, 0), k.scale(2), k.opacity(0.8)]),
    k.add([
      k.sprite("chemic-bg"),
      k.pos(bgwidth * 2, 0),
      k.scale(2),
      k.opacity(0.8),
    ]),
  ];
  let scoreDisplay = k.add([
    k.pos(0, 0),
    k.text(`Score: ${score}`, {
      font: "mania",
      size: 50,
    }),
  ]);

  const platfromWidth = 1280;
  const platforms = [
    k.add(
      [k.sprite("platform"), k.pos(0, 450), k.scale(4)],
      k.body({ isStatic: true }),
      k.area()
    ),
    k.add(
      [k.sprite("platform"), k.pos(platfromWidth * 4, 450), k.scale(4)],
      k.body({ isStatic: true }),
      k.area()
    ),
  ];

  k.add([
    k.pos(0, 832),
    k.opacity(0),
    k.body({ isStatic: true }),
    k.rect(1920, 300),
    "platform",
    k.area(),
  ]);
  let char = createCharacter(k.vec2(200, 745));
  k.loop(20, () => {
    GAME_SPEED += 50;
  });
  const spawnMob = () => {
    const motobug = createMob(k.vec2(1950, 773));
    motobug.onUpdate(() => {
      if (GAME_SPEED < 3000) {
        motobug.move(-(GAME_SPEED + 300), 0);
        return;
      }
      motobug.move(-GAME_SPEED, 0);
    });
    motobug.onExitScreen(() => {
      if (motobug.pos.x < 0) k.destroy(motobug);
    });
    const waitTime = k.rand(0.5, 2.5);
    k.wait(waitTime, spawnMob);
  };
  spawnMob();
  char.play("run");
  k.onUpdate(() => {
    if (bgPieces[1].pos.x < 0) {
      bgPieces[0].moveTo(bgPieces[1].pos.x + bgwidth * 2, 0);
      bgPieces.push(bgPieces.shift());
    }

    bgPieces[0].move(-GAME_SPEED, 0);
    bgPieces[1].moveTo(bgPieces[0].pos.x + bgwidth * 2, 0);

    if (platforms[1].pos.x < 0) {
      platforms[0].moveTo(platforms[1].pos.x + platforms[1].width, 450);
      platforms.push(platforms.shift());
    }

    platforms[0].move(-GAME_SPEED * 10, 0);
    platforms[1].moveTo(platforms[0].pos.x + platforms[1].width * 4, 450);

    char.getAnim("run");
  });

  k.onButtonPress("jump", () => {
    if (char.isGrounded()) {
      jumpAudio.play()
      char.play("jump");
      char.jump(1500);
    }
  });
  char.onCollide("platform", () => {
    char.play("run");
  });
  char.onCollide("enemy", (enemy) => {
    if (char.isGrounded()) {
      if(k.getData("best_score")<score){k.setData("best_score",score)};
      k.setData("current_score",score)
      GAME_SPEED = 100;
      score = 0;
      fuzzAudio.play();
      themeSong.pause()
      k.go("gameover")
    } else {
      destroyAudio.play();
      k.destroy(enemy);
      char.play("jump");
      char.jump(1500);
      score += 10;
      k.destroy(scoreDisplay);
      scoreDisplay = k.add([
        k.pos(0, 0),
        k.text(`Score: ${score}`, {
          font: "mania",
          size: 50,
        }),
      ]);
    }
  });
}
