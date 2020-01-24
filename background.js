class Background {
  constructor() {
    this.movingImages = [
      // load all layers and set the speed
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
        speed: 1
      },
      {
        source: loadImage("./assets/background/desert/Layer-3.png"),
        x: 0,
        speed: 1.8
      },
      {
        source: loadImage("./assets/background/desert/Layer-2.png"),
        x: 0,
        speed: 2.5
      },
      {
        source: loadImage("./assets/background/desert/Layer-1.png"),
        x: 0,
        speed: 3.3
      }
    ];
  }

  // move function to move the background layers
  move(img) {
    // show background twice to move it over the canvas before resetting it to x = 0
    image(img.source, img.x, 0, img.source.width, img.source.height);
    image(img.source, img.x + width, 0, img.source.width, img.source.height);

    img.x -= img.speed;
    // when the background has moved out of the canvas, set it back to 0 and to repeat from the beginning, creating an infinite background loop
    if (img.x <= -width) {
      img.x = 0;
    }
  }

  draw() {
    // draw the background layers
    for (let i = 0; i < this.movingImages.length; i++) {
      this.move(this.movingImages[i]);
      // speed up background and obstacles every 30 seconds
      if (frameCount % 1800 === 0) {
        this.movingImages[i].speed *= 2;
        Cactus.x *= 10;
        Tumbleweed.x *= 10;
      }
    }
    textSize(20);
    textFont(scoreFont);
    textStyle(BOLD);
    text(`Level: ${game.level}`, 10, 25);
    text(`Score: ${game.score}`, 10, 50);
    text(`Highscore: ${highscore}`, 650, 25);
    image(game.livesImage, 10, 50);
    text(`${game.lives}`, 50, 80);
    image(game.shadesSymbol, 0, 80);
    text(`${game.shadesCount}`, 80, 110);
  }
}
