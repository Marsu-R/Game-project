class Obstacle {
  constructor() {
    // size of the obstacle on canvas
    this.width = 50;
    this.height = 50;

    this.x = width;
    // place the obstacles randomly across the y axis on the canvas; random() is a p5 function that accepts a range
    this.y = random(100, height - this.height);
    // create counter for the obstacles
    this.counter = 0;
  }

  draw() {
    this.x -= 4;
    // comment out rect to remove white boxes of obstacles
    rect(this.x, this.y, this.width, this.height);
  }

  image() {
    //
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
