class Collectible {
  constructor() {
    // size of the item on canvas
    this.width = 60;
    this.height = 60;

    this.x = width;
    // place the items randomly across the y axis on the canvas; random() is a p5 function that accepts a range
    this.y = random(100, height - this.height - 70);
    // create counter for the coin items
    this.counter = 0;
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
    // console.log(game);
    game.score += this.collisionVal();
    return true;
  }

  collisionVal() {
    return this.score;
  }
}

class Carrot extends Collectible {
  constructor() {
    super(width, height);
    this.score = 40;
  }

  draw() {
    this.x -= 4;

    image(game.carrotImage, this.x, this.y, this.width, this.height);
  }

  // collision check for sound
  collides(obj) {
    const isColliding = super.collides(obj);
    if (isColliding === true) {
      // if it collides
      game.carrotSound.play(); // play the sound
    }
    return isColliding;
  }
}

class Grass extends Collectible {
  constructor() {
    super(); // leave the super empty because the item needs a different size
    this.score = 30;
    // Make them bigger than the parent class:
    this.width = 110;
    this.height = 110;
  }

  draw() {
    this.x -= 4;
    image(game.grassImage, this.x, this.y, this.width, this.height);
  }

  // collision check for sound
  collides(obj) {
    // check for collision
    const isColliding = super.collides(obj);
    if (isColliding === true) {
      // if it collides
      game.grassSound.play(); // play the sound
    }
    return isColliding;
  }
}

class Shades extends Collectible {
  constructor() {
    super(); // leave the super empty because the item needs a different size
    this.score = 100;
    // make item bigger than the parent class:
    this.width = 160;
    this.height = 160;
  }

  draw() {
    this.x -= 4;
    image(game.shadesImage, this.x, this.y, this.width, this.height);
  }

  collides(obj) {
    // check for collision
    const isColliding = super.collides(obj);
    if (isColliding === true) {
      // if it collides
      game.player.sunglasses = true; // the sunglasses state is true
      game.sunglassesSound.play(); // play the sound
      game.shadesCount += 1; // add 1 to the shades count
      // earn 1 life for each 7 shades collected:
      if (game.shadesCount % 7 === 0) {
        game.lives += 1;
      }
      // set timeout to 5s
      setTimeout(function() {
        game.player.sunglasses = false;
      }, 5000);
      push();
      textSize(20);
      fill(255, 255, 255);
      text(`Uh yeah!`, this.x, this.y);
      pop();
    }

    return isColliding;
  }
}

class Coin extends Collectible {
  constructor() {
    super(width, height);
    this.score = 20;
  }

  draw() {
    this.x -= 4;
    if (frameCount % 6 === 0) {
      this.counter = (this.counter + 1) % game.coinFrames.length;
    }
    let thisImage = game.coinFrames[this.counter];

    image(thisImage, this.x, this.y, this.width, this.height);
  }

  // collision check for sound
  collides(obj) {
    const isColliding = super.collides(obj);
    if (isColliding === true) {
      // if it collides
      game.coinSound.play(); // play the sound
    }
    return isColliding;
  }
}
