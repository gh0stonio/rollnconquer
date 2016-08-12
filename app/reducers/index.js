/* global io */
import { Map } from 'immutable';

const initialState = new Map({
  socket: io.connect('localhost:3000'),
  title: 'rollnconquer'
});

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
