import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import onSpotClick from '../../../../../../../services/onSpotClick';
import GameBoardPlayer from '../GameBoardPlayer';

export function GameBoardSpot({ index, player, activePlayer, winner, onClick }) {
  const cxRect = {
    'game-spot-group': true,
    'spot-occupied': player,
    'game-ended': winner,
  };

  const playerPin = player ?
    <GameBoardPlayer player={player} /> :
    <GameBoardPlayer player={activePlayer} />;

  return (
    <g
      className={classNames(cxRect)}
      onClick={() => { if (!winner) onClick(activePlayer, index); }}
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
  winner: PropTypes.string,
  onClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activePlayer: state.player,
  winner: state.winner,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: onSpotClick(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoardSpot);
