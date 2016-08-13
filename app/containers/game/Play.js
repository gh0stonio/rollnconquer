import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { GamePlay } from '../../components';
import { updateCurrentGame } from '../../actions';

class PlayContainer extends Component {
  componentWillMount () {
    this.props.socket.on('current_game', function (game) {
      if (!game) {
        return browserHistory.push('/');
      }

      this.props.dispatch(updateCurrentGame(game));
    }.bind(this));
    this.props.socket.emit('get_current_game');
  }
  render () {
    const { game } = this.props;
    return <GamePlay game={game} />;
  }
}

const mapStateToProps = (state) => {
  return {
    socket: state.app.get('socket'),
    game: state.app.get('game')
  };
};

export default connect(mapStateToProps)(PlayContainer);
