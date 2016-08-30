import mapGenerator from 'map-gen';

const playerColors = {
  1: 'red',
  2: 'green',
  3: 'orange',
  4: 'blue'
};

export default class Board {
  constructor ({ width = 10, height = 10, hexagonSize = 15, useDistortion = false, useCompactShapes = false }) {
    this.config = {
      width,
      height,
      hexagonSize,
      useDistortion,
      useCompactShapes
    };

    this.map = this._generateMap();
  }
  _generateMap () {
    function getRandomIntInclusive (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let map = mapGenerator.generateMap(this.config);

    map.regions = map.regions.map((region) => {
      region.color = playerColors[getRandomIntInclusive(1, 4)];
      region.dices = getRandomIntInclusive(3, 6);
      return region;
    });

    return map;
  }
}
