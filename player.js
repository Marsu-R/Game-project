class Player {
  constructor() {
    this.img = loadImage("assets/player/llama.gif");
    this.velocity = 0;
    this.gravity = 0.2;
    this.jumpCount = 0;
  }

  setup() {
    this.height = this.img.height * 2.5;
    this.width = this.img.width * 2.5;

    this.x = 200;
    this.y = height - this.height;

    this.originY = this.y;
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= this.originY) {
      this.y = this.originY;
      this.jumpCount = 0;
    }

    image(this.img, this.x, this.y, this.width, this.height);
  }

  jump() {
    if (this.jumpCount < 2) {
      this.velocity = -6;
      this.jumpCount += 1;
    }
  }
}
