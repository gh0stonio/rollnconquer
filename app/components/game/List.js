import React, { PropTypes } from 'react';

const GameList = ({ games, joinGame }) => {
  return (
    <div>
      <h3>List of games</h3>
      <ul>
        {games.map((game, key) => {
          return <li key={key} onClick={() => joinGame(game.name)}>{game.name} - ({game.totalPlayers}/{game.maxPlayers})</li>;
        })}
      </ul>
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  joinGame: PropTypes.func.isRequired
};

export default GameList;
