// console.log("test");

function keyPressed() {
  if (keyCode === 32) {
    // space key pressed
    game.player.jump();
  }
}

class Game {
  constructor() {
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
      let collectible = new Collectible();
      collectible.setup();
      // let somethingToAddToArray
      // let random =Math.random()

      // if (random < 0.5) {
      //let collectible  = new Collectible ();
      //   collectible.setUp()
      //     somethingToAddToArray  = new Collectible;
      // } else {
      //     somethingToAddToArray = new Obstacle()
      // }

      //   this.collectibles.push(somethingToAddToArray);
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
    this.collectibles.forEach(function(obstacle) {
      obstacle.draw();
    });

    // draw the player
    this.player.draw();
  }

  setup() {
    this.player.setup();
  }
}

const game = new Game();

function preload() {
  console.log("Preload");
  game.init();
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
