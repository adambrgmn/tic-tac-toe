import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import GameBoardGroup from '../GameBoardGroup';
import GameBoardPlayer from '../GameBoardPlayer';

export function GameBoardSpot({ index, player, activePlayer }) {
  const cxRect = {
    'game-spot-group': true,
    'spot-occupied': player,
  };

  const playerPin = player ?
    <GameBoardPlayer player={player} /> :
    <GameBoardPlayer player={activePlayer} />;

  return (
    <GameBoardGroup customClassName={classNames(cxRect)}>
      <rect className="game-spot" />
      {playerPin}
    </GameBoardGroup>
  );
}

GameBoardSpot.propTypes = {
  index: PropTypes.number.isRequired,
  player: PropTypes.string,
  activePlayer: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  activePlayer: state.player,
});

export default connect(mapStateToProps)(GameBoardSpot);