import React, { Component } from 'react';
import { connect } from 'react-redux';

// Containers / Components
import DummyContainer from '../containers/Dummy';

class App extends Component {
  render () {
    return (
      <div>
        <DummyContainer />
      </div>
    );
  }
}

export default connect()(App);
