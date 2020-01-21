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
    // create empty array for the obstacles
    this.obstacles = [];
  }

  init() {
    this.background = new Background();
    this.player = new Player();
  }

  draw() {
    // draw the background, obstacles and player
    // draw the background
    this.background.draw();

    // create a new obstacle every 2 seconds:
    if (frameCount % 120 === 0) {
      this.obstacles.push(new Obstacle());
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

    // draw the obstacles
    this.obstacles.forEach(function(obstacle) {
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
