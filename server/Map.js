import mapGenerator from 'map-gen';

const playerColors = {
  1: 'red',
  2: 'green',
  3: 'orange',
  4: 'blue'
};

export default class Map {
  constructor ({ width = 10, height = 10, hexagonSize = 15, useDistortion = false, useCompactShapes = false }) {
    this.config = {
      width,
      height,
      hexagonSize,
      useDistortion,
      useCompactShapes
    };

    this.board = this._generate();
  }
  _generate () {
    function getRandomIntInclusive (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let board = mapGenerator.generateMap(this.config);

    board.regions = board.regions.map((region) => {
      region.color = playerColors[getRandomIntInclusive(1, 4)];
      return region;
    });

    return board;
  }
}
