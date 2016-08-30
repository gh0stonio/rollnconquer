import Board from './Board';

export default class Game {
  constructor ({ name }) {
    this.name = name;
    this.totalPlayers = 1;
    this.maxPlayers = 5;

    this.board = new Board({});
  }
  addNewPlayer () {
    this.totalPlayers++;
  }
}
