import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function GameBoardGroup({ customClassName, children }) {
  const cx = {
    'game-board-group': true,
  };

  return <g className={classNames(cx, customClassName)}>{children}</g>;
}

GameBoardGroup.propTypes = {
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
