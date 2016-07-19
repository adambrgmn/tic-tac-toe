import React, { PropTypes } from 'react';
import classNames from 'classnames';

import SVGGroup from '../SVGGroup';

export default function Player({ player, inverted, customClassName }) {
  const cx = {
    'game-player': true,
    'game-player-o-circle': player === 'o',
    'game-player-x-line': player === 'x',
    'game-player-draw-line': player === 'draw',
    inverted,
  };

  let figure = <line className={classNames(cx)} x1="60" y1="70" x2="80" y2="70" />;

  if (player === 'o') {
    figure = <circle className={classNames(cx)} cx="70" cy="70" r="10" />;
  } else if (player === 'x') {
    figure = [
      <line key="line1" className={classNames(cx)} x1="80" y1="60" x2="60" y2="80" />,
      <line key="line2" className={classNames(cx)} x1="80" y1="80" x2="60" y2="60" />,
    ];
  }

  return (
    <SVGGroup customClassName={classNames(customClassName, `game-player-${player}`)}>
      {figure}
    </SVGGroup>
  );
}

Player.propTypes = {
  player: PropTypes.string,
  inverted: PropTypes.bool,
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
