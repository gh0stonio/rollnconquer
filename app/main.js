import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
import { App, Home } from './components';
import { GamePlay, GameForm, GameList } from './containers';

const reducer = combineReducers({...reducers, routing: routerReducer});
const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='list' component={GameList} />
          <Route path='create' component={GameForm} />
          <Route path='play' component={GamePlay} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('container')
);
