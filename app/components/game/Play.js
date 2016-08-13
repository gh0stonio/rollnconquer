import React, { PropTypes } from 'react';

const Play = ({ game }) => {
  return (
    <div>Game {game.name}</div>
  );
};

Play.propTypes = {
  game: PropTypes.object.isRequired
};

export default Play;
