import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { resetGame } from '../../actions';

import Player from '../Player';
import SVGRoot from '../SVGRoot';

export function WinnerMessage({ winner, onClick }) {
  const winningMessage = winner === 'draw' ? 'It\'s a draw!' : 'The winner is';
  const divCx = {
    'winner-message': true,
  };

  return (
    <div className={classNames(divCx)}>
      <h2 className="winner-message-text">{winningMessage}</h2>
      <SVGRoot customClassName="winner-message-svg" width={140} height={140}>
        <Player player={winner} inverted />
      </SVGRoot>
      <button
        className="winner-message-button"
        onClick={onClick}
      >
        Rematch?
      </button>
    </div>
  );
}

WinnerMessage.propTypes = {
  winner: PropTypes.string,
  onClick: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(resetGame()),
});

export default connect(null, mapDispatchToProps)(WinnerMessage);
