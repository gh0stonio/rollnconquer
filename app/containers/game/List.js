import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { GameList } from '../../components';
import { updateGamesList, joinGame } from '../../actions';

class ListContainer extends Component {
  componentWillMount () {
    this.props.socket.on('games_list', function (games) {
      this.props.updateGamesList(games);
    }.bind(this));
    this.props.socket.emit('get_games_list');
  }
  render () {
    const { games, joinGame } = this.props;

    return <GameList games={games} joinGame={joinGame} />;
  }
}

const mapStateToProps = (state) => {
  return {
    socket: state.app.get('socket'),
    games: state.app.get('games')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGamesList: (games) => { dispatch(updateGamesList(games)); },
    joinGame: (gameName) => { dispatch(joinGame(gameName)); browserHistory.push('/play'); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
