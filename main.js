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
  createCanvas(960, 540); // matches the size of the background images
  game.setup();
}

function draw() {
  game.draw();
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";

class Background {
  constructor() {
    // this.stillImages = [
    //   loadImage("./assets/background/desert/9 Background.png"),
    //   loadImage("./assets/background/desert/8 Stars.png"),
    //   loadImage("./assets/background/desert/8 Stars2.png"),
    //   loadImage("./assets/background/desert/6 Sun.png"),
    //   loadImage("./assets/background/desert/7 Clouds.png"),
    //   loadImage("./assets/background/desert/7 Clouds2.png"),
    //   loadImage("./assets/background/desert/5 Mountains.png")
    // ];

    this.movingImages = [
      {
        source: loadImage("./assets/background/desert/9 Background.png"),
        x: 0,
        speed: 0
      },

      {
        source: loadImage("./assets/background/desert/8 Stars.png"),
        x: 0,
        speed: 0.05
      },

      {
        source: loadImage("./assets/background/desert/8 Stars2.png"),
        x: 0,
        speed: 0.06
      },

      {
        source: loadImage("./assets/background/desert/6 Sun.png"),
        x: 0,
        speed: 0
      },

      {
        source: loadImage("./assets/background/desert/7 Clouds.png"),
        x: 0,
        speed: 0.1
      },

      {
        source: loadImage("./assets/background/desert/7 Clouds2.png"),
        x: 0,
        speed: 0.2
      },

      {
        source: loadImage("./assets/background/desert/5 Mountains.png"),
        x: 0,
        speed: 0.3
      },

      {
        source: loadImage("./assets/background/desert/Layer-4.png"),
        x: 0,
        speed: 0.8
      },
      {
        source: loadImage("./assets/background/desert/Layer-3.png"),
        x: 0,
        speed: 1.5
      },
      {
        source: loadImage("./assets/background/desert/Layer-2.png"),
        x: 0,
        speed: 2
      },
      {
        source: loadImage("./assets/background/desert/Layer-1.png"),
        x: 0,
        speed: 3
      }
    ];
  }

  move(img) {
    image(img.source, img.x, 0, img.source.width, img.source.height);
    image(img.source, img.x + width, 0, img.source.width, img.source.height);

    img.x -= img.speed;
    if (img.x <= -width) {
      img.x = 0;
    }
  }

  draw() {
    // for (const stillImg of this.stillImages) {
    //   image(stillImg, 0, 0, stillImg.width, stillImg.height);
    // }

    for (let i = 0; i < this.movingImages.length; i++) {
      this.move(this.movingImages[i]);
    }
  }
}
