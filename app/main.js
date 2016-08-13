import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
import { App, Home, GamesList, GameCreation, GameItem } from './components';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' preserveScrollTop={false} />
  </DockMonitor>
);

const reducer = combineReducers({...reducers, routing: routerReducer});
const store = createStore(reducer, DevTools.instrument());
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='games' component={GamesList} />
          <Route path='game' component={GameCreation} />
          <Route path='game/:id' component={GameItem} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('container')
);
