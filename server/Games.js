export default class Games {
  constructor () {
    this._list = [];
  }
  add (game) {
    this._list.push(game);
  }
  findByName (name) {
    return this._list.find((game) => {
      return game.name === name;
    });
  }
  getAll () {
    return this._list;
  }
}
