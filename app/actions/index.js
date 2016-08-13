export const CREATE_GAME = 'CREATE_GAME';
export const JOIN_GAME = 'JOIN_GAME';
export const UPDATE_GAMES_LIST = 'UPDATE_GAMES_LIST';
export const UPDATE_CURRENT_GAME = 'UPDATE_CURRENT_GAME';

export function createGame (config) {
  return { type: CREATE_GAME, config };
}

export function joinGame (gameName) {
  return { type: JOIN_GAME, gameName };
}

export function updateCurrentGame (game) {
  return { type: UPDATE_CURRENT_GAME, game };
}

export function updateGamesList (games) {
  return { type: UPDATE_GAMES_LIST, games };
}
