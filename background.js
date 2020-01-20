class Background {
  constructor() {
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
        speed: 1
      },
      {
        source: loadImage("./assets/background/desert/Layer-2.png"),
        x: 0,
        speed: 1.5
      },
      {
        source: loadImage("./assets/background/desert/Layer-1.png"),
        x: 0,
        speed: 2
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
    for (let i = 0; i < this.movingImages.length; i++) {
      this.move(this.movingImages[i]);
    }
  }
}
