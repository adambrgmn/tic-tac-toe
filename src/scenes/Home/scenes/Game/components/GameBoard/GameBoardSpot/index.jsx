import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { pickSpot, setNextPlayer } from '../../../../../../../actions';
import pickComputerSpot from '../../../../../../../services/pickComputerSpot';
import GameBoardPlayer from '../GameBoardPlayer';

export function GameBoardSpot({ index, player, activePlayer, onClick }) {
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
      onClick={() => onClick(activePlayer, index)}
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
  onClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activePlayer: state.player,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (activePlayer, index) => {
    dispatch(pickSpot(activePlayer, index));
    dispatch(setNextPlayer());

    pickComputerSpot().then(res => {
      dispatch(pickSpot(res.player, res.index));
      dispatch(setNextPlayer());
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoardSpot);
