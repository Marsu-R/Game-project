// console.log("test");

class Game {
  constructor() {
    console.log("Game constructor");
  }

  init() {
    this.background = new Background();
  }

  draw() {
    this.background.draw();
  }

  setup() {
    //
  }
}

const game = new Game();

function preload() {
  console.log("Preload");
  game.init();
}

function setup() {
  // create the canvas (width, height)
  createCanvas(1920 / 2, 1080 / 2); // matches the size of the background images
  game.setup();
}

function draw() {
  game.draw();
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";

class Background {
  constructor() {
    this.stillImages = [
      loadImage("./assets/background/desert/9 Background.png"),
      loadImage("./assets/background/desert/8 Stars.png"),
      loadImage("./assets/background/desert/8 Stars2.png"),
      loadImage("./assets/background/desert/6 Sun.png"),
      loadImage("./assets/background/desert/7 Clouds.png"),
      loadImage("./assets/background/desert/7 Clouds2.png"),
      loadImage("./assets/background/desert/5 Mountains.png")
    ];

    // this.images = [
    //   {
    //     source: loadImage("./assets/background/Layer-1.png"),
    //     x: 0,
    //     speed: 1
    //   }
    // ];
  }

  move(img) {
    //
  }

  draw() {
    for (const stillImg of this.stillImages) {
      image(stillImg, 0, 0, stillImg.width / 2, stillImg.height / 2);
    }
    // const c = color(174, 222, 203);
    // background(c);
  }
}
