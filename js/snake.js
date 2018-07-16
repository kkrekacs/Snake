class Snake {
  constructor(length, tiles) {
    this.length = length;
    this.tiles = tiles;
    this.direction = 1;
    this.pos = 0;
    this.body = [];

    this.generateSnake();
    this.startWatch();
    this.watchKeys();
  }

  startWatch() {
    var self = this;
    setInterval(function () {
      self.move();
    }, 1000);
  }

  move() {
    switch (this.direction) {
    case 0:
      this.body.unshift(this.body[0] - Math.sqrt(this.tiles.length));
      this.tiles[this.body.pop()].setEmpty();
      break;
    case 1:
      this.body.unshift(this.body[0] + 1);
      this.tiles[this.body.pop()].setEmpty();
      break;
    case 2:
      this.body.unshift(this.body[0] + Math.sqrt(this.tiles.length));
      this.tiles[this.body.pop()].setEmpty();
      break;
    case 3:
      this.body.unshift(this.body[0] - 1);
      this.tiles[this.body.pop()].setEmpty();
    default:
    }

    for (var i = 0; i < this.body.length; i++) {
      this.tiles[this.body[i]].setSnake();
    }
  }

  generateSnake() {
    this.pos = this.tiles.length / 2 + this.length;
    for (var i = 0; i < this.length; i++) {
      this.tiles[this.pos - i].setSnake();
      this.body.push(this.pos - i);
    }
  }

  watchKeys() {
    var self = this;
    document.body.addEventListener('keydown', function (ev) {
      ev.preventDefault();
      switch (ev.keyCode) {
      case 38:
        if (self.direction !== 2) {
          self.direction = 0;
        }
        break;
      case 39:
        if (self.direction !== 3) {
          self.direction = 1;
        }
        break;
      case 40:
        if (self.direction !== 0) {
          self.direction = 2;
        }
        break;
      case 41:
        if (self.direction !== 1) {
          self.direction = 3;
        }
        break;
      default: self.direction = self.direction;
      }
      console.log(self.direction);
    });
  }
}
