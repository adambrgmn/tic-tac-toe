import React, { PropTypes } from 'react';

export default function GameBoardPlayer({ player }) {
  if (player.toLowerCase() === 'o') {
    return (
      <g className="game-playerO">
        <circle className="game-playerO-circle" cx="70" cy="70" r="10" />
      </g>
    );
  }

  return (
    <g className="game-playerX">
      <line className="game-playerX-line" x1="80" y1="60" x2="60" y2="80" />
      <line className="game-playerX-line" x1="80" y1="80" x2="60" y2="60" />
    </g>
  );
}

GameBoardPlayer.propTypes = {
  player: PropTypes.string.isRequired,
};
