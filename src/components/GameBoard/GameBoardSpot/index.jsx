import React, { PropTypes } from 'react';
import classNames from 'classnames';

import GameBoardPlayer from '../GameBoardPlayer';

export default function GameBoardSpot({ index, player, activePlayer, onSpotClick }) {
  const cxRect = {
    'game-spot-group': true,
    'spot-occupied': player,
  };

  const playerPin = player ?
    <GameBoardPlayer player={player} /> :
    <GameBoardPlayer player={activePlayer} />;

  return (
    <g
      className={classNames(cxRect)}
      onClick={() => onSpotClick(activePlayer)}
    >
      <rect className="game-spot" />
      {playerPin}
    </g>
  );
}

GameBoardSpot.propTypes = {
  index: PropTypes.number.isRequired,
  player: PropTypes.string,
  activePlayer: PropTypes.string.isRequired,
  onSpotClick: PropTypes.func,
};
