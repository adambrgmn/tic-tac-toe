import React, { PropTypes } from 'react';

import Player from '../../../../../../components/Player';
import SVGRoot from '../../../../../../components/SVGRoot';

export default function WinnerMessage({ winner }) {
  return (
    <div className="winner-message">
      <SVGRoot customClassName="winner-message-svg" width={140} height={140}>
        <Player player={winner} inverted />
      </SVGRoot>
    </div>
  );
}

WinnerMessage.propTypes = {
  winner: PropTypes.string,
};
