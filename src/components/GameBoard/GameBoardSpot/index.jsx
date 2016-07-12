import React, { PropTypes } from 'react';
import classNames from 'classnames';

import GameBoardPlayer from '../GameBoardPlayer';

export default function GameBoardSpot({ customClassName, index, player }) {
  const cxRect = {
    'game-spot-group': true,
    'spot-occupied': player,
  };
  const activePlayer = 'o';
  const playerPin = player ?
    <GameBoardPlayer player={player} /> :
    <GameBoardPlayer player={activePlayer} />;

  return (
    <g className={classNames(cxRect, customClassName)}>
      <rect className="game-spot" />
      {playerPin}
    </g>
  );
}

GameBoardSpot.propTypes = {
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  index: PropTypes.number.isRequired,
  player: PropTypes.string,
};
