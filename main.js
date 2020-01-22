function keyPressed() {
  if (keyCode === 32) {
    // space key pressed
    game.player.jump();
  }
}

class Game {
  constructor() {
    this.score = 0;
    this.level = 1;
    this.lives = 3;
    console.log("Game constructor");
    // create empty array for the collectibles
    this.collectibles = [];
    // create empty array for the coins
    this.coinFrames = [];
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    // load the carrot image:
    this.carrotImage = loadImage("assets/collectibles/carrot.png");
    // load the grass image:
    this.grassImage = loadImage("assets/collectibles/grass.png");
    // load the sunglasses image:
    this.shadesImage = loadImage("assets/collectibles/shades.gif");
    // load the heart symbol for the lives:
    this.livesImage = loadImage("assets/collectibles/heart.png");
    // load the cactus image:
    this.cactusImage = loadImage("assets/obstacles/cactus.png");
    // load the tumbleweed image:
    this.tumbleweedImage = loadImage("assets/obstacles/tumbleweed.gif");
    // load all the coin images
    for (let i = 0; i < 5; i++) {
      this.coinFrames.push(loadImage("assets/coins/tile00" + i + ".png"));
    }
  }

  draw() {
    // draw the background, collectibles and player
    // draw the background
    this.background.draw();

    // create a new collectible every 2 seconds:
    if (frameCount % 120 === 0) {
      let collectible;
      let random = Math.random();
      if (random < 0.4) {
        collectible = new Coin();
      } else if (random < 0.65) {
        collectible = new Carrot();
      } else if (random < 0.85) {
        collectible = new Grass();
      } else {
        collectible = new Shades();
      }
      this.collectibles.push(collectible);
    }

    // if the player doesn't collide with the collectibles, remove them from the collectibles array after they have left the canvas
    this.collectibles = this.collectibles.filter(
      function(obstacle) {
        if (
          !obstacle.collides(this.player) &&
          obstacle.x + obstacle.width >= 0
        ) {
          return true;
        }
      }.bind(this)
    );

    // draw the collectibles
    this.collectibles.forEach(function(collectible) {
      collectible.draw();
    });

    // draw the player
    this.player.draw();

    // define GAME OVER here:
    // if (this.lives === 0) {
    //   textSize(80);
    //   text(`GAME OVER`, 180, 200);
    //   text("Press space to restart");
    //   noLoop();
    // }
  }

  setup() {
    this.player.setup();
  }
}

const game = new Game();

function preload() {
  console.log("Preload");
  game.init();
  scoreFont = loadFont("assets/fonts/PressStart2P-vaV7.ttf");
}

function setup() {
  // create the canvas (width, height)
  createCanvas(960, 540); // matches the size of the background images
  game.setup();
}

function draw() {
  game.draw();
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
