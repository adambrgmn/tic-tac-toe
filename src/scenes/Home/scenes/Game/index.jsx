import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import GameBoard from '../../../../components/GameBoard';
import WinnerMessage from '../../../../components/WinnerMessage';
import TransitionCover from '../../../../components/TransitionCover';

export function Game({ winner }) {
  const displayWinnerMessage = winner ? <WinnerMessage winner={winner} /> : null;
  return (
    <div className="section section-game">
      <GameBoard />
      <ReactCSSTransitionGroup
        transitionName="winner-message"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        {displayWinnerMessage}
      </ReactCSSTransitionGroup>
      <TransitionCover />
    </div>
  );
}

Game.propTypes = {
  winner: PropTypes.string,
};

const mapStateToProps = (state) => ({
  winner: state.winner,
});

export default connect(mapStateToProps)(Game);
