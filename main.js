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
  }

  init() {
    this.background = new Background();
    this.player = new Player();
  }

  draw() {
    this.background.draw();
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
