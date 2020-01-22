class Obstacle {
  constructor() {
    // size of the item on canvas
    this.width = 70;
    this.height = 70;

    this.x = width;
    // place the items at the bottom across the y axis on the canvas;
    this.y = height - this.height;
    // create counter for the coin items
    // this.counter = 0;
  }

  collides(obj) {
    // check if object collides with self
    // self completely to the left || completely to the right
    if (this.x + this.width < obj.x || obj.x + obj.width < this.x) {
      return false;
    }
    // self completely to the top || to the bottom
    if (this.y + this.height < obj.y || obj.y + obj.height < this.y) {
      return false;
    }
    console.log(game);
    noLoop();
    setTimeout(() => {
      game.lives -= this.collisionVal();
      console.log("STUFF");
      textSize(40);
      text(`Ouch!`, 150, 150);
      loop();
    }, 300);
    return true;
  }

  collisionVal() {
    return this.lives;
  }
}

class Cactus extends Obstacle {
  constructor() {
    super(width, height);
    this.lives = 1;
  }

  draw() {
    this.x -= 4;

    image(game.cactusImage, this.x, this.y, this.width, this.height);
  }
}

class Tumbleweed extends Obstacle {
  constructor() {
    super(); // leave super empty because the item needs a different size
    this.lives = 1;
    // make the item smaller than the parent class:
    this.width = 50;
    this.height = 50;
    // make sure the item still appears on the bottom of the canvas cause the size has changed:
    this.y = height - this.height;
  }

  draw() {
    this.x -= 4;

    image(game.tumbleweedImage, this.x, this.y, this.width, this.height);
  }
}
