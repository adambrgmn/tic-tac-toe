import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function SVGRoot({ customClassName, width, height, children }) {
  return (
    <svg
      className={classNames('svg', customClassName)}
      viewBox={`0 0 ${width} ${height}`}
    >
      {children}
    </svg>
  );
}

SVGRoot.propTypes = {
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
