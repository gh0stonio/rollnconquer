import React, { PropTypes } from 'react';

const Play = ({ game, onRegionClick }) => {
  return (
    <div>
      <h1>Game {game.name}</h1>
      <div className='hexagon-wrapper'>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width={game.map.board.width} height={game.map.board.height}>
          {game.map.board.regions.map((region, key) => {
            return <path id={'region_' + region.ID} d={region.pathString} key={key} fill={region.color} stroke='#333' onClick={() => onRegionClick(region.ID)} />;
          })}
        </svg>
      </div>
    </div>
  );
};

Play.propTypes = {
  game: PropTypes.object.isRequired,
  onRegionClick: PropTypes.func.isRequired
};

export default Play;
