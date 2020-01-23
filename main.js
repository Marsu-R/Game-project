let gameStart = false;
let paused = false;
let gameOver = false;
let highscore;

// check for existing highscore
if (localStorage.getItem("highscore")) {
  highscore = localStorage.getItem("highscore");
} else {
  highscore = 0; // if no existing highscore, set it to 0
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode === 32) {
    // space key pressed --> player jumps
    game.player.jump();
  }
  // toggle the gameStart variable by pressing SPACE at start ---------------
  if (gameStart === false && keyCode === 32) {
    gameStart = true;
    game.sound.play();
  }
  // -----------------------------------------------
  if (keyCode === 13) {
    if (game.gameOver) {
      document.location.reload();
      // preload();
      // draw();
      // setup();
      // game.reset();
    } else {
      paused = !paused;
      if (paused) {
        game.sound.pause();
        noLoop();
      } else {
        loop();
        game.sound.play();
      }
    }
  }
}

class Game {
  constructor() {
    this.score = 0;
    this.level = 1;
    this.lives = 3;
    // this.gameOver = false;
    console.log("Game constructor");
    // create empty array for the collectibles:
    this.collectibles = [];
    // create empty array for the coins:
    this.coinFrames = [];
    // create empty array for the obstacles:
    this.obstacles = [];
  }

  init() {
    this.background = new Background();
    this.sound = loadSound(
      "assets/sounds/2019-01-10_-_Land_of_8_Bits_-_Stephen_Bennett_-_FesliyanStudios.com.mp3"
    );
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

  // reset() {
  //   this.score = 0;
  //   this.level = 1;
  //   this.lives = 3;
  //   this.gameOver = false;
  // }

  draw() {
    // draw the background, collectibles, obstacles, player, and scores
    // draw the background
    this.background.draw();

    // if the current score is higher than the highscore, store it as new highscore
    if (this.score > highscore) {
      localStorage.setItem("highscore", this.score);
      highscore = this.score;
    }

    //------------------------------------------------------------------------------
    // Draw start screen:
    if (gameStart === false) {
      push();
      textSize(30);
      textAlign(CENTER);
      text("Press SPACE to start", 480, 270);
      pop();
    }
    //------------------------------------------------------------------------------

    // create a new collectible every 1.5 seconds:
    if (gameStart === true && frameCount % 90 === 0) {
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
      function(collectible) {
        if (
          !collectible.collides(this.player) &&
          collectible.x + collectible.width >= 0
        ) {
          return true;
        }
      }.bind(this)
    );

    // draw the collectibles:
    this.collectibles.forEach(function(collectible) {
      collectible.draw();
    });

    // create a new obstacle every 2.75 seconds:
    if (gameStart === true && frameCount % 175 === 0) {
      let obstacle;
      let random = Math.random();
      if (random < 0.5) {
        obstacle = new Cactus();
      } else {
        obstacle = new Tumbleweed();
      }
      this.obstacles.push(obstacle);
    }

    // if the player doesn't collide with the obstacles, remove them from the obstacles array after they have left the canvas
    this.obstacles = this.obstacles.filter(
      function(obstacle) {
        if (
          !obstacle.collides(this.player) &&
          obstacle.x + obstacle.width >= 0
        ) {
          return true;
        }
      }.bind(this)
    );

    // draw the obstacles:
    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });

    // draw the player
    this.player.draw();

    // text for paused state
    if (paused === true) {
      textSize(30);
      text("Press ENTER to resume", 160, 200);
    }

    // define GAME OVER here:
    if (this.lives === 0) {
      textSize(80);
      textAlign(CENTER);
      text(`GAME OVER`, 480, 200);

      textSize(40);
      text("Press ENTER to restart", 480, 260);
      this.gameOver = true;
      game.sound.stop();
      noLoop();
    }
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
