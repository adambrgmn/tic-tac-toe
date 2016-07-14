import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function SVGGroup({ customClassName, children }) {
  const cx = {
    'svg-group': true,
  };

  return <g className={classNames(cx, customClassName)}>{children}</g>;
}

SVGGroup.propTypes = {
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
