class Player {
  constructor() {
    this.img = loadImage("assets/player/llama.gif");
    this.imgJumping = loadImage("assets/player/llama-mid-air.gif");
    // this.imgSunglasses = loadImage("assets/player/llama-shades.gif"); // still needs to be added to draw function when needed
    // this.imgSunglassesJumping = loadImage("assets/player/llama-shades-mid-air.gif"); // still needs to be added to draw function when needed

    // add physics for the jumps
    this.velocity = 0;
    this.gravity = 0.4;
    this.jumpCount = 0;
  }

  setup() {
    // player size
    this.height = this.img.height;
    this.width = this.img.width;

    // fix position of player on canvas
    this.x = 200;
    this.y = height - this.height;
    // make player stay on ground:
    this.originY = this.y;
  }

  draw() {
    this.velocity += this.gravity; // over time, the velocity increases
    this.y += this.velocity; // if the velocity is a positive number, y will increment (player falls), if the velocity is a negative number, y will decrement (player rises)
    //
    if (this.y >= this.originY) {
      this.y = this.originY;
      this.jumpCount = 0;
    }
    // comment out rect to remove white box
    // rect(this.x, this.y, this.width, this.height);
    if (this.jumpCount === 0) {
      image(this.img, this.x, this.y, this.width, this.height);
    }
    if (this.jumpCount > 0) {
      image(this.imgJumping, this.x, this.y, this.width, this.height);
    }
  }

  jump() {
    if (this.jumpCount < 2) {
      // start velocity
      this.velocity = -12;
      this.jumpCount += 1;
    }
  }
}
