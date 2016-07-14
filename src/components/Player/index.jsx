import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Player({ player, inverted }) {
  const cx = {
    'game-playerO-circle': player === 'o',
    'game-playerX-line': player === 'x',
    inverted,
  };

  if (player.toLowerCase() === 'o') {
    return (
      <g className="game-playerO">
        <circle className={classNames(cx)} cx="70" cy="70" r="10" />
      </g>
    );
  }

  return (
    <g className="game-playerX">
      <line className={classNames(cx)} x1="80" y1="60" x2="60" y2="80" />
      <line className={classNames(cx)} x1="80" y1="80" x2="60" y2="60" />
    </g>
  );
}

Player.propTypes = {
  player: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
};
