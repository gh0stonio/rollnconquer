export default class Player {
  constructor () {
    this.currentGame = null;
  }
  joinGame (game) {
    this.currentGame = game;
  }
  getCurrentGame () {
    return this.currentGame;
  }
}
