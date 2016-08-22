import Map from './Map';

export default class Game {
  constructor ({ name }) {
    this.name = name;
    this.totalPlayers = 1;
    this.maxPlayers = 5;

    this.map = new Map({});
  }
  addNewPlayer () {
    this.totalPlayers++;
  }
}
