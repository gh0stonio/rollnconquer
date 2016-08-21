/* global io */
import { Map } from 'immutable';
import { CREATE_GAME, JOIN_GAME, UPDATE_CURRENT_GAME, UPDATE_GAMES_LIST } from '../actions';

const initialState = new Map({
  socket: io.connect('localhost:3000'),
  game: {
    map: {
      regions: []
    }
  },
  games: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GAME: {
      state.get('socket').emit('create_game', action.config);
      return state;
    }
    case JOIN_GAME: {
      if (state.get('game').name !== action.gameName) {
        state.get('socket').emit('join_game', action.gameName);
      }

      return state;
    }
    case UPDATE_CURRENT_GAME: {
      return state.set('game', action.game);
    }
    case UPDATE_GAMES_LIST: {
      return state.set('games', action.games);
    }
    default: {
      return state;
    }
  }
};
