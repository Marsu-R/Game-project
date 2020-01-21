class Collectible {
  constructor() {
    // size of the item on canvas
    this.width = 50;
    this.height = 50;

    this.x = width;
    // place the items randomly across the y axis on the canvas; random() is a p5 function that accepts a range
    this.y = random(100, height - this.height);
    // create counter for the items
    this.counter = 0;
    this.type = "carrot";
  }

  setup() {
    let collectibleType;
    let random = Math.random();
    // console.log(random);
    if (random < 0.5) {
      collectibleType = "coin";
    } else if (random < 0.75) {
      collectibleType = "carrot";
    } else {
      collectibleType = "grass";
    }
    this.type = collectibleType;
  }

  draw() {
    this.x -= 4;
    // comment out rect to remove white boxes of items
    // rect(this.x, this.y, this.width, this.height);

    // every 6 frames, increment the counter (used to access a coin frame) while staying in the boundaries of the coinFrames array
    if (frameCount % 6 === 0) {
      this.counter = (this.counter + 1) % game.coinFrames.length;
    }
    let thisImage;
    if (this.type === "carrot") {
      thisImage = game.carrotImage;
    } else if (this.type === "grass") {
      thisImage = game.grassImage;
    } else if (this.type === "coin") {
      thisImage = game.coinFrames[this.counter];
    }

    image(thisImage, this.x, this.y, this.width, this.height);
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
    return true;
  }
}
