import React from 'react';
import { browserHistory } from 'react-router';

export default () => {
  return (
    <div>
      <button type='button' className='btn btn-lg btn-primary'onClick={() => browserHistory.push('/games')}>Games list</button>
      <button type='button' className='btn btn-lg btn-primary'onClick={() => browserHistory.push('/game')}>New game</button>
    </div>
  );
};
