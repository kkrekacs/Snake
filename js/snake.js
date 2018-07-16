class Snake {
  constructor(length, tiles) {
    this.length = length;
    this.tiles = tiles;
    this.direction = 'right';

    this.generateSnake();
  }

  generateSnake() {
    var startIndex = this.tiles.length / 2 + this.length;
    for (var i = 0; i < this.length; i++) {
      this.tiles[startIndex - i].setSnake();
    }
  }
}
