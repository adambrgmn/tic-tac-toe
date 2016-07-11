import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function ButtonGroup({ show, children, customClassName }) {
  const cx = {
    hidden: !show,
    'btn-group': true,
  };

  return (
    <div className={classNames(customClassName, cx)}>
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
