import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function MenuButton({ children, customClassName }) {
  const cx = {
    'btn-menu': true,
  };

  return <button className={classNames(cx, customClassName)}>{children}</button>;
}

MenuButton.propTypes = {
  children: PropTypes.string.isRequired,
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
