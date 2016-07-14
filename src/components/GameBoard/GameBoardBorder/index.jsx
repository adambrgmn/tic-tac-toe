import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function GameBoardBorder({ customClassName, coordinates }) {
  const cx = { 'game-border': true };

  return <line className={classNames(cx, customClassName)} {...coordinates} />;
}

GameBoardBorder.propTypes = {
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  coordinates: PropTypes.objectOf((propValue, key, componentName, location, propFullName) => {
    const keyNames = ['x1', 'x2', 'y1', 'y2'];
    const match = keyNames.reduce((prev, curr) => {
      if (curr === key) return true;
      return prev;
    }, false);

    if (!match) {
      return new Error(
        `Invalid prop from ${propFullName} supplied to ${componentName}. Validation failed.`
      );
    }

    return null;
  }),
};
